import { Link } from "react-router-dom";
import "./Error404.css";
import heroError from "../assets/Error404/hero-error-404.png";

export default function Error404() {
  return (
    <div className="page error404-page">

      {/* Imagen con el 404 integrado */}
      <div className="error-img-wrapper">
        <img
          src={heroError}
          alt="Error 404 - Página no encontrada - Cristal roto"
        />
      </div>

      {/* Subtítulo debajo de la imagen */}
      <p className="error-subtitulo">
        Upss, parece que esta página no lleva a ningún sitio..
      </p>

      {/* Botones */}
      <div className="error-botones">
        <Link to="/" className="btn-inicio">Volver al inicio</Link>
        <Link to="/servicios" className="btn-servicios">Nuestros servicios</Link>
        <a href="tel:+34955631356" className="btn-llamar">Llamar ahora</a>
        <a
          href="https://wa.me/34659521144"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          WhatsApp
        </a>
      </div>

    </div>
  );
}