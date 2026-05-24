import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Inicio.css";

import heroSevilla from "../assets/Sevilla/hero-sevilla.png";
import trabajoCristal from "../assets/Sevilla/trabajo-cristal.png";

import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import ZoneCard from "../components/ZoneCard";

/* ─── Zonas de actuación agrupadas ────────────────────────────────────────── */
const BARRIOS_SEVILLA = [
  { name: "Triana", path: "/triana" },
  { name: "Los Remedios", path: "/los-remedios" },
  { name: "Nervión", path: "/nervion" },
  { name: "La Macarena", path: "/la-macarena" },
  { name: "Sevilla Este", path: "/sevilla-este" },
  { name: "San Bernardo", path: "/san-bernardo" },
  { name: "Los Bermejales", path: "/los-bermejales" },
  { name: "Bellavista", path: "/bellavista" },
];

const MUNICIPIOS_ALJARAFE = [
  { name: "Dos Hermanas", path: "/dos-hermanas" },
  { name: "Alcalá de Guadaíra", path: "/alcala-de-guadaira" },
  { name: "Camas", path: "/camas" },
  { name: "Tomares", path: "/tomares" },
  { name: "Mairena del Aljarafe", path: "/mairena-del-aljarafe" },
  { name: "Bormujos", path: "/bormujos" },
  { name: "San Juan de Aznalfarache", path: "/san-juan" },
];

