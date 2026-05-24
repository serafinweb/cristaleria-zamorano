import React from "react";
import { Link } from "react-router-dom";
import "./ZoneCard.css";

export default function ZoneCard({ name, path }) {
  return (
    <Link to={path} className="zone-card">
      <div className="zone-card-content">
        <span className="zone-card-icon">📍</span>
        <h4 className="zone-card-title">{name}</h4>
        <span className="zone-card-link">Ver cobertura &rarr;</span>
      </div>
    </Link>
  );
}
