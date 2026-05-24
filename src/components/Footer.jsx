import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo-cz.png";
import logoTipografico from "../assets/logo-tipografico.PNG";

const NAV_LINKS = [
  { label: "Inicio",         path: "/"              },
  { label: "Servicios",      path: "/servicios"     },
  { label: "Sobre Nosotros", path: "/sobre-nosotros"},
  { label: "Contacto",       path: "/contacto"      },
];

const LEGAL_LINKS = [
  { label: "Aviso Legal",           path: "/aviso-legal"           },
  { label: "Política de Privacidad",path: "/politica-de-privacidad"},
  { label: "Política de Cookies",   path: "/politica-de-cookies"   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">

      {/* ── CUERPO: 3 columnas ── */}
      <div className="footer-body">

        {/* COL 1: Marca */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo-link" aria-label="Ir al inicio">
            <img src={logo} alt="Cristalería Zamorano" className="footer-logo" />
            <img src={logoTipografico} alt="" className="footer-logo-text" />
          </Link>
          <p className="footer-tagline">
            Cristaleros profesionales en Sevilla con más de 30 años de experiencia.
            Urgencias, instalaciones y presupuestos sin compromiso.
          </p>
          <div className="footer-contact-ctas">
            <a href="tel:+34955631356" className="footer-cta footer-cta--phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              955 631 356
            </a>
            <a
              href="https://wa.me/34659521144"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta footer-cta--whatsapp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/>
              </svg>
              WhatsApp 24h
            </a>
          </div>
        </div>

        {/* COL 2: Navegación */}
        <div className="footer-col footer-nav-col">
          <h3 className="footer-col-title">Navegación</h3>
          <nav aria-label="Footer navegación">
            {NAV_LINKS.map(({ label, path }) => (
              <Link key={path} to={path} className="footer-nav-link">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* COL 3: Contacto / Horario */}
        <div className="footer-col footer-info-col">
          <h3 className="footer-col-title">Contacto</h3>
          <ul className="footer-info-list">
            <li>
              <span className="footer-info-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span>
              Polígono la red, calle 6, parcela 54, nave 8, 41500, Alcalá de Guadaíra, Sevilla
            </li>
            <li>
              <span className="footer-info-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
              <a href="tel:+34955631356">955 631 356</a>
            </li>
            <li>
              <span className="footer-info-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></span>
              <a href="https://wa.me/34659521144" target="_blank" rel="noopener noreferrer">659 521 144</a>
            </li>
            <li>
              <span className="footer-info-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
              <a href="mailto:cristaleria@cristaleriazamorano.com">
                cristaleria@cristaleriazamorano.com
              </a>
            </li>
            <li>
              <span className="footer-info-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
              L–V: 9:30–14:00 · 17:30–20:00
            </li>
            <li>
              <span className="footer-info-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></span>
              Urgencias: atención inmediata
            </li>
          </ul>
        </div>

      </div>

      {/* ── BANDA INFERIOR ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Cristalería Zamorano · Todos los derechos reservados
        </p>
        <div className="footer-legal">
          {LEGAL_LINKS.map(({ label, path }) => (
            <Link key={path} to={path} className="footer-legal-link">
              {label}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  );
}