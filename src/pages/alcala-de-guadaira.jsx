import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/reparaciones-urgentes.png";

export default function AlcalaDeGuadaira() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en Alcalá de Guadaíra Sevilla | Servicio Urgente y Cristales</title>
        <meta
          name="description"
          content="Cristalería en Alcalá de Guadaíra, Sevilla. Servicio urgente en Silos y Campo de las Beatas. Cristales a medida, mamparas de baño y escaparates comerciales. Presupuesto 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/alcala-de-guadaira" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Alcalá de Guadaíra, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/alcala-de-guadaira",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en Alcalá de Guadaíra, Sevilla. Servicio urgente 24h para sustitución de vidrios rotos, instalación de mamparas, ventanas y cerramientos."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #011424 0%, #032b4d 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en Alcalá de Guadaíra
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
        <h2>Servicio profesional de cristalería en Alcalá de Guadaíra</h2>
        <p>
          Alcalá de Guadaíra es el mayor polo industrial y uno de los municipios con más historia de la provincia de Sevilla, 
          con su majestuoso <strong>Castillo medieval</strong>, el bello entorno natural del <strong>Parque de Oromana</strong> 
          y su entrañable tradición panadera. Es una gran localidad con barrios muy residenciales y dinámicos como 
          <strong>Silos</strong>, <strong>Campo de las Beatas</strong>, <strong>La Rinconada</strong> y <strong>Rabesa</strong>.
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> proporcionamos una cobertura rápida y especializada a los hogares, oficinas y 
          numerosas naves industriales alcalareñas. Si necesitas reparar de urgencia un cristal roto en tu negocio o buscas 
          mejorar el aislamiento acústico de tu vivienda mediante doble acristalamiento (Climalit) de alta calidad, somos tu opción 
          más segura. Explora todos nuestros <Link to="/servicios">servicios de cristalería</Link> y pídenos un presupuesto cerrado.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas reparar un vidrio roto en Alcalá?</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Si tienes un incidente con lunas o ventanas, nuestro equipo de cristaleros se desplazará a cualquier calle de Alcalá 
                de Guadaíra y sus polígonos industriales en tiempo récord. Retiramos todo rastro de peligro y reponemos el vidrio el mismo día 
                para tu tranquilidad.
              </p>
              <p>
                También fabricamos a medida mamparas de ducha de gran durabilidad y diseño minimalista, espejos biselados para interiorismo 
                y barandillas protectoras de cristal. Infórmate en nuestra sección de <Link to="/servicios">instalaciones</Link>.
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
                alt="Cristalería Zamorano en Alcalá de Guadaíra"
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
                <li>Desplazamiento urgente a todo el término de Alcalá de Guadaíra</li>
                <li>Montaje rápido de escaparates comerciales y lunas industriales</li>
                <li>Especialistas en mamparas de baño y espejos decorativos a medida</li>
                <li>Sustitución de vidrios Climalit con óptimas propiedades térmicas</li>
                <li>Garantía por escrito en cada una de nuestras intervenciones</li>
                <li>Presupuestos claros y cerrados en menos de 24 horas y sin sorpresas</li>
              </ul>
            </div>
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>+100k Montajes</h3>
                  <p>Intervenciones en viviendas, locales y fábricas sevillanas</p>
                </div>
                <div className="metrica">
                  <h3>7 Premios</h3>
                  <p>Distinciones del sector que avalan nuestra dedicación y fiabilidad</p>
                </div>
              </div>
              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>+30 Años</h3>
                  <p>Trayectoria cristalera familiar con profesionales experimentados</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CIERRE */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Solicita ahora tu presupuesto en Alcalá de Guadaíra de forma totalmente gratuita.{" "}
            <Link to="/servicios" style={{ fontWeight: 700 }}>
              Ver todos nuestros servicios
            </Link>{" "}
            o mándanos un correo a{" "}
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
