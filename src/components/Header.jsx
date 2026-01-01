<header className="header">

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