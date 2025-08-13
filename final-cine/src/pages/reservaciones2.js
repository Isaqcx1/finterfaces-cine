import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Reservaciones2.css";
import ticket from '../img/ticket.png';
import butacas from '../img/butacas.png';
import canchita from '../img/canchita.png';
import pago from '../img/pago.png';


export function Reservaciones2() {

    const navigate = useNavigate()

    const [step, setStep] = useState(1);

    const [tickets, setTickets] = useState({
        adulto: 0,
        infantil: 0,
        mayor: 0,
    });

    const handleQuantityChange = (type, amount) => {
        setTickets((prev) => ({
            ...prev,
            [type]: Math.max(0, prev[type] + amount),
        }));
    };

    const handleContinue = () => {
    
    localStorage.setItem("ticketsSeleccionados", JSON.stringify(tickets));
    navigate('/reservaciones3');
};



    
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
                {step === 1 && (
                    <>
                        <h2>SUPERMAN (DOB)</h2>
                        <h3>Tarifas Disponibles:</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo de entrada</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ADULTO</td>
                                    <td>S/ 14.00</td>
                                    <td>
                                        <button onClick={() => handleQuantityChange("adulto", -1)}>⬇</button>
                                        {tickets.adulto}
                                        <button onClick={() => handleQuantityChange("adulto", 1)}>⬆</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>INFANTIL DE 2-8</td>
                                    <td>S/ 9.00</td>
                                    <td>
                                        <button onClick={() => handleQuantityChange("infantil", -1)}>⬇</button>
                                        {tickets.infantil}
                                        <button onClick={() => handleQuantityChange("infantil", 1)}>⬆</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AD.MAYOR +60</td>
                                    <td>S/ 9.00</td>
                                    <td>
                                        <button onClick={() => handleQuantityChange("mayor", -1)}>⬇</button>
                                        {tickets.mayor}
                                        <button onClick={() => handleQuantityChange("mayor", 1)}>⬆</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="continuar-btn" onClick={handleContinue}>
                            Continuar
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
