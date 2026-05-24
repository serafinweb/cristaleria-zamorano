import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/cristales-medida.png";

export default function LosBermejales() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en Los Bermejales Sevilla | Cristales y Mamparas a Medida</title>
        <meta
          name="description"
          content="Cristalería en Los Bermejales, Sevilla. Cristales a medida, mamparas de baño y reparación de lunas rotas. Servicio rápido cerca de Lagoh. Presupuesto en 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/los-bermejales" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Los Bermejales, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/los-bermejales",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en Los Bermejales, Sevilla. Servicio urgente de lunas rotas, cristales de seguridad, mamparas de ducha y cerramientos."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #073863 0%, #0d5aa0 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en Los Bermejales
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
        <h2>Expertos en cristalería en Los Bermejales</h2>
        <p>
          Los Bermejales es una de las zonas residenciales de mayor expansión y dinamismo en el sur de Sevilla.
          Con amplias avenidas como la <strong>Avenida de Alemania</strong>, la <strong>Avenida de Finlandia</strong> y
          el <strong>Paseo de Europa</strong>, cuenta con viviendas de diseño moderno, urbanizaciones familiares y
          una creciente oferta comercial, además de su gran cercanía al centro comercial <strong>Lagoh</strong> y al 
          Parque del Guadaíra.
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> damos respuesta a las demandas específicas de este barrio. Desde
          la sustitución de vidrios rotos en grandes ventanales residenciales de doble acristalamiento (Climalit) para 
          mantener el confort térmico, hasta la instalación de mamparas de ducha de vidrio templado a medida y espejos 
          para baños de diseño. Si deseas descubrir más acerca de nuestro trabajo, visita nuestra sección de{" "}
          <Link to="/servicios">servicios de cristalería</Link>.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas reparar un cristal roto en Los Bermejales?</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Ofrecemos un servicio de reparación ágil y profesional en Los Bermejales y alrededores, incluyendo
                Reina Mercedes y Heliópolis. Nos desplazamos de inmediato ante cualquier rotura de urgencia para 
                garantizar la seguridad de tu hogar o tu local comercial en el menor tiempo posible.
              </p>
              <p>
                Nuestra furgoneta taller se desplaza con repuestos habituales, permitiéndonos realizar muchos montajes 
                en la primera visita. Conoce todos nuestros <Link to="/servicios">servicios de reparación de cristales</Link> 
                y mamparas a medida.
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
                alt="Cristalería Zamorano en Los Bermejales"
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
                <li>Instalación rápida en Los Bermejales y Heliópolis</li>
                <li>Especialistas en doble acristalamiento y aislamiento termoacústico</li>
                <li>Montaje de mamparas de ducha y espejos a medida</li>
                <li>Reparación de urgencias de cristalería en el mismo día</li>
                <li>Precios ajustados y calidad certificada en cada material</li>
                <li>Presupuestos personalizados gratuitos en menos de 24 horas</li>
              </ul>
            </div>
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>+100k Montajes</h3>
                  <p>Instalaciones con éxito en Sevilla capital y alrededores</p>
                </div>
                <div className="metrica">
                  <h3>7 Premios</h3>
                  <p>Galardones concedidos por calidad de materiales y montaje</p>
                </div>
              </div>
              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>+30 Años</h3>
                  <p>Compromiso firme con la seguridad y la tradición cristalera</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CIERRE */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Pide ahora presupuesto para Los Bermejales sin compromiso alguno.{" "}
            <Link to="/servicios" style={{ fontWeight: 700 }}>
              Consulta todos nuestros servicios
            </Link>{" "}
            o contacta con nosotros vía mail en{" "}
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
