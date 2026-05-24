import React from "react";
import { Helmet } from "react-helmet-async";
import "./DosHermanas.css";
import heroDosHermanas from "../assets/DosHermanas/hero-doshermanas.png";
import trabajoCristal from "../assets/DosHermanas/cristaleria-trabajo.png";
import Services from "../components/Services";

export default function DosHermanas() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en Dos Hermanas | Servicio Urgente y Cristales a Medida</title>
        <meta
          name="description"
          content="Cristalería en Dos Hermanas con servicio urgente. Instalación y reparación de cristales, espejos, mamparas y ventanas de aluminio. Atención inmediata y presupuesto en 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/dos-hermanas" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dos Hermanas, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/dos-hermanas",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en Dos Hermanas con servicio urgente. Instalación y reparación de cristales, espejos, mamparas y ventanas de aluminio."
          }
          `}
        </script>
      </Helmet>

      {/* HERO */}
      <div className="hero-dos-hermanas">
        <img
          src={heroDosHermanas}
          alt="Cristalería en Dos Hermanas – instalación de cristales a medida"
        />

        <div className="hero-text">
          {/* TÍTULO — ESCRITORIO: 1 línea / MÓVIL: 3 líneas (via CSS) */}
          <h1 className="fade-in text-gradient titulo-dos-hermanas">
            Cristalería en Dos Hermanas
          </h1>

          <p className="fade-in-sub">Instalación urgente · Presupuesto en 24h</p>

          <div className="hero-botones">
            <a href="tel:+34955631356" className="btn hero-btn fade-in-btn">
              ¡Llama ahora!
            </a>

            <a
              href="https://wa.me/34659521144"
              target="_blank"
              rel="noopener noreferrer"
              className="btn whatsapp hero-whatsapp fade-in-btn"
            >
              WhatsApp
            </a>
          </div>

          <small className="hero-subtext">
            te atendemos en menos de 5 minutos
          </small>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <section className="page-content">
        <h2>Especialistas en cristalería en Dos Hermanas</h2>
        <p>
          Atendemos toda la zona de Dos Hermanas: Montequinto, Olivar de Quintos,
          La Motilla, El Arenal, Vistazul, Ibarburu, Las Portadas y barriadas cercanas.
          Instalamos cristales a medida, espejos, mamparas, ventanas de aluminio y
          realizamos reparaciones urgentes con desplazamiento rápido.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      {/* CTA + IMAGEN */}
      <div className="dh-bloque">
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas un cristal urgente en Dos Hermanas?</h3>

          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>Estamos disponibles para atenderte ahora mismo.</p>

              <p>
                Ofrecemos soluciones de cristalería con acabados impecables y materiales
                de alta calidad. Transformamos tu hogar o negocio con vidrio a medida,
                seguridad y diseño profesional.
              </p>

              <div className="cta-botones">
                <a href="tel:+34955631356" className="btn">Llamar ahora</a>

                <a
                  href="https://wa.me/34659521144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="cta-imagen-foto">
              <img
                src={trabajoCristal}
                alt="Trabajo de cristalería profesional en Dos Hermanas"
              />
            </div>
          </div>
        </section>

        {/* BLOQUE AZUL */}
        <div className="seccion-azul">
          <section className="grid-final">
            {/* BENEFICIOS */}
            <div className="bloque-barrio">
              <ul className="beneficios">
                <li>Servicio urgente en Dos Hermanas y alrededores</li>
                <li>Instalación de cristales, espejos y mamparas</li>
                <li>Presupuesto rápido y atención personalizada</li>
                <li>Materiales de alta calidad y acabados premium</li>
                <li>Más de 30 años de experiencia en cristalería</li>
              </ul>
            </div>

            {/* MÉTRICAS */}
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>100k Montajes Completados</h3>
                  <p>Instalaciones realizadas en hogares y negocios</p>
                </div>

                <div className="metrica">
                  <h3>7 Premios por Calidad</h3>
                  <p>Reconocimientos por excelencia en producto y servicio</p>
                </div>
              </div>

              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>30 Años de Experiencia</h3>
                  <p>Trayectoria consolidada en cristalería profesional</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CONTACTO FINAL */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Pide tu presupuesto sin compromiso. Llámanos o, si lo prefieres, envía un correo a<br />
            <a
              href="mailto:cristaleria@cristaleriazamorano.com"
              className="correo-destacado"
            >
              cristaleria@cristaleriazamorano.com
            </a>
            <br />
            y te responderemos a la mayor brevedad posible.
          </p>

          <p className="texto-mobile">
            Pide tu presupuesto sin compromiso. Llámanos o, si lo prefieres, contáctanos.<br />
            <a
              href="mailto:cristaleria@cristaleriazamorano.com"
              className="btn correo-mobile"
            >
              Enviar correo
            </a>
            <br />
            <span className="correo-respuesta">
              Te responderemos a la mayor brevedad posible.
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
