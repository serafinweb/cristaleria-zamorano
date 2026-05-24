import React from "react";
import "./Gallery.css";
import imgCristales from "../assets/servicios/cristales-medida.png";
import imgMamparas from "../assets/servicios/mamparas-bano.png";
import imgEspejos from "../assets/servicios/espejos-personalizados.png";
import imgVentanas from "../assets/servicios/ventanas-aluminio-pvc.png";

export default function Gallery() {
  const images = [
    { src: imgCristales, title: "Cristales a Medida Templados", subtitle: "Acabados de alta precisión" },
    { src: imgMamparas, title: "Mamparas de Baño de Diseño", subtitle: "Máxima estanqueidad y seguridad" },
    { src: imgEspejos, title: "Espejos Decorativos Personalizados", subtitle: "Estilo a medida para tu hogar" },
    { src: imgVentanas, title: "Ventanas de Aluminio y PVC", subtitle: "Aislamiento térmico y acústico" },
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <h2>Nuestros Trabajos</h2>
        <p className="subtitle">Muestra real de instalaciones y montajes en Sevilla capital y provincia</p>
        
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img src={img.src} alt={img.title} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-title">{img.title}</span>
                <span className="gallery-subtitle">{img.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
