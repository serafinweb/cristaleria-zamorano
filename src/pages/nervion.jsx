import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/cristaleria-trabajo.png";

export default function Nervion() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalero en Nervión Sevilla | Reparaciones e Instalación a Medida</title>
        <meta
          name="description"
          content="Cristalería urgente en Nervión, Sevilla. Instalamos y reparamos cristales junto al Estadio Sánchez-Pizjuán y Nervión Plaza. Presupuesto en 24h sin compromiso."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/nervion" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nervión, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/nervion",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería urgente en Nervión. Instalación y reparación de cristales, espejos, mamparas y ventanas de aluminio."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #0a3d6b 0%, #075196 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en Nervión
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
          <small className="hero-subtext">Te atendemos en menos de 5 minutos</small>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <section className="page-content">
        <h2>Cristalería profesional en el barrio de Nervión</h2>
        <p>
          Nervión concentra una intensa actividad comercial y residencial en torno al{" "}
          <strong>centro comercial Nervión Plaza</strong>, la calle{" "}
          <strong>Luis de Morales</strong> y los aledaños del{" "}
          <strong>Estadio Ramón Sánchez-Pizjuán</strong>. Oficinas, comercios de retail,
          restaurantes y miles de viviendas conviven en un entorno donde cualquier rotura o
          avería en un cristal exige solución rápida y profesional.
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> llevamos más de 30 años dando servicio
          urgente en Nervión. Instalamos cristales a medida, mamparas de ducha y bañera,
          espejos personalizados y carpintería de aluminio con rapidez y garantía. Actuamos
          en el mismo día en escaparates rotos, lunas de ventana averiadas y cualquier
          incidencia con vidrio. Consulta todos nuestros{" "}
          <Link to="/servicios">servicios de cristalería en Sevilla</Link> o llámanos ahora.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA + TEXTO */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Cristal roto en Nervión? Lo resolvemos hoy</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Nos desplazamos a cualquier punto de Nervión —Luis de Morales, Eduardo Dato,
                Ramón y Cajal, Viapol— con la furgoneta completamente equipada. Sin esperas
                innecesarias y con presupuesto cerrado desde el primer momento.
              </p>
              <p>
                Tanto si tienes una urgencia en un local junto a Nervión Plaza como en un
                piso de Eduardo Dato, somos tu cristalería de referencia en el barrio. También
                puedes consultar nuestra página de{" "}
                <Link to="/servicios">servicios de cristalería</Link> para conocer todo lo
                que hacemos.
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
                src={imgTrabajo}
                alt="Cristalería Zamorano en Nervión Sevilla"
                style={{ width: "100%", height: "220px", borderRadius: "10px", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* BLOQUE AZUL */}
        <div className="seccion-azul">
          <section className="grid-final">
            <div className="bloque-barrio">
              <ul className="beneficios">
                <li>Servicio urgente en Nervión y toda Sevilla capital</li>
                <li>Reparación de escaparates comerciales en el mismo día</li>
                <li>Mamparas de baño a medida con instalación incluida</li>
                <li>Espejos personalizados para despachos y locales comerciales</li>
                <li>Carpintería de aluminio y PVC para comunidades de vecinos</li>
                <li>Presupuesto cerrado sin cargos ocultos en menos de 24 horas</li>
              </ul>
            </div>
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>+100k Montajes</h3>
                  <p>Instalaciones realizadas en Sevilla y área metropolitana</p>
                </div>
                <div className="metrica">
                  <h3>7 Premios</h3>
                  <p>Reconocimientos por excelencia en producto y servicio</p>
                </div>
              </div>
              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>+30 Años</h3>
                  <p>Trayectoria y profesionalidad en cristalería sevillana</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CONTACTO FINAL */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Pide presupuesto sin compromiso para tu trabajo de cristalería en Nervión.{" "}
            <Link to="/servicios" style={{ fontWeight: 700 }}>
              Consulta todos nuestros servicios
            </Link>{" "}
            o escríbenos a{" "}
            <a href="mailto:cristaleria@cristaleriazamorano.com" className="correo-destacado">
              cristaleria@cristaleriazamorano.com
            </a>{" "}
            y te respondemos a la mayor brevedad.
          </p>
          <p className="texto-mobile">
            <Link to="/servicios">Ver todos los servicios</Link>
            &nbsp;·&nbsp;
            <Link to="/contacto">Pedir presupuesto</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
