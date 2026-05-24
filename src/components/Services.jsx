import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const SERVICIOS_PREMIUM = [
  {
    title: "Cristalería del Hogar",
    tag: "Hogar",
    description: "Mamparas de baño a medida, barandillas de vidrio de seguridad, espejos biselados y soluciones personalizadas para el confort y la elegancia de su hogar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="32" height="32">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  {
    title: "Cerramientos y Ventanas",
    tag: "Aislamiento",
    description: "Ventanas de aluminio y PVC, instalación de doble acristalamiento Climalit para máxima eficiencia térmica y cortinas de cristal para balcones o terrazas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="32" height="32">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  },
  {
    title: "Locales y Oficinas",
    tag: "Comercial",
    description: "Escaparates de vidrio de seguridad laminado y templado para locales comerciales, mamparas divisorias acústicas y frentes acristalados para oficinas corporativas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="32" height="32">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.68 0-5.302.232-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section className="servicios-premium-section">
      <div className="servicios-grid-container">
        {SERVICIOS_PREMIUM.map((serv, index) => (
          <div className="servicio-premium-card glass-card" key={index}>
            <div className="card-top">
              <span className="chip">{serv.tag}</span>
              <div className="icon-wrapper">{serv.icon}</div>
            </div>
            <h3>{serv.title}</h3>
            <p>{serv.description}</p>
            <Link to="/servicios" className="card-link-btn">
              Saber más
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="14" height="14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}