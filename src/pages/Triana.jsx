import React from "react";
import { Helmet } from "react-helmet-async";
import "./Triana.css";
import heroTriana from "../assets/Triana/hero-triana.png";
import trabajoCristal from "../assets/Triana/cristaleria-trabajo.png";
import Services from "../components/Services";

export default function Triana() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en Triana | Servicio Urgente y Cristales a Medida</title>
        <meta
          name="description"
          content="Cristalería en Triana con servicio urgente. Instalación y reparación de cristales, espejos, mamparas y ventanas de aluminio. Atención inmediata y presupuesto en 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/triana" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Triana, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/triana",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en Triana con servicio urgente. Instalación y reparación de cristales, espejos, mamparas y ventanas de aluminio."
          }
          `}
        </script>
      </Helmet>

      {/* HERO */}
      <div className="hero-triana">
        <img
          src={heroTriana}
          alt="Cristalería en Triana – instalación de cristales a medida"
        />

        <div className="hero-text">
          {/* TÍTULO — ESCRITORIO: 1 línea / MÓVIL: 2 líneas (formato Camas) */}
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalería en Triana
          </h1>

          <p className="fade-in-sub">Servicio urgente · Presupuesto en 24h</p>

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
        <h2>Expertos en cristalería en Triana</h2>
        <p>
          Ofrecemos servicio profesional de cristalería en todo el barrio de Triana:
          Puente de Triana, San Jacinto, Pagés del Corro, Altozano, Betis y zonas
          cercanas. Instalamos cristales a medida, espejos, mamparas, ventanas de
          aluminio y realizamos reparaciones urgentes con atención rápida y
          personalizada.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      {/* CTA + IMAGEN */}
      <div className="tr-bloque">
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas un cristal urgente en Triana?</h3>

          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>Estamos disponibles para atenderte ahora mismo.</p>

              <p>
                Somos especialistas en cristales a medida, ofreciendo soluciones de vidrio
                que combinan diseño, seguridad y funcionalidad. Transformamos tu hogar o
                negocio con materiales de primera calidad y acabados impecables.
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
                alt="Trabajo de cristalería profesional en Triana"
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
                <li>Atención inmediata en todo Triana y zonas cercanas</li>
                <li>Instalación profesional de cristales, espejos y mamparas</li>
                <li>Reparaciones urgentes con desplazamiento rápido</li>
                <li>Materiales de alta calidad y acabados impecables</li>
                <li>Presupuesto en menos de 24 horas</li>
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