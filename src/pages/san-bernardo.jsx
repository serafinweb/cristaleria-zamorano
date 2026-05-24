import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import "./Triana.css";
import imgTrabajo from "../assets/servicios/servicio-urgente.png";

export default function SanBernardo() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería en San Bernardo Sevilla | Instalación y Reparación Urgente</title>
        <meta
          name="description"
          content="Cristalería en San Bernardo, Sevilla. Servicio rápido y profesional junto a la Estación de San Bernardo y Eduardo Dato. Cristales a medida, mamparas y lunas rotas."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/san-bernardo" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Bernardo, Sevilla",
              "addressRegion": "Andalucía",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/san-bernardo",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "description": "Cristalería en San Bernardo, Sevilla. Servicio urgente de cristales a medida, sustitución de lunas, mamparas de baño y carpintería de aluminio."
          }`}
        </script>
      </Helmet>

      {/* HERO */}
      <div
        className="hero-triana"
        style={{ background: "linear-gradient(135deg, #05335c 0%, #08518f 100%)" }}
      >
        <div className="hero-text">
          <h1 className="fade-in text-gradient titulo-tr">
            Cristalero en San Bernardo
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
        <h2>Servicios de cristalería en el barrio de San Bernardo</h2>
        <p>
          San Bernardo es un barrio emblemático e histórico de Sevilla, caracterizado por su
          proximidad al centro, la monumental <strong>Real Fábrica de Artillería</strong>, y su papel
          como uno de los mayores intercambiadores de transporte de la ciudad con la{" "}
          <strong>Estación de San Bernardo</strong> (metro, cercanías y tranvía). Un barrio dinámico
          que combina calles residenciales tranquilas con importantes avenidas de negocios como{" "}
          <strong>Enramadilla</strong> y <strong>Ramón y Cajal</strong>.
        </p>
        <p>
          En <strong>Cristalería Zamorano</strong> ofrecemos cobertura inmediata y experta a todos
          los vecinos, oficinas y locales comerciales del área de San Bernardo. Si se te ha roto
          un escaparate en la zona comercial o necesitas cambiar los acristalamientos de tus ventanas
          para aislar el ruido del tráfico y mejorar la eficiencia energética, somos tu solución de confianza.
          Explora toda nuestra gama de <Link to="/servicios">servicios de cristalería</Link> y pídenos
          un presupuesto totalmente personalizado.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      <div className="tr-bloque">
        {/* CTA */}
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas un cristalero urgente en San Bernardo?</h3>
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>
                Gracias a nuestra ubicación estratégica en Sevilla, nos desplazamos rápidamente a
                cualquier rincón de San Bernardo: Doctor Ordóñez de la Barrera, Eduardo Dato, Enramadilla
                y los aledaños del Campus de la Universidad de Sevilla. Reparamos cristales dañados
                con el máximo nivel de seguridad en el menor tiempo posible.
              </p>
              <p>
                Tanto si necesitas una sustitución de emergencia de una luna de vidrio por vandalismo, como
                si deseas instalar modernas mamparas de baño a medida o espejos decorativos, nuestros
                profesionales te garantizarán un acabado impecable. Consulta detalladamente todos nuestros{" "}
                <Link to="/servicios">servicios de instalación</Link>.
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
                alt="Cristalería Zamorano en San Bernardo"
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
                <li>Desplazamiento ultrarrápido a la zona de San Bernardo</li>
                <li>Sustitución inmediata de vidrios de seguridad y lunas comerciales</li>
                <li>Gran catálogo de mamparas de baño y espejos a medida</li>
                <li>Aislamiento acústico optimizado para viviendas cercanas a las avenidas principales</li>
                <li>Atención profesional a comunidades de propietarios y administradores</li>
                <li>Presupuestos sin compromiso elaborados en menos de 24 horas</li>
              </ul>
            </div>
            <div className="bloque-barrio">
              <div className="metricas-superior">
                <div className="metrica">
                  <h3>+100k Montajes</h3>
                  <p>Instalaciones realizadas en Sevilla y provincia</p>
                </div>
                <div className="metrica">
                  <h3>7 Premios</h3>
                  <p>Galardones a la calidad del servicio y fiabilidad</p>
                </div>
              </div>
              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>+30 Años</h3>
                  <p>Garantía de experiencia y tradición artesanal</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CIERRE */}
        <section className="cierre-contacto">
          <p className="texto-desktop">
            Solicita tu presupuesto gratuito para San Bernardo hoy mismo.{" "}
            <Link to="/servicios" style={{ fontWeight: 700 }}>
              Ver todos los servicios
            </Link>{" "}
            o escríbenos directamente a{" "}
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
