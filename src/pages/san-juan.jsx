import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/cristaleria-trabajo.png";

export default function SanJuan() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en San Juan de Aznalfarache Sevilla | Espejos y Mamparas</title>
        <meta
          name="description"
          content="Cristalería en San Juan de Aznalfarache, Sevilla. Cristaleros a domicilio urgentes en Barrio Alto y Barrio Bajo. Cristales a medida y mamparas. Presupuesto 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/san-juan" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Juan de Aznalfarache, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/san-juan",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en San Juan de Aznalfarache, Sevilla. Asistencia urgente 24h, vidrios a medida, mamparas de ducha, espejos y cerramientos de aluminio."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #01182c 0%, #033059 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en San Juan de Aznalfarache
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
        <h2>Expertos en cristalería en San Juan de Aznalfarache</h2>
        <p>
          San Juan de Aznalfarache es el principal nexo de unión entre Sevilla y la comarca del Aljarafe, flanqueado por el río 
          Guadalquivir y coronado por el icónico cerro de los <strong>Sagrados Corazones</strong>. Cuenta con una gran densidad 
          de población repartida entre el <strong>Barrio Alto</strong>, el <strong>Barrio Bajo</strong>, <strong>Cooperativa San José</strong> 
          y las exclusivas áreas residenciales de <strong>Valparaíso</strong>, con inmejorable conexión con el Metro de Sevilla 
          (estaciones de San Juan Alto y San Juan Bajo).
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> nos encargamos del mantenimiento de todo tipo de acristalamientos en San Juan. 
          Ofrecemos servicio rápido de sustitución de lunas rotas en locales comerciales a pie de calle, montaje de mamparas de ducha 
          a medida de alta estanqueidad y vidrios de seguridad templados para el hogar. Consulta nuestros diversos 
          <Link to="/servicios">servicios de cristalería</Link> y pídenos presupuesto sin compromiso.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas reparar un cristal de emergencia en San Juan?</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Si se ha producido la rotura de una ventana, espejo o puerta de paso en tu domicilio o negocio en San Juan de Aznalfarache, 
                nuestro equipo se desplazará urgentemente a tu dirección. Ofrecemos respuesta profesional en el Barrio Alto, Barrio Bajo 
                y áreas limítrofes las 24 horas del día.
              </p>
              <p>
                Además de urgencias, realizamos proyectos de decoración a medida con espejos biselados, repisas de cristal y barandillas 
                para balcones. Consulta la sección de <Link to="/servicios">instalaciones de cristal</Link> para conocer más detalles.
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
                alt="Cristalería Zamorano en San Juan"
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
                <li>Desplazamiento urgente a todo San Juan de Aznalfarache</li>
                <li>Cambio rápido de cristales Climalit de ventana</li>
                <li>Gran variedad en mamparas de baño y espejos decorativos a medida</li>
                <li>Asistencia profesional a comunidades y locales comerciales</li>
                <li>Uso exclusivo de materiales de primera calidad certificada</li>
                <li>Presupuestos claros, cerrados y gratuitos elaborados en 24 horas</li>
              </ul>
            </div>
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>+100k Montajes</h3>
                  <p>Instalaciones y reformas en Sevilla y su área metropolitana</p>
                </div>
                <div className="metrica">
                  <h3>7 Premios</h3>
                  <p>Distinciones al servicio, calidad y rapidez en el sector de la cristalería</p>
                </div>
              </div>
              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>+30 Años</h3>
                  <p>Experiencia contrastada avalada por tres décadas de trabajo impecable</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CIERRE */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Pide presupuesto sin compromiso en San Juan de Aznalfarache.{" "}
            <Link to="/servicios" style={{ fontWeight: 700 }}>
              Ver todos nuestros servicios
            </Link>{" "}
            o envíanos un correo electrónico a{" "}
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
