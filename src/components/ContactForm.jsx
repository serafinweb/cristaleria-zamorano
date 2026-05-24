import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "Hogar",
    mensaje: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setStatus("Enviando...");
    setTimeout(() => {
      setStatus("¡Presupuesto solicitado con éxito! Nos pondremos en contacto con usted a la mayor brevedad posible para asesorarle.");
      setFormData({ nombre: "", telefono: "", email: "", servicio: "Hogar", mensaje: "" });
    }, 1000);
  };

  return (
    <div className="contact-form-container glass-card">
      <div className="contact-form-header">
        <span className="chip">Contacto Premium</span>
        <h3>Solicite Presupuesto Sin Compromiso</h3>
        <p>Estudiamos su proyecto a medida. Le responderemos en menos de 24 horas laborables.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Ej: Manuel Zamorano"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="telefono">Teléfono de Contacto</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="Ej: 600 000 000"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="correo@ejemplo.com"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="servicio">Tipo de Servicio Requerido</label>
          <div className="select-wrapper">
            <select
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
            >
              <option value="Hogar">Cristalería del Hogar (Mamparas, Espejos, Barandillas)</option>
              <option value="Cerramientos">Cerramientos de Cristal (Ventanas, Climalit, Terrazas)</option>
              <option value="Comercial">Locales Comerciales y Oficinas (Escaparates, Mamparas acústicas)</option>
              <option value="Urgencias">Servicio de Urgencias 24 Horas</option>
              <option value="Otros">Otros Trabajos a Medida</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Detalles del Proyecto (Medidas, tipo de cristal o requerimientos)</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            placeholder="Escriba aquí los detalles para ayudarnos a afinar el presupuesto..."
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary submit-btn shimmer-effect">
          Enviar Solicitud
        </button>

        {status && (
          <p className={`form-status ${status.startsWith("¡") ? "status-success" : "status-loading"}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
