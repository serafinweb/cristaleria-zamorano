import React from "react";
import "./Hero.css";

export default function Hero({ title, subtitle, image, urgentText = "te atendemos en menos de 5 minutos" }) {
  return (
    <div className="hero-component">
      {image && <img src={image} alt={title} className="hero-bg-img" />}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="fade-in text-gradient hero-title">
          {title}
        </h1>
        {subtitle && <p className="fade-in-sub hero-subtitle">{subtitle}</p>}
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
        {urgentText && <small className="hero-subtext">{urgentText}</small>}
      </div>
    </div>
  );
}