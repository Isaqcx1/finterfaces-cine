import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Reservaciones3.css";
import ticket from '../img/ticket.png';
import butacas from '../img/butacas.png';
import canchita from '../img/canchita.png';
import pago from '../img/pago.png';

export function Reservaciones3() {
    const navigate = useNavigate();
    const [step, setStep] = useState(2);
    const [butacasSeleccionadas, setButacasSeleccionadas] = useState([]);
    const [maxButacas, setMaxButacas] = useState(0);

    const stepsData = [
        { id: 1, label: "Tickets", icon: ticket },
        { id: 2, label: "Butacas", icon: butacas },
        { id: 3, label: "Chocolatería", icon: canchita },
        { id: 4, label: "Pago", icon: pago },
    ];

    const filas = Array.from({ length: 11 }, (_, i) => String.fromCharCode(65 + i));
    const columnas = Array.from({ length: 11 }, (_, i) => i + 1);

    const asientosComprados = [
        "A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11",
        "B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11"
    ];

    useEffect(() => {
        // Limpiar selección previa
        localStorage.removeItem("butacasSeleccionadas");
        setButacasSeleccionadas([]);

        // Calcular total de boletos comprados
        const tickets = JSON.parse(localStorage.getItem("ticketsSeleccionados")) || { adulto: 0, infantil: 0, mayor: 0 };
        const total = tickets.adulto + tickets.infantil + tickets.mayor;
        setMaxButacas(total);
    }, []);

    const toggleButaca = (id) => {
        if (asientosComprados.includes(id)) return; // No seleccionar si está comprado

        // Si ya está seleccionada, quitarla
        if (butacasSeleccionadas.includes(id)) {
            setButacasSeleccionadas(prev => prev.filter(b => b !== id));
        }
        // Si no está seleccionada, agregar solo si no pasa el límite
        else if (butacasSeleccionadas.length < maxButacas) {
            setButacasSeleccionadas(prev => [...prev, id]);
        }
    };

    const handleContinue = () => {
        localStorage.setItem("butacasSeleccionadas", JSON.stringify(butacasSeleccionadas));
        navigate('/reservaciones4');
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

            <div className="content">
                {step === 2 && (
                    <>
                        <h2>Selecciona tus butacas</h2>

                        <div className="leyenda">
                            <span><div className="asiento disponible"></div> Disponible</span>
                            <span><div className="asiento seleccionado"></div> Seleccionado</span>
                            <span><div className="asiento comprado"></div> Comprado</span>
                        </div>

                        <div className="butacas-container">
                            {filas.map((fila) => (
                                <div key={fila} className="fila">
                                    {columnas.map((col) => {
                                        const id = `${fila}${col}`;
                                        let estado = "disponible";
                                        if (asientosComprados.includes(id)) {
                                            estado = "comprado";
                                        } else if (butacasSeleccionadas.includes(id)) {
                                            estado = "seleccionado";
                                        }
                                        return (
                                            <div
                                                key={id}
                                                className={`asiento ${estado}`}
                                                onClick={() => toggleButaca(id)}
                                            >
                                                {id}
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        <div className="pantalla">PANTALLA</div>

                        <button className="continuar-btn" onClick={handleContinue}>
                            Continuar
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
