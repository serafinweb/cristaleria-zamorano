import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/reparaciones-urgentes.png";

export default function LaMacarena() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalero en La Macarena Sevilla | Reparaciones e Instalación a Medida</title>
        <meta
          name="description"
          content="Cristalería en La Macarena, Sevilla. Servicio urgente junto al Hospital de la Macarena y la Basílica. Cristales a medida, mamparas y ventanas. Presupuesto en 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/la-macarena" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "La Macarena, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/la-macarena",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en La Macarena, Sevilla. Servicio urgente de instalación y reparación de cristales, mamparas y ventanas de aluminio."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #073d6e 0%, #0b5ea8 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en La Macarena
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
        <h2>Cristalería de confianza en el barrio de La Macarena</h2>
        <p>
          La Macarena es uno de los barrios más auténticos de Sevilla, con una identidad
          propia centrada en torno a la <strong>Basílica de la Macarena</strong>, la calle{" "}
          <strong>San Luis</strong> y el <strong>Hospital Universitario Virgen Macarena</strong>.
          Es un barrio de viviendas tradicionales, comercios de proximidad y comunidades de
          vecinos que necesitan un cristalero de confianza cerca.
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> somos especialistas en el mantenimiento
          de comunidades de propietarios y en reparaciones urgentes para particulares y
          negocios en La Macarena. Sustituimos lunas rotas en el mismo día, instalamos
          mamparas de baño a medida y renovamos ventanas de aluminio y PVC con garantía.
          Descubre todos nuestros{" "}
          <Link to="/servicios">servicios de cristalería en Sevilla</Link> y pídenos
          presupuesto sin compromiso.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">Reparaciones urgentes en La Macarena</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Nos desplazamos a cualquier calle del barrio: San Luis, Feria, Resolana,
                Parque de la Macarena y zonas aledañas. Llevamos la furgoneta siempre
                equipada para no depender de pedidos de material: lo que se puede resolver
                hoy, no lo dejamos para mañana.
              </p>
              <p>
                Tanto si se trata de una ventana rota en un piso antiguo de la calle San Luis
                como de una mampara para un baño reformado cerca del Hospital de la Macarena,
                nuestro equipo está disponible. Consulta también nuestra página de{" "}
                <Link to="/servicios">servicios de cristalería</Link> para más información.
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
                alt="Cristalería Zamorano en La Macarena"
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
                <li>Atención urgente en La Macarena y barrios colindantes</li>
                <li>Mantenimiento de cristales para comunidades de propietarios</li>
                <li>Sustitución de lunas rotas en viviendas antiguas el mismo día</li>
                <li>Mamparas de ducha y bañera instaladas con precisión a medida</li>
                <li>Renovación de ventanas de aluminio y PVC con certificado térmico</li>
                <li>Presupuesto gratuito y sin compromisos en menos de 24 horas</li>
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

        {/* CIERRE */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Solicita tu presupuesto de cristalería en La Macarena sin compromiso.{" "}
            <Link to="/servicios" style={{ fontWeight: 700 }}>
              Consulta todos nuestros servicios
            </Link>{" "}
            o contáctanos en{" "}
            <a href="mailto:cristaleria@cristaleriazamorano.com" className="correo-destacado">
              cristaleria@cristaleriazamorano.com
            </a>
            .
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
