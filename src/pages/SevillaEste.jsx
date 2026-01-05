import React from "react";
import "./SevillaEste.css";
import heroSevillaEste from "../assets/Sevilla-Este/hero-sevilla-este.png";
import trabajoCristal from "../assets/Sevilla-Este/cristaleria-trabajo.png";
import Services from "../components/Services";

export default function SevillaEste() {
  return (
    <div className="page">

      {/* HERO */}
      <div className="hero-sevillaeste">
        <img src={heroSevillaEste} alt="Cristalería en Sevilla Este" />
        <div className="hero-text">
          <h1 className="fade-in text-gradient">Cristalería en Sevilla Este</h1>
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

          <small className="hero-subtext">
            te atendemos en menos de 5 minutos
          </small>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <section className="page-content">
        <h2>Expertos en cristalería en Sevilla Este</h2>
        <p>
          Ofrecemos servicio profesional de cristalería en toda la zona de Sevilla Este:
          Avenida de las Ciencias, Emilio Lemos, Parque Alcosa, Palacio de Congresos y
          zonas cercanas. Instalamos cristales a medida, espejos, mamparas, ventanas de
          aluminio y realizamos reparaciones urgentes con atención rápida y personalizada.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      {/* CTA + IMAGEN — ENCAPSULADO */}
      <div className="se-bloque">
        <section className="cta-imagen">
          <h3 className="cta-titulo">¿Necesitas un cristal urgente en Sevilla Este?</h3>

          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <p>Estamos disponibles para atenderte ahora mismo.</p>

              <p>
                Somos especialistas en cristales a medida, ofreciendo soluciones de vidrio
                que combinan diseño, seguridad y funcionalidad. Transformamos tu hogar o
                negocio con materiales de primera calidad y acabados impecables.
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
              <img src={trabajoCristal} alt="Trabajo de cristalería en Sevilla Este" />
            </div>
          </div>
        </section>
      </div>

      {/* BLOQUE AZUL — BENEFICIOS + MÉTRICAS */}
      <div className="se-bloque">
        <div className="seccion-azul">
          <section className="grid-final">

            {/* BENEFICIOS */}
            <div className="bloque-barrio">
              <ul className="beneficios">
                <li>Atención inmediata en Sevilla Este y zonas cercanas</li>
                <li>Instalación profesional de cristales, espejos y mamparas</li>
                <li>Reparaciones urgentes con desplazamiento rápido</li>
                <li>Materiales de alta calidad y acabados impecables</li>
                <li>Presupuesto en menos de 24 horas</li>
              </ul>
            </div>

            {/* MÉTRICAS — 2 ARRIBA + 1 ABAJO */}
            <div className="bloque-barrio">

              <div className="metricas-superior">
                <div className="metrica">
                  <h3>100k Montajes Completados</h3>
                  <p>Instalaciones realizadas en hogares y negocios</p>
                </div>

                <div className="metrica">
                  <h3>7 Premios por Calidad</h3>
                  <p>Reconocimientos por excelencia en producto y servicio</p>
                </div>
              </div>

              <div className="metrica-inferior">
                <div className="metrica">
                  <h3>30 Años de Experiencia</h3>
                  <p>Trayectoria consolidada en cristalería profesional</p>
                </div>
              </div>

            </div>

          </section>
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