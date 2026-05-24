import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/servicio-urgente.png";

export default function Bormujos() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en Bormujos Sevilla | Cristales y Mamparas a Medida</title>
        <meta
          name="description"
          content="Cristalería en Bormujos, Sevilla. Servicio urgente cerca del Hospital San Juan de Dios y Universidad CEU. Cristales a medida, mamparas de ducha y lunas rotas."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/bormujos" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bormujos, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/bormujos",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en Bormujos, Sevilla. Reparación de cristales rotos, mamparas de ducha, vidrios de seguridad y cerramientos de aluminio."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #011e38 0%, #04355f 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en Bormujos
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
        <h2>Expertos en cristalería en Bormujos</h2>
        <p>
          Bormujos es una de las localidades clave del Aljarafe de Sevilla, caracterizada por albergar grandes infraestructuras 
          sociales y educativas como el <strong>Hospital San Juan de Dios del Aljarafe</strong> y el campus de la 
          <strong>Universidad CEU San Pablo</strong>. Su posición junto a la A-49 la convierte en una zona residencial 
          muy atractiva y de rápido crecimiento comercial.
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> ofrecemos cobertura integral en Bormujos para particulares, estudiantes y 
          comercios. Proporcionamos un servicio rápido para la sustitución de cristales rotos de ventanas y escaparates, 
          instalación de mamparas de baño a medida de vidrio templado e instalación de lunas y vidrios blindados de seguridad. 
          Consulta toda nuestra gama de <Link to="/servicios">servicios de cristalería</Link> y solicita presupuesto sin compromiso.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas un cristalero urgente en Bormujos?</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Si tienes un cristal roto en tu vivienda o comercio, nuestro equipo de profesionales se desplazará con rapidez a 
                Bormujos, las inmediaciones del Hospital San Juan de Dios y las urbanizaciones del entorno. Retiramos los restos y 
                colocamos el cristal nuevo en tiempo récord.
              </p>
              <p>
                Diseñamos e instalamos espejos de baño a medida, cerramientos térmicos y barandillas de cristal para interiores y exteriores. 
                Obtén más información sobre nuestros <Link to="/servicios">servicios de acristalamiento</Link>.
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
                alt="Cristalería Zamorano en Bormujos"
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
                <li>Atención y sustitución de vidrios urgentes en Bormujos</li>
                <li>Especialistas en mamparas de ducha de alta seguridad a medida</li>
                <li>Montaje de lunas comerciales para negocios locales</li>
                <li>Instalación de cristales Climalit para optimizar el aislamiento térmico</li>
                <li>Materiales con certificado de seguridad y homologados</li>
                <li>Presupuestos cerrados sin compromiso elaborados en 24h</li>
              </ul>
            </div>
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>+100k Montajes</h3>
                  <p>Trabajos garantizados en el Aljarafe y Sevilla</p>
                </div>
                <div className="metrica">
                  <h3>7 Premios</h3>
                  <p>Reconocimiento a la excelencia y satisfacción de cliente</p>
                </div>
              </div>
              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>+30 Años</h3>
                  <p>Trayectoria profesional en la instalación de vidrio y aluminio</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CIERRE */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Solicita tu presupuesto sin compromiso en Bormujos hoy mismo.{" "}
            <Link to="/servicios" style={{ fontWeight: 700 }}>
              Ver todos nuestros servicios
            </Link>{" "}
            o envíanos un correo a{" "}
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
