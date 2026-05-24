import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/mamparas-bano.png";

export default function Bellavista() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en Bellavista Sevilla | Cristales y Vidrios a Medida</title>
        <meta
          name="description"
          content="Cristalería en Bellavista, Sevilla. Instalación y reparación de cristales, mamparas y lunas de escaparate. Servicio rápido en Jardines de Hércules. Presupuesto 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/bellavista" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bellavista, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/bellavista",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en Bellavista, Sevilla. Instalación urgente de cristales a medida, mamparas de ducha, espejos y carpintería de aluminio."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #043054 0%, #07477e 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en Bellavista
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
        <h2>Servicios de cristalería en Bellavista y Jardines de Hércules</h2>
        <p>
          Bellavista es una barriada con gran dinamismo e identidad propia situada en el extremo sur de Sevilla, 
          muy próxima al término municipal de Dos Hermanas. Cuenta con zonas muy transitadas como la{" "}
          <strong>Avenida de Bellavista</strong>, áreas residenciales modernas como <strong>Jardines de Hércules</strong>, 
          y centros asistenciales de referencia como el <strong>Hospital de Valme</strong>.
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> proporcionamos un servicio completo e inmediato de acristalamiento 
          en toda la zona. Damos respuesta rápida a roturas de lunas en locales comerciales del barrio, instalamos 
          espejos y mamparas a medida en pisos residenciales, y reparamos ventanas de aluminio o PVC. Conoce todos 
          nuestros <Link to="/servicios">servicios de cristalería</Link> y pídenos presupuesto sin compromiso.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Buscas un cristalero de urgencia en Bellavista?</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Atendemos incidencias en cualquier calle de Bellavista: calle Guadalajara, Avenida de la Salud, Jardines de Hércules y 
                las inmediaciones del Hospital de Valme. Llevamos a cabo reparaciones rápidas de escaparates y lunas rotas con materiales 
                homologados de máxima seguridad.
              </p>
              <p>
                Si tienes un seguro de hogar o comercio, nos encargamos de facilitarte la documentación necesaria y realizar la instalación 
                con la máxima celeridad. Conoce todos nuestros <Link to="/servicios">servicios de reparación</Link>.
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
                alt="Cristalería Zamorano en Bellavista"
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
                <li>Asistencia ágil y rápida en todo el barrio de Bellavista</li>
                <li>Especialistas en cristales a medida para viviendas y negocios</li>
                <li>Montaje de mamparas de baño de diseño en Jardines de Hércules</li>
                <li>Sustitución de escaparates y vidrios de seguridad comerciales</li>
                <li>Trabajamos con los principales fabricantes y marcas del sector</li>
                <li>Elaboración de presupuestos gratuitos y sin compromiso en 24h</li>
              </ul>
            </div>
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>+100k Montajes</h3>
                  <p>Trabajos de carpintería y vidrio completados en Sevilla</p>
                </div>
                <div className="metrica">
                  <h3>7 Premios</h3>
                  <p>Reconocimientos al servicio al cliente y calidad de materiales</p>
                </div>
              </div>
              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>+30 Años</h3>
                  <p>Experiencia avalada por miles de familias sevillanas</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CIERRE */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Solicita ahora tu presupuesto en Bellavista sin compromiso.{" "}
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
