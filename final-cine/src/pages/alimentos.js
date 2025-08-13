import { useNavigate } from "react-router-dom";
import "../styles/Alimentos.css";
import canchita from "../img/canchita.png";

export function Alimentos() {
  const navigate = useNavigate();

  const productos = [
    { nombre: "Popcorn chico de sal", precio: 11.0 },
    { nombre: "Popcorn grande mixto", precio: 20.0 },
    { nombre: "Popcorn mediano de sal", precio: 14.0 },
    { nombre: "Popcorn chico dulce", precio: 12.0 },
    { nombre: "Popcorn mediano dulce", precio: 15.0 },
    { nombre: "Popcorn grande de sal", precio: 23.0 },
    { nombre: "Popcorn extra grande mixto", precio: 29.0 },
    { nombre: "Popcorn especial toffee", precio: 31.0 },
    { nombre: "Combo popcorn premium", precio: 40.5 },
  ];

  const comprarProducto = (producto) => {
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
    navigate("/alimentosb");
  };

  return (
    <div className="alimentos-container">
      <h1 className="alimentos-title">Comestibles</h1>
      <span className="alimentos-subtitle">Inflatables</span>

      
      <div className="alimentos-tabs">
        <span className="tab active">Compras</span>
        <span className="separator"></span>
        <span className="tab">Pagos</span>
      </div>

     
      <div className="alimentos-grid">
        {productos.map((p, index) => (
          <div key={index} className="alimento-card">
            <img src={canchita} className="alimento-img" />
            <p className="alimento-nombre">{p.nombre}</p>
            <p className="alimento-precio">S/.{p.precio.toFixed(2)}</p>
            <button
              className="comprar-btn"
              onClick={() => comprarProducto(p)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
