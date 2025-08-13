import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AlimentosB.css";

export function AlimentosB() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    documento: "",
    nombre: "",
    apellido: "",
    correo: "",
    tarjeta: "",
    vencimiento: "",
    cvv: "",
    nombreTarjeta: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePagar = () => {
    const datosParaGuardar = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      correo: formData.correo
    };
    localStorage.setItem("datosPago", JSON.stringify(datosParaGuardar));
    navigate("/alimentosc");
  };

  return (
    <div className="pagos-container">
      <h1 className="pagos-title">Completa tus datos</h1>

      <div className="pagos-tabs">
        <span className="tab">Compras</span>
        <span className="separator"></span>
        <span className="tab active">Pagos</span>
      </div>

      <div className="pagos-form">
        <input
          type="text"
          name="documento"
          placeholder="Número de documento"
          value={formData.documento}
          onChange={handleChange}
          className="input-pago"
        />

        <div className="pagos-row">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input-pago"
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="input-pago"
          />
        </div>

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          className="input-pago"
        />

        <p className="pago-subtitle">Realice su pago con tarjeta</p>

        <input
          type="text"
          name="tarjeta"
          placeholder="Número de tarjeta"
          value={formData.tarjeta}
          onChange={handleChange}
          className="input-pago"
        />

        <div className="pagos-row">
          <input
            type="text"
            name="vencimiento"
            placeholder="Vencimiento MM/AA"
            value={formData.vencimiento}
            onChange={handleChange}
            className="input-pago"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            className="input-pago"
          />
        </div>

        <input
          type="text"
          name="nombreTarjeta"
          placeholder="Nombre completo"
          value={formData.nombreTarjeta}
          onChange={handleChange}
          className="input-pago"
        />

        <button onClick={handlePagar} className="btn-pago">
          Pagar
        </button>
      </div>
    </div>
  );
}


