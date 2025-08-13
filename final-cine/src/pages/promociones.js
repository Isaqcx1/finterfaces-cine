import "../styles/Promociones.css";
import entel from "../img/entel.png";
import ticketp from "../img/ticketp.png";

export function Promociones() {
  return (
    <div className="promociones-container">
      <div className="promo-item">
        <div className="promo-text">
          <h2>Promo 2x1 con entel</h2>
          <p>Eres cine, eres Entel</p>
          <button className="btn-termycond">Términos y Condiciones</button>
        </div>
        <img
          src={entel}
          alt="Promo Entel"
          className="promo-img"
        />
      </div>

      <div className="promo-item">
        <img
          src={ticketp}
          alt="Ticket Holográfico"
          className="promo-img"
        />
        <div className="promo-text">
          <h2>Consigue tu ticket de Los 4 Fantásticos</h2>
          <p>
            Compra tus entradas para la primera función de pre estreno y obtén un ticket.
          </p>
          <button className="btn-termycond">Términos y Condiciones</button>
        </div>
      </div>
    </div>
  );
}
