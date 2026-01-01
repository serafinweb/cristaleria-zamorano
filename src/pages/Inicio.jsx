import React from "react";
import "./Inicio.css";
import heroSevilla from "../assets/sevilla/hero-sevilla.png";
import trabajoCristal from "../assets/sevilla/trabajo-cristal.png";
import Services from "../components/Services";

export default function Inicio() {
  return (
    <div className="page">

      {/* HERO */}
      <div className="hero-sevilla">
        <img src={heroSevilla} alt="Cristalería en Sevilla" />
        <div className="hero-text">
          <h1 className="fade-in text-gradient">Cristalería en Sevilla</h1>
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
        <h2>Expertos en cristalería en Sevilla</h2>
        <p>
          Ofrecemos servicio profesional de cristalería en toda Sevilla capital:
          Triana, Los Remedios, Nervión, Macarena, Sevilla Este, Bellavista,
          San Jerónimo, La Cartuja y todos los barrios cercanos. Instalamos
          cristales a medida, espejos, mamparas, ventanas de aluminio y
          realizamos reparaciones urgentes con atención rápida y personalizada.
        </p>
      </section>

      {/* SERVICIOS */}
      <Services />

      {/* CTA + IMAGEN */}
      <section className="cta-imagen">
        <h3 className="cta-titulo">¿Necesitas un cristal urgente en Sevilla?</h3>

        <div className="cta-imagen-grid">
          <div className="cta-imagen-texto">
            <p>Estamos disponibles para atenderte ahora mismo.</p>

            <p>
              Somos especialistas en cristales a medida, ofreciendo soluciones
              de vidrio que combinan diseño, seguridad y funcionalidad.
              Transformamos tu hogar o negocio con materiales de primera calidad
              y acabados impecables.
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
            <img src={trabajoCristal} alt="Trabajo de cristalería en Sevilla" />
          </div>
        </div>
      </section>

      {/* BLOQUE AZUL CLARO — MAPA + BENEFICIOS + MÉTRICAS */}
      <div className="seccion-azul">

        {/* MAPA + BENEFICIOS */}
        <section className="seccion-final">
          <div className="grid-final">

            {/* IZQUIERDA — MAPA */}
            <div className="mapa-cuadro">
              <h3>¿Dónde estamos?</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.833097932983!2d-5.987684523556016!3d37.37788527207871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126e9e6f4adc19%3A0x2a61b6a8ff90eb1a!2sCristaler%C3%ADa%20Zamorano!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* DERECHA — BENEFICIOS */}
            <div className="beneficios">
              <ul>
                <li>Atención inmediata en toda Sevilla capital</li>
                <li>Instalación profesional de cristales, espejos y mamparas</li>
                <li>Reparaciones urgentes con desplazamiento rápido</li>
                <li>Materiales de alta calidad y acabados impecables</li>
                <li>Presupuesto en menos de 24 horas</li>
              </ul>
            </div>

          </div>
        </section>

        {/* MÉTRICAS — OCUPAN TODO EL ANCHO */}
        <section className="metricas-full">
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

      </div>

      {/* CONTACTO FINAL */}
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

