import React from "react";
import "./Metrics.css";

const Metrics = () => {
  return (
    <section className="metrics-agency-section">
      <div className="metrics-agency-grid">
        <div className="metric-agency-card">
          <div className="metric-icon">⭐</div>
          <h3 className="metric-title">+30 Años de Experiencia</h3>
          <p className="metric-text">
            Trayectoria consolidada en cristalería profesional
          </p>
        </div>
        <div className="metric-agency-card">
          <div className="metric-icon">🏆</div>
          <h3 className="metric-title">+100k Montajes Completados</h3>
          <p className="metric-text">
            Instalaciones realizadas en hogares y negocios de Sevilla
          </p>
        </div>
        <div className="metric-agency-card">
          <div className="metric-icon">🥇</div>
          <h3 className="metric-title">7 Premios por Calidad</h3>
          <p className="metric-text">
            Reconocimientos por excelencia en producto y servicio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