export default function Inicio() {
  return (
    <div className="page">
      <Helmet>
        <title>Cristalería Zamorano | Cristaleros a Medida en Sevilla</title>
        <meta
          name="description"
          content="Cristalería profesional en Sevilla con más de 30 años de experiencia. Cristales a medida, mamparas, escaparates y urgencias 24h. Presupuestos gratis en 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cristalería Zamorano",
            "image": "https://cristaleriasevilla.com/favicon.ico",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Polígono la red, calle 6, parcela 54, nave 8",
              "addressLocality": "Alcalá de Guadaíra",
              "addressRegion": "Sevilla",
              "addressCountry": "ES"
            },
            "url": "https://cristaleriasevilla.com/",
            "telephone": "+34955631356",
            "priceRange": "€€",
            "openingHours": "Mo-Fr 09:30-14:00, Mo-Fr 17:30-20:00",
            "description": "Cristaleros profesionales en Sevilla. Especialistas en cristales a medida, mamparas de baño, ventanas y servicio urgente 24h."
          }
          `}
        </script>
      </Helmet>

      <div className="inicio-bloque">
        {/* 1. HERO SECTION */}
        <Hero
          image={heroSevilla}
          title="Cristaleria Zamorano en Sevilla"
          subtitle="Tradición, precisión y excelencia en vidrio a medida. Más de 30 años vistiendo hogares y comercios sevillanos."
          urgentText="Servicio de Urgencias 24 Horas · Atención Inmediata"
        />

        {/* 2. TRUST BAR / MÉTRICAS (Ubicada arriba para generar confianza inmediata) */}
        <section className="trust-bar-section">
          <div className="trust-bar-grid">
            <div className="trust-item">
              <span className="trust-number">+30 Años</span>
              <p>Líderes en el sector de la cristalería en Sevilla</p>
            </div>
            <div className="trust-item">
              <span className="trust-number">+10.000</span>
              <p>Clientes satisfechos avalan nuestra precisión técnica</p>
            </div>
            <div className="trust-item">
              <span className="trust-number">24 Horas</span>
              <p>Servicio urgente para roturas y seguridad</p>
            </div>
          </div>
        </section>

        {/* 3. INTRO / PRESENTACIÓN */}
        <section className="intro-section page-content">
          <div className="section-header-center">
            <span className="chip">Experiencia y Confianza</span>
            <h2>Su Cristalería de Referencia en Sevilla</h2>
            <div className="accent-line"></div>
          </div>
          
          <div className="intro-grid">
            <p>
              En <strong>Cristalería Zamorano</strong> nos dedicamos al diseño, corte e instalación de <strong>cristales a medida en Sevilla</strong> y toda su área metropolitana. Como empresa familiar con más de tres décadas de experiencia, nos enorgullece ofrecer acabados limpios y de alta gama en cada proyecto. Atendemos de forma personalizada en Triana, Los Remedios, Nervión, Sevilla Este y múltiples localidades del Aljarafe.
            </p>
            <p>
              Ya sea para la instalación de una elegante mampara de ducha de diseño, cerramientos eficientes con doble acristalamiento para un mayor aislamiento acústico, o la sustitución urgente de lunas rotas en su negocio, nuestro equipo le garantiza la máxima rapidez y profesionalidad. Pida su presupuesto sin compromiso y le responderemos en menos de 24 horas.
            </p>
          </div>
        </section>

        {/* 4. SERVICIOS DESTACADOS (Tarjetas Glassmorphic de Stitch) */}
        <section className="services-home-wrapper">
          <div className="section-header-center">
            <span className="chip">Nuestras Soluciones</span>
            <h2>Soluciones de Cristal a Medida</h2>
            <p className="section-description">Aportamos amplitud, luz y elegancia a sus espacios con vidrio de calidad excepcional.</p>
            <div className="accent-line"></div>
          </div>
          <Services />
        </section>

        {/* 5. CTA DESTACADO (Urgencias / Presupuesto) */}
        <CTA
          title="¿Sufrió una rotura o necesita asesoramiento?"
          description="Atendemos urgencias por cristales rotos y robos las 24 horas. También elaboramos presupuestos detallados sin ningún compromiso para sus reformas."
          buttonText="Llamar al 955 631 356"
          whatsappText="Consultar por WhatsApp"
        />

        {/* 6. DOBLE COLUMNA: IMAGEN Y DETALLE CORPORATIVO */}
        <section className="cta-imagen diagonal-section">
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <span className="chip">¿Por qué elegirnos?</span>
              <h2 className="cta-titulo-left">Precisión Milimétrica y Compromiso Local</h2>
              <p>
                Cada instalación es un reflejo de nuestra profesionalidad. Nos desplazamos a su domicilio o local comercial en Sevilla con vehículos adaptados y equipados para el corte y ajuste de cristal sobre la marcha, asegurando un trabajo limpio y sin demoras.
              </p>
              <p>
                Trabajamos solo con vidrios certificados de la más alta seguridad (laminados, templados y de control solar) para garantizar que su inversión perdure en el tiempo y aporte valor estético a su propiedad.
              </p>
              
              <div className="cta-botones">
                <a href="tel:+34955631356" className="btn shimmer-effect">
                  Llamar ahora
                </a>
                <a
                  href="https://wa.me/34659521144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn whatsapp"
                >
                  Contactar vía WhatsApp
                </a>
              </div>
            </div>
            <div className="cta-imagen-foto">
              <img
                src={trabajoCristal}
                alt="Cristalero profesional instalando panel de vidrio en Sevilla"
              />
            </div>
          </div>
        </section>

        {/* 7. COBERTURA Y BARRIOS */}
        <section className="cobertura-section page-content">
          <div className="section-header-center">
            <span className="chip">Presencia Local</span>
            <h2>Área de Cobertura y Unidades Móviles</h2>
            <p className="section-description">Llegamos a cualquier punto de Sevilla y su provincia de forma rápida para instalaciones o urgencias.</p>
            <div className="accent-line"></div>
          </div>
          
          <div className="cobertura-secciones">
            <details className="cobertura-bloque" open>
              <summary><h3>Barrios en Sevilla Capital</h3></summary>
              <div className="zones-grid">
                {BARRIOS_SEVILLA.map((zona) => (
                  <ZoneCard key={zona.path} name={zona.name} path={zona.path} />
                ))}
              </div>
            </details>

            <details className="cobertura-bloque" style={{ marginTop: "24px" }}>
              <summary><h3>Municipios y Área Metropolitana</h3></summary>
              <div className="zones-grid">
                {MUNICIPIOS_ALJARAFE.map((zona) => (
                  <ZoneCard key={zona.path} name={zona.name} path={zona.path} />
                ))}
              </div>
            </details>
          </div>
        </section>

        {/* 8. MAPA Y LOCALIZACIÓN */}
        <section className="map-and-office-section">
          <div className="map-office-grid">
            <div className="office-info-card glass-card">
              <span className="chip">Nuestra Oficina</span>
              <h3>Oficina Central en Sevilla</h3>
              <p>Visite nuestras instalaciones o solicite que un técnico se desplace a su domicilio para tomar medidas.</p>
              
              <ul className="office-details-list">
                <li>
                  <strong>Dirección:</strong> Polígono la Red, calle 6, parcela 54, nave 8, 41500, Alcalá de Guadaíra, Sevilla
                </li>
                <li>
                  <strong>Teléfono Oficial:</strong> <a href="tel:+34955631356">955 631 356</a>
                </li>
                <li>
                  <strong>Teléfono Urgencias:</strong> <a href="https://wa.me/34659521144">659 521 144</a>
                </li>
                <li>
                  <strong>Horario Comercial:</strong> Lunes a Viernes: 09:30–14:00 · 17:30–20:00
                </li>
              </ul>
            </div>
            
            <div className="mapa-cuadro">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.833097932983!2d-5.987684523556016!3d37.37788527207871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126e9e6f4adc19%3A0x2a61b6a8ff90eb1a!2sCristaler%C3%ADa%20Zamorano!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Cristalería Zamorano en Google Maps"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 9. CONTACTO DE CIERRE RÁPIDO */}
        <section className="cierre-contacto glass-card">
          <p className="texto-desktop">
            ¿Tiene alguna duda o prefiere enviarnos fotos de lo que necesita? Escríbanos a&nbsp;
            <a href="mailto:cristaleria@cristaleriazamorano.com" className="correo-destacado">
              cristaleria@cristaleriazamorano.com
            </a>
            &nbsp;y un cristalero le responderá hoy mismo. También puede usar el&nbsp;
            <Link to="/contacto">formulario de contacto premium</Link>.
          </p>
          <p className="texto-mobile">
            Solicite presupuesto gratuito por correo electrónico.
            <br />
            <a href="mailto:cristaleria@cristaleriazamorano.com" className="btn correo-mobile shimmer-effect">
              Enviar correo electrónico
            </a>
            <br />
            <span className="correo-respuesta">Le responderemos en menos de 24 horas.</span>
          </p>
        </section>
      </div>
    </div>
  );
}
