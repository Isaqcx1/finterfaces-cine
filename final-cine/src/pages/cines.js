import React, { useState } from "react";
import "../styles/Cines.css";

export function Cines() {
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState("");

    const cines = [
        {
            nombre: "REWIND CLUB ARENALES",
            direccion: "Arenales 1756 - Centro comercial Arenales - 5to piso",
            formato: "2D",
        },
        {
            nombre: "REWIND CLUB SAN MIGUEL",
            direccion: "Av. La Marina 2000 – Plaza San Miguel – 3er piso",
            formato: "2D",
        },
        {
            nombre: "REWIND CLUB MIRAFLORES",
            direccion: "Av. Larco 812 – Centro Comercial Larcomar – Nivel Plaza",
            formato: "2D",
        },
        {
            nombre: "REWIND CLUB PURUCHUCO",
            direccion: "Av. Javier Prado Este 4200 – Real Plaza Puruchuco – 5to piso",
            formato: "2D",
        },
        {
            nombre: "REWIND CLUB COMAS",
            direccion: "Av. Universitaria 2050 – Mall Plaza Comas – 2do nivel",
            formato: "2D",
        },
        {
            nombre: "REWIND CLUB CAMINOS DEL INCA",
            direccion: "Av. Caminos del Inca 890 – CC. Caminos del Inca – 2do piso",
            formato: "2D",
        },
    ];

    const cinesFiltrados = ciudadSeleccionada
        ? cines.filter((cine) => cine.nombre === ciudadSeleccionada)
        : cines;

    return (
        <div className="cines-container">
            <h2 className="cines-title">Cines</h2>
            <p className="cines-subtitle">Estamos siempre cerca</p>

            <div className="cines-filtros">
                <select
                    className="ciudad-select"
                    value={ciudadSeleccionada}
                    onChange={(e) => setCiudadSeleccionada(e.target.value)}
                >
                    <option value="">Ciudad</option>
                    {cines.map((cine, index) => (
                        <option key={index} value={cine.nombre}>
                            {cine.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="cines-grid">
                {cinesFiltrados.map((cine, index) => (
                    <div key={index} className="cine-card">
                        <h3>{cine.nombre}</h3>
                        <p>{cine.direccion}</p>
                        <span>{cine.formato}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
