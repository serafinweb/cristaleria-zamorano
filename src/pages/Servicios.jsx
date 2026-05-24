import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Servicios.css";

import heroServicios from "../assets/servicios/hero-servicios.png";
import imgCristales from "../assets/servicios/cristales-medida.png";
import imgMamparas from "../assets/servicios/mamparas-bano.png";
import imgEspejos from "../assets/servicios/espejos-personalizados.png";
import imgVentanas from "../assets/servicios/ventanas-aluminio-pvc.png";
import imgReparaciones from "../assets/servicios/reparaciones-urgentes.png";
import imgUrgente from "../assets/servicios/servicio-urgente.png";
import fotoServicios from "../assets/servicios/cristaleria-trabajo.png";

import Hero from "../components/Hero";
import CTA from "../components/CTA";

const SERVICIOS_DETALLADOS = [
  {
    title: "Cristales a Medida",
    description: "Corte e instalación de vidrios en cualquier espesor y formato. Vidrio templado para resistencia mecánica, laminado de seguridad anticaídas y doble acristalamiento Climalit. Ideal para mesas, repisas, escaparates o barandillas.",
    image: imgCristales,
    tag: "A medida"
  },
  {
    title: "Mamparas de Baño",
    description: "Mamparas de vidrio templado de seguridad (6 u 8 mm) con tratamientos antical de alta duración. Diseños minimalistas fijos, hojas abatibles, correderas o plegables con perfiles de aluminio anodizado o acero inoxidable.",
    image: imgMamparas,
    tag: "Diseño"
  },
  {
    title: "Espejos Personalizados",
    description: "Fabricación de espejos con cantos pulidos brillantes, biselados o con formas geométricas personalizadas. Diseñamos e instalamos espejos retroiluminados LED para baños y grandes superficies de espejo para gimnasios o vestidores.",
    image: imgEspejos,
    tag: "Decoración"
  },
  {
    title: "Ventanas de Aluminio y PVC",
    description: "Instalación de ventanas de alta gama con rotura de puente térmico (RPT) que aseguran un óptimo aislamiento térmico y acústico. Reduzca el consumo de calefacción y aire acondicionado instalando carpinterías eficientes.",
    image: imgVentanas,
    tag: "Aislamiento"
  },
  {
    title: "Reparación de Escaparates",
    description: "Sustitución inmediata de lunas y escaparates comerciales dañados por vandalismo, robos o accidentes. Instalamos vidrios antirrobo laminados homologados para garantizar la total seguridad de su negocio en el mismo día.",
    image: imgReparaciones,
    tag: "Comercio"
  },
  {
    title: "Cerramientos de Cristal",
    description: "Cortinas de cristal sin perfiles de aluminio verticales para terrazas, porches o balcones. Disfrute de vistas panorámicas ininterrumpidas y proteja su espacio de la lluvia y el viento sin alterar la fachada de su edificio.",
    image: imgUrgente,
    tag: "Cerramientos"
  }
];

const ZONAS_ATENCION = [
  { nombre: "Triana", path: "/triana" },
  { nombre: "Los Remedios", path: "/los-remedios" },
  { nombre: "Nervión", path: "/nervion" },
  { nombre: "La Macarena", path: "/la-macarena" },
  { nombre: "Sevilla Este", path: "/sevilla-este" },
  { nombre: "San Bernardo", path: "/san-bernardo" },
  { nombre: "Los Bermejales", path: "/los-bermejales" },
  { nombre: "Bellavista", path: "/bellavista" },
  { nombre: "Dos Hermanas", path: "/dos-hermanas" },
  { nombre: "Camas", path: "/camas" },
  { nombre: "Tomares", path: "/tomares" },
  { nombre: "Mairena del Aljarafe", path: "/mairena-del-aljarafe" },
  { nombre: "Bormujos", path: "/bormujos" },
  { nombre: "Alcalá de Guadaíra", path: "/alcala-de-guadaira" }
];

