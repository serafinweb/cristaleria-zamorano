import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  const reviews = [
    {
      name: "Manuel Gómez",
      role: "Hogar en Triana",
      rating: 5,
      comment: "Se me rompió el cristal de la ventana un sábado por la tarde. Vinieron súper rápido, en menos de una hora ya estaba cambiado. Muy profesionales y limpios.",
    },
    {
      name: "Laura Martínez",
      role: "Negocio en Sevilla Centro",
      rating: 5,
      comment: "Instalaron la mampara de baño y un espejo a medida en mi piso nuevo. Quedó espectacular. Presupuesto sin sorpresas y muy puntual todo el equipo.",
    },
    {
      name: "Francisco Ortiz",
      role: "Comunidad de Vecinos en Nervión",
      rating: 5,
      comment: "Excelente servicio para la reposición del cristal de la puerta del portal. Respuesta inmediata y trato muy formal. Totalmente recomendables.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Opiniones de nuestros clientes</h2>
        <p className="subtitle">La confianza de más de 30 años de servicio en Sevilla</p>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars">
                {"★".repeat(rev.rating)}
              </div>
              <p className="comment">"{rev.comment}"</p>
              <div className="user-info">
                <strong>{rev.name}</strong>
                <span>{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
