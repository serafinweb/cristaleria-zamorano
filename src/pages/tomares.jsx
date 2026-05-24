import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/ventanas-aluminio-pvc.png";

export default function Tomares() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en Tomares Sevilla | Cristales y Mamparas a Medida</title>
        <meta
          name="description"
          content="Cristalería en Tomares, Aljarafe de Sevilla. Instalación urgente de cristales, mamparas de baño y sustitución de lunas rotas en Aljamar y Santa Eufemia. Presupuesto 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/tomares" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tomares, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/tomares",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en Tomares, Sevilla. Servicio urgente de instalación de cristales, lunas rotas, mamparas de ducha y ventanas."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #032b4d 0%, #064070 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en Tomares
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
        <h2>Expertos en cristalería en Tomares y el Aljarafe</h2>
        <p>
          Tomares es uno de los municipios con mayor calidad de vida del Aljarafe y de toda Sevilla. 
          Destaca por su urbanismo residencial ordenado, con importantes zonas y urbanizaciones como 
          <strong>Aljamar</strong>, <strong>Santa Eufemia</strong>, <strong>Ciudad Parque</strong> y 
          <strong>Camino Viejo</strong>, además de contar con excelentes parques como el del Pandero.
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> prestamos un servicio especializado a las viviendas de alto standing 
          y locales comerciales de Tomares. Ofrecemos instalaciones de cristales templados de seguridad, mamparas de baño 
          con perfilería minimalista a medida, y soluciones avanzadas de doble acristalamiento para un aislamiento 
          térmico y acústico insuperable en tu hogar. Visita nuestra sección de <Link to="/servicios">servicios de cristalería</Link> 
          para conocer todos los detalles de nuestro trabajo.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas un cristalero urgente en Tomares?</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Si has sufrido un percance, robo o accidente con tus cristales, nuestro equipo se desplaza con rapidez a 
                cualquier punto de Tomares y los municipios limítrofes del Aljarafe. Garantizamos la máxima seguridad en la 
                retirada y sustitución inmediata del vidrio dañado.
              </p>
              <p>
                Diseñamos e instalamos cristales a medida para mesas, repisas, escaparates y mamparas a medida con acabados 
                de gran durabilidad. Infórmate sobre nuestra oferta completa de <Link to="/servicios">servicios a medida</Link>.
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
                alt="Cristalería Zamorano en Tomares"
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
                <li>Desplazamiento inmediato a Tomares y municipios limítrofes</li>
                <li>Montaje profesional adaptado a viviendas de alta calidad</li>
                <li>Especialistas en mamparas de ducha de vidrio templado de seguridad</li>
                <li>Sustitución urgente de vidrios de escaparates en el mismo día</li>
                <li>Aislamiento acústico optimizado para el descanso en tu hogar</li>
                <li>Presupuestos gratuitos y sin compromiso en menos de 24 horas</li>
              </ul>
            </div>
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>+100k Montajes</h3>
                  <p>Instalaciones de vidrio en toda la comarca del Aljarafe</p>
                </div>
                <div className="metrica">
                  <h3>7 Premios</h3>
                  <p>Galardones por atención, rapidez y calidad artesanal</p>
                </div>
              </div>
              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>+30 Años</h3>
                  <p>Líderes en el sector del acristalamiento y carpintería de aluminio</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CIERRE */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Pide presupuesto sin compromiso en Tomares.{" "}
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
