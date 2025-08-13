import { Link } from "react-router-dom";
import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-right">
        <h3>CONTÁCTANOS</h3>
        <div className="contact-form">
          <div className="contact-left">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Teléfono" />
          </div>
          <textarea placeholder="Mensaje"></textarea>
        </div>
        <div className="send-button">
          <button>Enviar</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Todos los derechos reservados por REWIND CLUB 2025</p>
      </div>
    </footer>
  );
}
