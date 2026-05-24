import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Inicio.css";
import Hero from "../components/Hero";

import heroAbout from "../assets/servicios/hero-servicios.png";
import trabajoNosotros from "../assets/servicios/cristaleria-trabajo.png";

const VALORES_EMPRESA = [
  {
    title: "Precisión Milimétrica",
    description: "Cada corte, pulido e instalación se ejecuta con riguroso control de calidad y herramientas de medición láser de última generación."
  },
  {
    title: "Rapidez y Compromiso",
    description: "Cumplimos con los plazos de entrega acordados y disponemos de furgonetas equipadas para atender emergencias en el mismo día."
  },
  {
    title: "Garantía Profesional",
    description: "Utilizamos exclusivamente vidrios certificados bajo normativa europea, ofreciendo soporte y garantía total en todos nuestros montajes."
  },
  {
    title: "Transparencia Absoluta",
    description: "Presupuestos cerrados y detallados, sin costes ocultos ni sorpresas finales. Asesoramos gratis buscando la opción más eficiente para usted."
  }
];

export default function SobreNosotros() {
  return (
    <div className="page">
      <Helmet>
        <title>Sobre Nosotros | Cristalería Zamorano Sevilla — +30 Años de Experiencia</title>
        <meta
          name="description"
          content="Conozca la trayectoria de Cristalería Zamorano. Cristaleros profesionales en Sevilla especializados en soluciones a medida para hogares y comercios."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/sobre-nosotros" />
      </Helmet>

      <div className="inicio-bloque">
        {/* HERO SECTION */}
        <Hero
          image={heroAbout}
          title="Tradición y Excelencia en Cristalería"
          subtitle="Una historia familiar de más de 30 años dedicada a dar luz y seguridad a los hogares y negocios de Sevilla."
          urgentText="Líderes en Vidrio a Medida e Instalaciones de Alta Gama"
        />

        {/* HISTORIA CORPORATIVA */}
        <section className="intro-section page-content">
          <div className="section-header-center">
            <span className="chip">Trayectoria</span>
            <h2>Nuestra Historia en Sevilla</h2>
            <div className="accent-line"></div>
          </div>
          <div className="intro-grid">
            <p>
              Fundada en la década de los 90, <strong>Cristalería Zamorano</strong> nació con la vocación de ofrecer un servicio de cristalería de la máxima calidad y honestidad en Sevilla. A lo largo de estas tres décadas, hemos evolucionado de ser un pequeño taller local a convertirnos en la cristalería de confianza elegida por particulares, arquitectos, hoteles y comercios de la provincia.
            </p>
            <p>
              A pesar de nuestro crecimiento, mantenemos intactos los valores de cercanía, dedicación y pasión por el trabajo bien hecho de nuestros fundadores. Nos esforzamos en que cada mampara, ventana o cristal a medida instalado en Sevilla capital y el Aljarafe supere las expectativas de resistencia estética y durabilidad de nuestros clientes.
            </p>
          </div>
        </section>

        {/* GRID DE VALORES */}
        <section className="values-section page-content">
          <div className="section-header-center">
            <span className="chip">Nuestra Filosofía</span>
            <h2>Valores que Guían Nuestro Trabajo</h2>
            <p className="section-description">Nos regimos por estándares profesionales rigurosos para ofrecer un servicio premium sin excepciones.</p>
            <div className="accent-line"></div>
          </div>
          
          <div className="values-grid">
            {VALORES_EMPRESA.map((val, index) => (
              <div className="value-card glass-card" key={index}>
                <span className="value-number">0{index + 1}</span>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPROMISO LOCAL */}
        <section className="cta-imagen diagonal-section">
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <span className="chip">Cercanía Local</span>
              <h2 className="cta-titulo-left">Compromiso con cada Barrio de Sevilla</h2>
              <p>
                Nuestra oficina y base logística se sitúan en Alcalá de Guadaíra, un enclave estratégico que nos permite conectar de forma directa con toda el área metropolitana de Sevilla en cuestión de minutos.
              </p>
              <p>
                Contamos con unidades móviles equipadas de forma permanente, listas para desplazarse a Triana, Los Remedios, Sevilla Este, Dos Hermanas o Tomares con las herramientas necesarias para tomar medidas con total fiabilidad y efectuar montajes impecables y sin obras molestas.
              </p>
              <div className="cta-botones">
                <Link to="/contacto" className="btn shimmer-effect">
                  Solicitar Asesoría
                </Link>
                <a
                  href="https://wa.me/34659521144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn whatsapp"
                >
                  Consultar vía WhatsApp
                </a>
              </div>
            </div>
            <div className="cta-imagen-foto">
              <img
                src={trabajoNosotros}
                alt="Técnicos instalando barandilla de cristal en Sevilla"
              />
            </div>
          </div>
        </section>

        {/* NAVEGACIÓN Y CONTACTO DE CIERRE */}
        <section className="cierre-contacto glass-card">
          <p className="texto-desktop">
            ¿Quiere conocer el coste aproximado de su proyecto? Póngase en contacto con nosotros hoy mismo escribiendo a&nbsp;
            <a href="mailto:cristaleria@cristaleriazamorano.com" className="correo-destacado">
              cristaleria@cristaleriazamorano.com
            </a>
            &nbsp;o examine todos nuestros&nbsp;
            <Link to="/servicios">servicios de cristalería</Link>.
          </p>
          <p className="texto-mobile">
            <Link to="/contacto">Solicitar Presupuesto</Link>
            &nbsp;·&nbsp;
            <Link to="/servicios">Ver Servicios</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
