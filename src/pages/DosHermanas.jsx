import React from "react";
import "./DosHermanas.css";
import heroDosHermanas from "../assets/DosHermanas/hero-doshermanas.png";
import trabajoCristal from "../assets/DosHermanas/cristaleria-trabajo.png";
import Services from "../components/Services";

export default function DosHermanas() {
  return (
    <div className="page">

      {/* HERO */}
      <div className="hero-doshermanas">
        <img src={heroDosHermanas} alt="Cristalería en Dos Hermanas" />
        <div className="hero-text">
          <h1 className="fade-in text-gradient">Cristalería en Dos Hermanas</h1>
          <p className="fade-in-sub">Instalación urgente · Presupuesto en 24h</p>

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

          <small className="hero-subtext">
            atención inmediata en todo Dos Hermanas
          </small>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <section className="page-content">
        <h2>Especialistas en cristalería en Dos Hermanas</h2>
        <p>
          Atendemos toda la zona de Dos Hermanas: Montequinto, Olivar de Quintos,
          La Motilla, El Arenal, Vistazul, Ibarburu, Las Portadas y barriadas cercanas.
          Instalamos cristales a medida, espejos, mamparas, ventanas de aluminio y
          realizamos reparaciones urgentes con desplazamiento rápido.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      {/* CTA + IMAGEN */}
      <section className="cta-imagen">
        <h3 className="cta-titulo">¿Necesitas un cristal urgente en Dos Hermanas?</h3>

        <div className="cta-imagen-grid">
          <div className="cta-imagen-texto">
            <p>Estamos disponibles para atenderte ahora mismo.</p>

            <p>
              Ofrecemos soluciones de cristalería con acabados impecables y materiales
              de alta calidad. Transformamos tu hogar o negocio con vidrio a medida,
              seguridad y diseño profesional.
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
            <img src={trabajoCristal} alt="Trabajo de cristalería en Dos Hermanas" />
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="beneficios">
        <ul>
          <li>Servicio urgente en Dos Hermanas y alrededores</li>
          <li>Instalación de cristales, espejos y mamparas</li>
          <li>Presupuesto rápido y atención personalizada</li>
          <li>Materiales de alta calidad y acabados premium</li>
          <li>Más de 30 años de experiencia en cristalería</li>
        </ul>
      </section>

      {/* MÉTRICAS FINALES */}
      <section className="metricas-finales">
        <div className="metricas-grid">
          <div className="metrica">
            <h3>+30 Años de Experiencia</h3>
            <p>Trayectoria consolidada en cristalería profesional</p>
          </div>
          <div className="metrica">
            <h3>+600k Montajes Completados</h3>
            <p>Instalaciones realizadas en hogares y negocios</p>
          </div>
          <div className="metrica">
            <h3>+20 Premios por Calidad</h3>
            <p>Reconocimientos por excelencia en producto y servicio</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL — CONTACTO */}
      <section className="cierre-contacto">
        <p>
          Pide tu presupuesto sin compromiso. Llámanos o, si lo prefieres, envía un correo a<br />
          <a href="mailto:cristaleria@cristaleriazamorano.com" className="correo-destacado">
            cristaleria@cristaleriazamorano.com
          </a>
          <br />
          y te responderemos a la mayor brevedad posible.
        </p>
      </section>

    </div>
  );
}