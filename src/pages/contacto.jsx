import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Inicio.css";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";

export default function Contacto() {
  return (
    <div className="page">
      <Helmet>
        <title>Contacto y Presupuesto Gratis | Cristalería Zamorano Sevilla</title>
        <meta
          name="description"
          content="Contacte con Cristalería Zamorano. Solicite su presupuesto sin compromiso para cristales a medida, mamparas de baño o cerramientos en Sevilla."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/contacto" />
      </Helmet>

      <div className="inicio-bloque">
        {/* HERO SECTION DE CONTACTO */}
        <Hero
          title="Hablemos de su Proyecto"
          subtitle="Solicite su presupuesto personalizado y sin costes ocultos. Nos adaptamos a sus necesidades técnicas."
          urgentText="Atención Comercial y Técnica Inmediata en Sevilla"
        />

        {/* CONTENIDO Y FORMULARIO */}
        <section className="contact-main-section page-content">
          <div className="contact-grid">
            
            {/* Columna Izquierda: Información Corporativa */}
            <div className="contact-info-panel glass-card">
              <span className="chip">Datos de Contacto</span>
              <h2>¿Cómo podemos ayudarle hoy?</h2>
              <p className="contact-panel-intro">
                Estamos a su disposición para asesorarle de forma gratuita sobre la mejor opción para sus cristales a medida o reparaciones.
              </p>

              <div className="contact-channels">
                <div className="channel-item">
                  <div className="channel-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h12" />
                    </svg>
                  </div>
                  <div className="channel-details">
                    <h4>Teléfonos de Atención</h4>
                    <p>Fijo Comercial: <a href="tel:+34955631356">955 631 356</a></p>
                    <p>Urgencias 24h: <a href="https://wa.me/34659521144">659 521 144</a></p>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="channel-details">
                    <h4>Correo Electrónico</h4>
                    <p><a href="mailto:cristaleria@cristaleriazamorano.com">cristaleria@cristaleriazamorano.com</a></p>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="channel-details">
                    <h4>Horario Comercial</h4>
                    <p>Lunes a Viernes: 09:30 a 14:00 y 17:30 a 20:00</p>
                    <p className="urgent-badge">Urgencias: Atención 24/7 en Sevilla</p>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="channel-details">
                    <h4>Dirección Física</h4>
                    <p>Polígono la red, calle 6, parcela 54, nave 8</p>
                    <p>41500, Alcalá de Guadaíra, Sevilla</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Formulario Premium */}
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* SECCIÓN MAPA Y GEOLOCALIZACIÓN */}
        <section className="contact-map-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.833097932983!2d-5.987684523556016!3d37.37788527207871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126e9e6f4adc19%3A0x2a61b6a8ff90eb1a!2sCristaler%C3%ADa%20Zamorano!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dirección física de Cristalería Zamorano en Sevilla"
            ></iframe>
          </div>
        </section>

        {/* NAVEGACIÓN SECUNDARIA DE CIERRE */}
        <section className="cierre-contacto glass-card">
          <p className="texto-desktop">
            ¿Desea conocer nuestras áreas de servicio? Explore nuestra página de&nbsp;
            <Link to="/servicios" style={{ fontWeight: 700 }}>
              servicios de cristalería
            </Link>
            &nbsp;o regrese al&nbsp;
            <Link to="/" style={{ fontWeight: 700 }}>
              inicio
            </Link>
            .
          </p>
          <p className="texto-mobile">
            <Link to="/servicios">Ver servicios</Link>
            &nbsp;·&nbsp;
            <Link to="/">Volver al inicio</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
