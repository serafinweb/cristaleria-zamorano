import React, { useEffect } from "react";
import "./Servicios.css";

// HERO
import heroServicios from "../assets/servicios/hero-servicios.png";

// IMÁGENES DE LOS SERVICIOS
import imgCristales from "../assets/servicios/cristales-medida.png";
import imgMamparas from "../assets/servicios/mamparas-bano.png";
import imgEspejos from "../assets/servicios/espejos-personalizados.png";
import imgVentanas from "../assets/servicios/ventanas-aluminio-pvc.png";
import imgReparaciones from "../assets/servicios/reparaciones-urgentes.png";
import imgUrgente from "../assets/servicios/servicio-urgente.png";

// IMAGEN SECCIÓN DOS COLUMNAS
import fotoServicios from "../assets/servicios/cristaleria-trabajo.png";

export default function Servicios() {

  // ============================
  // SEO DINÁMICO (React 19)
  // ============================
  useEffect(() => {
    // TITLE
    document.title =
      "Servicios de Cristalería en Sevilla | Cristales a Medida, Mamparas y Reparaciones Urgentes";

    // META DESCRIPTION
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Servicios de cristalería en Sevilla: instalación de cristales a medida, mamparas de baño, espejos personalizados, ventanas de aluminio y PVC, y reparaciones urgentes en el mismo día.";

    // CANONICAL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://cristaleriasevilla.com/servicios";

    // JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = `
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Servicios de Cristalería en Sevilla",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Cristalería Sevilla",
        "image": "https://cristaleriasevilla.com/favicon.ico",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sevilla",
          "addressRegion": "Andalucía",
          "addressCountry": "ES"
        },
        "telephone": "+34955631356",
        "url": "https://cristaleriasevilla.com/servicios"
      },
      "serviceType": [
        "Cristales a medida",
        "Mamparas de baño",
        "Espejos personalizados",
        "Ventanas de aluminio y PVC",
        "Reparaciones urgentes"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Sevilla"
      },
      "description": "Instalación profesional de cristales, mamparas, espejos, ventanas y reparaciones urgentes en Sevilla."
    }
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // ============================
  // JSX
  // ============================
  return (
    <div className="page">
      <div className="servicios-bloque">

        {/* HERO */}
        <div className="hero-servicios">
          <img src={heroServicios} alt="Servicios de cristalería" />
          <div className="hero-servicios-overlay"></div>
          <div className="hero-servicios-text">
            <h1 className="fade-in text-gradient-servicios">
              Servicios de Cristalería en Sevilla
            </h1>
            <p className="fade-in-sub">
              Instalación profesional · Materiales premium · Atención urgente
            </p>

            <div className="hero-servicios-botones">
              <a href="tel:+34955631356" className="btn hero-btn-servicios fade-in-btn">
                Llamar ahora
              </a>
              <a
                href="https://wa.me/34659521144"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp hero-whatsapp-servicios fade-in-btn"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* INTRO */}
        <section className="page-content-servicios">
          <h2>Expertos en cristales a medida</h2>
          <p>
            Ofrecemos instalación profesional de cristales, espejos, mamparas, ventanas
            de aluminio y PVC, además de reparaciones urgentes en toda Sevilla capital.
            Trabajamos con materiales de alta calidad y acabados impecables.
          </p>
        </section>

        {/* GRID DE SERVICIOS */}
        <section className="servicios-grid">
          {[
            { 
              title: "Cristales a medida", 
              desc: "Corte profesional, instalación precisa y sustitución de cristales en cualquier formato. Trabajamos con vidrio templado, laminado y doble acristalamiento para mejorar aislamiento térmico y acústico en hogares y negocios.",
              img: imgCristales 
            },
            { 
              title: "Mamparas de baño", 
              desc: "Mamparas de vidrio templado con herrajes de alta calidad. Diseños modernos, instalación limpia y sistemas que garantizan estanqueidad, durabilidad y un acabado elegante en cualquier baño.",
              img: imgMamparas 
            },
            { 
              title: "Espejos personalizados", 
              desc: "Fabricamos espejos a medida con cantos pulidos, biselados o con formas especiales. Ideales para baños, vestidores, gimnasios, comercios y proyectos decorativos de alto nivel.",
              img: imgEspejos 
            },
            { 
              title: "Ventanas aluminio y PVC", 
              desc: "Instalamos ventanas de aluminio y PVC con doble acristalamiento para maximizar el aislamiento térmico y acústico. Sistemas de alta eficiencia energética y herrajes premium.",
              img: imgVentanas 
            },
            { 
              title: "Reparaciones urgentes", 
              desc: "Sustituimos cristales rotos en el mismo día. Servicio rápido, seguro y profesional para escaparates, ventanas, puertas de vidrio y cerramientos dañados.",
              img: imgReparaciones 
            },
            { 
              title: "Servicio urgente", 
              desc: "Disponibilidad inmediata en Sevilla para cualquier emergencia con cristales. Furgoneta equipada, materiales listos y respuesta rápida para resolver incidencias sin esperas.",
              img: imgUrgente 
            },
          ].map((item, i) => (
            <div key={i} className="servicio-card-servicios fade-in">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </section>

        {/* SECCIÓN DOS COLUMNAS */}
        <section className="servicios-dos-columnas">
          <div className="servicios-textos">
            <div className="servicio-bloque fade-in">
              <h2>Instalación profesional</h2>
              <p>
                Realizamos montajes limpios, rápidos y con precisión. Más de 30 años de experiencia en cristalería profesional.
              </p>
            </div>

            <div className="servicio-bloque fade-in">
              <h2>Materiales de alta calidad</h2>
              <p>
                Vidrio templado, laminado y sistemas de aluminio/PVC de primera categoría para máxima durabilidad.
              </p>
            </div>

            <div className="servicio-bloque fade-in">
              <h2>Atención inmediata</h2>
              <p>
                Si necesitas un cristal urgente, estamos disponibles para atenderte en el mismo día en Sevilla.
              </p>
            </div>
          </div>

          <div className="servicios-imagen">
            <img src={fotoServicios} alt="Cristalería Zamorano en acción" />
          </div>
        </section>

        {/* BOTONES REUBICADOS */}
        <div className="cta-servicios-botones">
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

        {/* CONTACTO FINAL */}
        <section className="cierre-contacto">

          {/* ESCRITORIO */}
          <p className="texto-desktop">
            Pide tu presupuesto sin compromiso. Llámanos o, si lo prefieres, envía un correo a<br />
            <a
              href="mailto:cristaleria@cristaleriazamorano.com"
              className="correo-destacado"
            >
              cristaleria@cristaleriazamorano.com
            </a>
            <br />
            y te responderemos a la mayor brevedad posible.
          </p>

          {/* MÓVIL */}
          <p className="texto-mobile">
            Pide tu presupuesto sin compromiso. Llámanos o, si lo prefieres, contáctanos.<br />
            <a
              href="mailto:cristaleria@cristaleriazamorano.com"
              className="btn correo-mobile"
            >
              Enviar correo
            </a>
            <br />
            <span className="correo-respuesta">
              Te responderemos a la mayor brevedad posible.
            </span>
          </p>

        </section>

      </div>
    </div>
  );
}