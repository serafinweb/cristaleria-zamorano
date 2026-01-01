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
    // Evita que se cierre cuando el ratón pasa del logo al menú
    if (menuRef.current && !menuRef.current.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Grupo izquierdo: Logo cuadrado + Logo tipográfico */}
        <div className="left-group">

          {/* Logo cuadrado con menú flotante */}
          <div
            className="logo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setOpen(!open)} // móvil
          >
            <img src={logo} alt="Cristalería Zamorano" />
          </div>

          {/* Logo tipográfico (CRISTALERÍA / ZAMORANO) */}
          <div className="logo-text">
            <img src={logoTipografico} alt="Cristalería Zamorano" />
          </div>

        </div>

        {/* Teléfono a la derecha */}
        <div className="phone">
          <a href="tel:+34955631356">955 631 356</a>
        </div>

        {/* Menú flotante */}
        {open && (
          <div
            className="menu-flotante"
            ref={menuRef}
            onMouseLeave={() => setOpen(false)}
          >
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>

            {/* Barrios ocultos (solo para Google) */}
            {/* <Link to="/triana">Triana</Link> */}
            {/* <Link to="/los-remedios">Los Remedios</Link> */}
            {/* <Link to="/sevilla-este">Sevilla Este</Link> */}
            {/* <Link to="/dos-hermanas">Dos Hermanas</Link> */}
            {/* <Link to="/camas">Camas</Link> */}
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;