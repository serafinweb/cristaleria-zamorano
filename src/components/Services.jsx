import "./Services.css";
import { Link } from "react-router-dom";

const servicios = [
  { icon: "/assets/icons/icon-cristales.png", label: "Cristales a medida" },
  { icon: "/assets/icons/icon-mamparas.png", label: "Mamparas de baño" },
  { icon: "/assets/icons/icon-espejos.png", label: "Espejos personalizados" },
  { icon: "/assets/icons/icon-ventanas.png", label: "Ventanas de aluminio y PVC" },
  { icon: "/assets/icons/icon-reparaciones.png", label: "Reparaciones urgentes" },
  { icon: "/assets/icons/icon-instalacion.png", label: "Instalación en el mismo día" },
];

export default function Services() {
  return (
    <section className="servicios">

      <div className="grid-servicios">
        {servicios.map((s, i) => (
          <Link to="/servicios" className="item-servicio" key={i}>
            <img src={s.icon} alt={s.label} />
            <p>{s.label}</p>
          </Link>
        ))}
      </div>

    </section>
  );
}