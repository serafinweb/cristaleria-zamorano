Cristalería Zamorano – Web Corporativa

Sitio web moderno, rápido y optimizado para SEO desarrollado con React + Vite, desplegado en Vercel y acelerado mediante Cloudflare CDN.

---

🚀 Tecnologías utilizadas

• React 18
• Vite
• JavaScript / JSX
• CSS / Tailwind (si aplica)
• Vercel (deploy)
• Cloudflare (DNS, CDN, caché, seguridad)
• Brevo (envío de emails del formulario)


---

📦 Instalación y uso en local

Clona el repositorio:

git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo


Instala dependencias:

npm install


Inicia el servidor de desarrollo:

npm run dev


El proyecto estará disponible en:

http://localhost:5173


---

🛠 Scripts disponibles

Comando	Descripción	
npm run dev	Inicia el servidor de desarrollo	
npm run build	Genera la build de producción	
npm run preview	Previsualiza la build localmente	


---

🌐 Deploy

El proyecto está desplegado en Vercel, con:

• Build automática desde npm run build
• Carpeta de salida: dist/
• Optimización adicional mediante Cloudflare (caché, HTTPS, seguridad)


---

📩 Formulario de contacto

El formulario utiliza Brevo API v3 para enviar correos:

• Sender: gracianozamorano@cristaleriasevilla.com
• Email Routing gestionado por Cloudflare
• Envío transaccional mediante endpoint:


POST https://api.brevo.com/v3/smtp/email


---

📁 Estructura del proyecto

/
├── public/          # Archivos estáticos (favicon, robots.txt, etc.)
├── src/
│   ├── components/  # Componentes reutilizables
│   ├── pages/       # Páginas principales
│   ├── assets/      # Imágenes y recursos
│   ├── App.jsx      # App principal
│   └── main.jsx     # Punto de entrada
└── package.json


---

🔒 Seguridad

• Repo privado en GitHub
• Variables sensibles en .env (no incluidas en el repo)
• Cloudflare activo con:• HTTPS
• HSTS
• Bot Fight Mode
• Cache Everything
• Email Routing



---

📄 Licencia

Proyecto privado desarrollado para Cristalería Zamorano.
No se permite su distribución sin autorización.
