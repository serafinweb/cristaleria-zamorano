import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <p>© 2026 Cristalería Zamorano · Todos los derechos reservados</p>
      </div>

      <div className="footer-center">
        <a href="/aviso-legal">Aviso Legal</a>
        <a href="/privacidad">Política de Privacidad</a>
      </div>

      <div className="footer-right">
        <p className="footer-horario">
          <strong>Horario:</strong> Lunes a Viernes · 9:30–14:00 y 17:30–20:00
        </p>
      </div>

    </footer>
  );
}