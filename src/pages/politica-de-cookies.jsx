import React from "react";
import { Helmet } from "react-helmet-async";
import "./Legal.css";

export default function PoliticaCookies() {
  return (
    <div className="legal-page">
      <Helmet>
        <title>Política de Cookies | Cristalería Zamorano Sevilla</title>
        <meta
          name="description"
          content="Política de Cookies de Cristalería Zamorano. Información transparente sobre el uso de cookies estrictamente técnicas e indispensables en nuestra web."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/politica-de-cookies" />
      </Helmet>

      <h1>Política de Cookies</h1>

      <p>
        Este sitio web utiliza cookies técnicas para garantizar el correcto funcionamiento y la seguridad del portal. 
        A continuación, detallamos de forma transparente qué son las cookies y cómo las gestionamos.
      </p>

      <h2>1. ¿Qué es una cookie?</h2>
      <p>
        Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. 
        Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página, optimizando su experiencia de usuario.
      </p>

      <h2>2. Cookies utilizadas en este sitio web</h2>
      <p>
        De acuerdo con las directrices de la Agencia Española de Protección de Datos (AEPD), procedemos a detallar el uso de cookies de esta web:
      </p>
      <ul>
        <li>
          <strong>Cookies técnicas (estrictamente necesarias):</strong> Son aquellas indispensables para permitir la navegación por la web 
          y utilizar sus opciones de forma segura, como por ejemplo cargar fuentes CSS, gestionar el enrutamiento o el renderizado React en el cliente.
        </li>
      </ul>

      <h2>3. Ausencia de cookies de seguimiento y publicidad</h2>
      <p>
        Este sitio web <strong>no utiliza</strong> cookies analíticas, de marketing, publicitarias ni de seguimiento de comportamiento de terceros. 
        Tampoco recopilamos información personal sin su conocimiento explícito.
      </p>

      <h2>4. Cómo desactivar las cookies</h2>
      <p>
        En cualquier momento puede ejercer su derecho de desactivación o eliminación de cookies de este sitio web a través de los ajustes de configuración de su navegador de Internet.
      </p>
    </div>
  );
}
