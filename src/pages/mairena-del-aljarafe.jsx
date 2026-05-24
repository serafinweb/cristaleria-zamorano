import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/espejos-personalizados.png";

export default function MairenaDelAljarafe() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en Mairena del Aljarafe Sevilla | Vidrio y Ventanas</title>
        <meta
          name="description"
          content="Cristalería en Mairena del Aljarafe, Sevilla. Instalación urgente de cristales a medida, mamparas en Ciudad Expo y Cavaleri. Presupuesto gratuito en 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/mairena-del-aljarafe" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mairena del Aljarafe, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/mairena-del-aljarafe",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en Mairena del Aljarafe, Sevilla. Cristaleros urgentes a domicilio. Instalación de mamparas de ducha, ventanas y cerramientos a medida."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #022645 0%, #053b6b 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en Mairena del Aljarafe
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
        <h2>Cristalería de confianza en Mairena del Aljarafe</h2>
        <p>
          Mairena del Aljarafe se ha convertido en una de las ciudades más importantes y pobladas del área metropolitana 
          de Sevilla. Cuenta con importantes desarrollos residenciales y comerciales estructurados en torno a zonas como 
          <strong>Ciudad Expo</strong>, <strong>Cavaleri</strong>, <strong>Lepanto</strong> y el dinámico 
          <strong>Nuevo Bulevar</strong>, con excelente conexión gracias al Metro de Sevilla y el centro comercial 
          <strong>Metromar</strong>.
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> damos respuesta a las demandas de los hogares y comercios de Mairena. 
          Instalamos cristales Climalit de alto aislamiento termoacústico para proteger tu vivienda de los ruidos urbanos y las 
          temperaturas extremas, diseñamos mamparas de ducha de vidrio templado a medida y colocamos lunas de gran formato 
          para comercios en Cavaleri o Ciudad Expo. Explora todos nuestros <Link to="/servicios">servicios de cristalería</Link> 
          y pídenos un presupuesto gratuito.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas reparar un cristal roto en Mairena?</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Si tienes una urgencia de cristalería en tu hogar o negocio en Mairena del Aljarafe, nuestro equipo acudirá en tu ayuda. 
                Llegamos de inmediato a cualquier punto del municipio para sustituir vidrios de ventanas, escaparates o mamparas 
                accidentadas, asegurando la zona.
              </p>
              <p>
                También fabricamos espejos decorativos para vestidores, repisas de cristal y todo tipo de cristales templados o laminados 
                a medida. Revisa nuestros <Link to="/servicios">servicios de instalación</Link> para más información.
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
                alt="Cristalería Zamorano en Mairena del Aljarafe"
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
                <li>Atención e instalación urgente en todo Mairena del Aljarafe</li>
                <li>Sustitución de lunas y cristales climalit en el mismo día</li>
                <li>Montaje de mamparas de baño y espejos a medida</li>
                <li>Especialistas en carpintería metálica y cerramientos de vidrio</li>
                <li>Materiales de alta durabilidad y marcas líderes</li>
                <li>Presupuestos claros y cerrados en menos de 24 horas</li>
              </ul>
            </div>
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>+100k Montajes</h3>
                  <p>Instalaciones realizadas en Sevilla y el Aljarafe</p>
                </div>
                <div className="metrica">
                  <h3>7 Premios</h3>
                  <p>Reconocimientos por calidad, cercanía y fiabilidad de servicio</p>
                </div>
              </div>
              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>+30 Años</h3>
                  <p>Garantía de profesionalidad al servicio de los sevillanos</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CIERRE */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Pide presupuesto sin compromiso en Mairena del Aljarafe.{" "}
            <Link to="/servicios" style={{ fontWeight: 700 }}>
              Consulta todos nuestros servicios
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