export default function Servicios() {
  return (
    <div className="page">
      <Helmet>
        <title>Servicios de Cristalería en Sevilla | Cristalería Zamorano</title>
        <meta
          name="description"
          content="Instalación de cristales a medida, mamparas de baño, espejos y ventanas en Sevilla. Especialistas en cerramientos de vidrio y urgencias 24h."
        />
        <link rel="canonical" href="https://cristaleriasevilla.com/servicios" />
      </Helmet>

      <div className="inicio-bloque">
        {/* HERO SECTION */}
        <Hero
          image={heroServicios}
          title="Nuestras Soluciones en Vidrio y Cristal"
          subtitle="Excelencia técnica, precisión artesanal y materiales certificados para proyectos residenciales y comerciales de alto nivel."
          urgentText="Instalaciones Profesionales Garantizadas en Sevilla"
        />

        {/* INTRODUCCIÓN */}
        <section className="intro-section page-content">
          <div className="section-header-center">
            <span className="chip">Catálogo de Servicios</span>
            <h2>Vidrio de Calidad para Cualquier Necesidad</h2>
            <div className="accent-line"></div>
          </div>
          <div className="intro-grid">
            <p>
              En <strong>Cristalería Zamorano</strong> desarrollamos soluciones acristaladas que combinan funcionalidad, seguridad y diseño. Fabricamos a medida desde nuestras instalaciones en Alcalá de Guadaíra, suministrando y montando todo tipo de elementos de vidrio en Sevilla capital y su área metropolitana.
            </p>
            <p>
              Si requiere un presupuesto personalizado o la visita de un técnico para la toma de medidas, no dude en <Link to="/contacto">solicitarlo online</Link> o contactarnos por teléfono. Respondemos a todas las consultas comerciales en menos de 24 horas laborables.
            </p>
          </div>
        </section>

        {/* GRID DETALLADO DE SERVICIOS */}
        <section className="services-grid-section">
          <div className="services-showcase-grid">
            {SERVICIOS_DETALLADOS.map((serv, i) => (
              <div className="service-card-premium glass-card" key={i}>
                <div className="card-image-wrapper">
                  <img src={serv.image} alt={serv.title} />
                  <span className="card-badge">{serv.tag}</span>
                </div>
                <div className="card-content-wrapper">
                  <h3>{serv.title}</h3>
                  <p>{serv.description}</p>
                  <Link to="/contacto" className="card-btn-link">
                    Solicitar Presupuesto
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="14" height="14">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN URGENTE 24 HORAS */}
        <section className="urgencies-services-section">
          <div className="urgency-services-card glass-panel">
            <div className="urgency-services-content">
              <span className="chip">Urgencia 24h</span>
              <h2>Atención Inmediata por Rotura de Cristales</h2>
              <p>
                Ofrecemos un servicio de sustitución de lunas y cristales las 24 horas del día, los 365 días del año. Si ha sufrido un robo o accidente en su local comercial, oficina o vivienda en Sevilla, nos desplazamos de inmediato para asegurar el perímetro e instalar un nuevo cristal de seguridad el mismo día.
              </p>
              <div className="urgency-ctas">
                <a href="tel:+34955631356" className="btn shimmer-effect">
                  955 631 356
                </a>
                <a href="https://wa.me/34659521144" target="_blank" rel="noopener noreferrer" className="btn whatsapp">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DETALLE Y BENEFICIOS ADICIONALES */}
        <section className="cta-imagen diagonal-section">
          <div className="cta-imagen-grid">
            <div className="cta-imagen-texto">
              <span className="chip">Garantía Zamorano</span>
              <h2 className="cta-titulo-left">Instalaciones Impecables Sin Obra</h2>
              <p>
                Nos especializamos en montajes secos y limpios. Nuestro equipo técnico cuenta con herramientas de ventosa de última generación y furgonetas equipadas para el ajuste y colocación de cristales de gran formato de forma rápida, reduciendo las molestias en su rutina diaria o comercial.
              </p>
              <p>
                Trabajamos de la mano con decoradores, arquitectos y clientes particulares en Sevilla, proporcionando un asesoramiento técnico riguroso sobre cargas de viento, aislamiento térmico acústico y requisitos de seguridad contra impactos en vidrios de paso.
              </p>
            </div>
            <div className="cta-imagen-foto">
              <img
                src={fotoServicios}
                alt="Instalación técnica de cristalera de seguridad en Sevilla"
              />
            </div>
          </div>
        </section>

        {/* CTA COMPROMISO */}
        <CTA
          title="¿Busca un acabado profesional y garantizado?"
          description="Consulte con nuestros cristaleros expertos. Desarrollamos cualquier estructura de cristal a medida con herrajes de acero y aluminio pulido."
          buttonText="Llamar al Servicio Técnico"
          whatsappText="Consultar Precios"
        />

        {/* ZONAS DE ACTUACIÓN */}
        <section className="zones-services-section page-content">
          <div className="section-header-center">
            <span className="chip">Área de Actuación</span>
            <h2>Ubicaciones de Servicio en Sevilla</h2>
            <div className="accent-line"></div>
          </div>
          <div className="zones-links-container">
            {ZONAS_ATENCION.map((zona) => (
              <Link to={zona.path} key={zona.path} className="zone-link-item">
                Cristalería en {zona.nombre}
              </Link>
            ))}
          </div>
        </section>

        {/* CIERRE CON EMAIL */}
        <section className="cierre-contacto glass-card">
          <p className="texto-desktop">
            ¿Tiene los detalles de su proyecto y desea adjuntarnos planos o bocetos? Escríbanos a&nbsp;
            <a href="mailto:cristaleria@cristaleriazamorano.com" className="correo-destacado">
              cristaleria@cristaleriazamorano.com
            </a>
            &nbsp;y le responderemos con un presupuesto personalizado. También puede rellenar nuestro&nbsp;
            <Link to="/contacto">formulario de contacto</Link>.
          </p>
          <p className="texto-mobile">
            Presupuestos gratis por email.
            <br />
            <a href="mailto:cristaleria@cristaleriazamorano.com" className="btn correo-mobile shimmer-effect">
              Escribir Correo
            </a>
            <br />
            <span className="correo-respuesta">Atención y respuesta en menos de 24 horas.</span>
          </p>
        </section>
      </div>
    </div>
  );
}