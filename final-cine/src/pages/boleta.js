import React from "react";
import "../styles/Boleta.css"; 

export function Boleta() {
    const hora = localStorage.getItem("horaSeleccionada") || "No seleccionada";
    const pelicula = localStorage.getItem("peliculaSeleccionada") || "No seleccionada";
    const cine = localStorage.getItem("cineSeleccionado") || "No seleccionado";
    const direccion = localStorage.getItem("direccionCine") || "No seleccionada";

    const tickets = JSON.parse(localStorage.getItem("ticketsSeleccionados")) || {
        adulto: 0,
        infantil: 0,
        mayor: 0,
    };

    const butacas = JSON.parse(localStorage.getItem("butacasSeleccionadas")) || [];

    const combo = JSON.parse(localStorage.getItem("carritoChocolateria")) || [];
    const comboNombre = combo.length > 0 ? combo[0].nombre : "No seleccionado";
    const comboPrecio = combo.length > 0 ? `S/ ${combo[0].precio.toFixed(2)}` : "-";

    const totalTickets =
        tickets.adulto * 14 +
        tickets.infantil * 9 +
        tickets.mayor * 9;

    const totalCombo = combo.length > 0 ? combo[0].precio : 0;

    const total = totalTickets + totalCombo;

    return (
        <div className="boleta-container">
            <h2 className="boleta-title">Boleta de Compra</h2>

            
            <div className="boleta-info">
                <p><strong>Cine:</strong> {cine}</p>
                <p><strong>Dirección:</strong> {direccion}</p>
            </div>

            <table className="boleta-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Detalle</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Película</td>
                        <td>{pelicula}</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Hora de Función</td>
                        <td>{hora}</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Entradas Adulto</td>
                        <td>{tickets.adulto}</td>
                        <td>S/ {(tickets.adulto * 14).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Entradas Infantil</td>
                        <td>{tickets.infantil}</td>
                        <td>S/ {(tickets.infantil * 9).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Entradas Adulto Mayor</td>
                        <td>{tickets.mayor}</td>
                        <td>S/ {(tickets.mayor * 9).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Butacas</td>
                        <td>{butacas.join(", ") || "No seleccionadas"}</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Combo Confitería</td>
                        <td>{comboNombre}</td>
                        <td>{comboPrecio}</td>
                    </tr>
                    <tr className="boleta-total-row">
                        <td colSpan="2" style={{ textAlign: "right" }}>TOTAL</td>
                        <td>S/ {total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <p className="boleta-thanks">Gracias por su compra.</p>
        </div>
    );
}
