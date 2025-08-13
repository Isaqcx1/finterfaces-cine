// src/pages/Reservaciones5.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Reservaciones5.css";
import ticket from "../img/ticket.png";
import butacas from "../img/butacas.png";
import canchita from "../img/canchita.png";
import pago from "../img/pago.png";

export function Reservaciones5() {
    const navigate = useNavigate();
    const step = 4;

    const stepsData = [
        { id: 1, label: "Tickets", icon: ticket },
        { id: 2, label: "Butacas", icon: butacas },
        { id: 3, label: "Chocolatería", icon: canchita },
        { id: 4, label: "Pago", icon: pago },
    ];

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

           
            <div className="content">
                <h2>Confirmar pago</h2>
                <button
                    className="pagar-btn"
                    onClick={() => navigate("/boleta")}
                >
                    Crear boleta
                </button>
            </div>
        </div>
    );
}
