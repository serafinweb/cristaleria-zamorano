import React from "react";
import "./CTA.css";

export default function CTA({ title = "¿Necesitas un cristal urgente en Sevilla?", description = "Estamos disponibles para atenderte ahora mismo de forma rápida y profesional.", buttonText = "Llamar ahora", whatsappText = "WhatsApp" }) {
  return (
    <section className="cta-component">
      <div className="cta-container">
        <h3 className="cta-title">{title}</h3>
        <p className="cta-description">{description}</p>
        <div className="cta-buttons">
          <a href="tel:+34955631356" className="btn btn-primary">
            {buttonText}
          </a>
          <a
            href="https://wa.me/34659521144"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp"
          >
            {whatsappText}
          </a>
        </div>
      </div>
    </section>
  );
}
