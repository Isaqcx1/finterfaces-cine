
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Reservaciones4.css";
import ticket from "../img/ticket.png";
import butacas from "../img/butacas.png";
import canchita from "../img/canchita.png";
import pago from "../img/pago.png";

export function Reservaciones4() {
    const navigate = useNavigate();
    const [step] = useState(3);
    const [carrito, setCarrito] = useState([]);
    const [comboSeleccionado, setComboSeleccionado] = useState(null);

    const stepsData = [
        { id: 1, label: "Tickets", icon: ticket },
        { id: 2, label: "Butacas", icon: butacas },
        { id: 3, label: "Chocolatería", icon: canchita },
        { id: 4, label: "Pago", icon: pago },
    ];

    const combos = [
        { id: 1, nombre: "COMBO 1 - 1 POP CHICO SAL. + 1 GASEOSA BOTELLA", precio: 14.5 },
        { id: 2, nombre: "COMBO 2 - 2 POP CHICO SAL. + 2 GASEOSA BOTELLA", precio: 24.5 },
        { id: 3, nombre: "COMBO 3 - 1 POP GRANDE MIXTO + 2 GASEOSA BOTELLA", precio: 29.9 },
        { id: 4, nombre: "COMBO 4 - 2 POP CHICO DULCE + 2 GASEOSA BOTELLA", precio: 27.0 },
        { id: 5, nombre: "COMBO 5 - POP EXTRA GRANDE MIXTO + 2 GASEOSA BOTELLA", precio: 35.0 },
        { id: 6, nombre: "COMBO TOFFEE - POP ESPECIAL TOFFEE + 2 GASEOSA BOTELLA", precio: 36.5 },
    ];

    const agregarAlCarrito = (combo) => {
        setCarrito([combo]);
        setComboSeleccionado(combo.id);
    };

    const handleContinue = () => {
        localStorage.setItem("carritoChocolateria", JSON.stringify(carrito));
        navigate("/reservaciones5");
    };

    return (
        <div className="reservaciones-container">
            <div className="sidebar">
                {stepsData.map(({ id, label, icon }) => {
                    const stepClass = step === id ? "active" : step > id ? "completed" : "";
                    return (
                        <div key={id} className={`step ${stepClass}`}>
                            <div className="step-icon-wrapper">
                                <img src={icon} alt={label} className="step-icon" />
                            </div>
                            <span className="step-label">{label}</span>
                        </div>
                    );
                })}
            </div>

            <main className="content">
                <h2>SUPERMAN (DOB)</h2>
                <h3>Combos</h3>

                <div className="combos-grid">
                    {combos.map((combo) => (
                        <div className="combo-card" key={combo.id}>
                            <div className="combo-icon">
                                <img src={canchita}  className="combo-img" />
                            </div>
                            <div className="combo-info">
                                <p className="combo-nombre">{combo.nombre}</p>
                                <p className="combo-precio">S/ {combo.precio.toFixed(2)}</p>
                            </div>
                            <button
                                onClick={() => agregarAlCarrito(combo)}
                                className={`agregar-btn ${comboSeleccionado === combo.id ? "selected" : ""}`}
                            >
                                Agregar
                            </button>
                        </div>
                    ))}
                </div>

                <button
                    className="continuar-btn"
                    onClick={handleContinue}
                    disabled={carrito.length === 0}
                >
                    Continuar
                </button>
            </main>
        </div>
    );
}
