export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, telefono, email, servicio, mensaje } = req.body;

  if (!nombre || !telefono || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    console.error("API Key de Brevo no configurada");
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: 'Contacto Web Zamorano',
          email: 'gracianozamorano@cristaleriasevilla.com'
        },
        to: [
          {
            email: 'gracianozamorano@cristaleriasevilla.com',
            name: 'Cristalería Zamorano'
          }
        ],
        replyTo: {
          email: email,
          name: nombre
        },
        subject: `Nuevo presupuesto de web: ${servicio} - ${nombre}`,
        htmlContent: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>Nueva solicitud de presupuesto desde la web</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Servicio Requerido:</strong> ${servicio}</p>
            <br />
            <h3>Detalles del proyecto:</h3>
            <p style="background: #f4f4f4; padding: 15px; border-left: 4px solid #0056b3;">
              ${mensaje.replace(/\n/g, '<br />')}
            </p>
          </div>
        `
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
