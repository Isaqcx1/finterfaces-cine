import { useEffect, useState } from "react";
import "../styles/AlimentosC.css";

export function AlimentosC() {
  const [producto, setProducto] = useState(null);
  const [datosPago, setDatosPago] = useState(null);

  useEffect(() => {
    const prod = localStorage.getItem("productoSeleccionado");
    const pago = localStorage.getItem("datosPago");

    if (prod) setProducto(JSON.parse(prod));
    if (pago) setDatosPago(JSON.parse(pago));
  }, []);

  if (!producto || !datosPago) {
    return <p className="no-data">No hay datos para mostrar la boleta.</p>;
  }

 return (
  <div className="boleta-wrapper">
    <div className="boleta-container">
      <h1 className="boleta-title">Boleta de Compra</h1>

      <div className="boleta-section">
        <h2 className="boleta-subtitle">Datos del cliente</h2>
        <p><strong>Nombre:</strong> {datosPago.nombre} {datosPago.apellido}</p>
        <p><strong>Correo:</strong> {datosPago.correo}</p>
      </div>

      <div className="boleta-section">
        <h2 className="boleta-subtitle">Detalle del producto</h2>
        <p><strong>Producto:</strong> {producto.nombre}</p>
        <p><strong>Precio:</strong> S/. {producto.precio.toFixed(2)}</p>
      </div>

      <h2 className="boleta-total">
        Total: S/. {producto.precio.toFixed(2)}
      </h2>
    </div>
  </div>
);

}
