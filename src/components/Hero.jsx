import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Cristalería Zamorano</h1>
        <p>Expertos en vidrio a domicilio en toda Sevilla</p>
        <a href="tel:+34955631356" className="hero-button">Llamar ahora</a>
      </div>
    </section>
  );
};

export default Hero;