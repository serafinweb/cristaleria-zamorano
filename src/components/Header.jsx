import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-cz.png';
import logoTipografico from '../assets/logo-tipografico.PNG';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMouseEnter = () => setOpen(true);

  const handleMouseLeave = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <header className="header">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="header-container">

        {/* IZQUIERDA: logo + logotipo */}
        <div className="header-left">

          <div
            className="logo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setOpen(!open)}
          >
            <img src={logo} alt="Cristalería Zamorano" />
          </div>

          <div className="logo-text">
            <img src={logoTipografico} alt="Cristalería Zamorano" />
          </div>

        </div>

        {/* DERECHA: teléfono */}
        <div className="header-right">
          <a href="tel:+34955631356" className="phone-btn">
            955 631 356
          </a>
        </div>

      </div>

      {/* MENÚ FLOTANTE */}
      {open && (
        <div
          className="menu-flotante"
          ref={menuRef}
          onMouseLeave={() => setOpen(false)}
        >
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
        </div>
      )}

    </header>
  );
};

export default Header;