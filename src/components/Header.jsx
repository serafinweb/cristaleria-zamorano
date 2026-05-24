import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-cz.png';
import logoTipografico from '../assets/logo-tipografico.PNG';
import './Header.css';

const NAV_LINKS = [
  { label: 'Inicio',         path: '/'             },
  { label: 'Servicios',      path: '/servicios'    },
  { label: 'Sobre Nosotros', path: '/sobre-nosotros' },
  { label: 'Contacto',       path: '/contacto'     },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Bloquear scroll cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header" role="banner">
      <div className="header-container" ref={menuRef}>

        {/* ── IZQUIERDA: hamburguesa + logos ── */}
        <div className="header-left">

          {/* Botón hamburguesa (visible siempre, en escritorio actúa igual) */}
          <button
            className={`hamburger${open ? ' is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="nav-menu"
          >
            <span /><span /><span />
          </button>

          {/* Logo icono — siempre visible */}
          <NavLink to="/" onClick={close} className="logo" aria-label="Ir al inicio">
            <img src={logo} alt="Cristalería Zamorano" />
          </NavLink>

          {/* Logo tipográfico — oculto en < 480px */}
          <NavLink to="/" onClick={close} className="logo-text" aria-hidden="true" tabIndex={-1}>
            <img src={logoTipografico} alt="" />
          </NavLink>
        </div>

        {/* ── CENTRO: nav links inline (solo escritorio) ── */}
        <nav
          id="nav-menu"
          className={`nav-links${open ? ' nav-open' : ''}`}
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link--active' : '')
              }
              onClick={close}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ── DERECHA: teléfono ── */}
        <div className="header-right">
          <a href="tel:+34955631356" className="phone-btn" aria-label="Llamar al 955 631 356">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            <span className="phone-text">955 631 356</span>
          </a>
        </div>

      </div>

      {/* ── Overlay oscuro en mobile cuando menú abierto ── */}
      {open && <div className="nav-overlay" onClick={close} aria-hidden="true" />}
    </header>
  );
};

export default Header;