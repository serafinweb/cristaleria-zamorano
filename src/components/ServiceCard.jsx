import React from "react";
import "./ServiceCard.css";

export default function ServiceCard({ title, description, image, link = "/servicios" }) {
  return (
    <div className="service-card">
      {image && <img src={image} alt={title} className="service-card-img" />}
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-desc">{description}</p>
        {link && (
          <a href={link} className="service-card-link">
            Saber más &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
