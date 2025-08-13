import { Link, useNavigate } from "react-router-dom";
import "../styles/Reservaciones.css";
import superman from '../img/superman.png';

export function Reservaciones() {
    const navigate = useNavigate();

    const seleccionarHora = (hora, cine, direccion) => {
        localStorage.setItem("horaSeleccionada", hora); 
        localStorage.setItem("cineSeleccionado", cine);
        localStorage.setItem("direccionCine", direccion);
        navigate("/reservaciones2"); 
    };

    return (
        <div className="reservaciones-container">
            <div className="left-panel">
                <button className="volver-btn"> Volver </button>
            
                <img
                    src={superman}
                    className="poster-reservacion"
                />
                <div className="descripcion">
                    <h3>Descripción</h3>
                    <div className="desc-grid">
                        <p><strong>Género:</strong> <span className="resaltado">Acción</span></p>
                        <p><strong>Duración:</strong> <span className="resaltado">120 Minutos</span></p>
                        <p><strong>País:</strong> <span className="resaltado">Estados Unidos</span></p>
                        <p><strong>Fecha de Estreno:</strong> <span className="resaltado">09/07/25</span></p>
                        <p className="full-row"><strong>Clasificación:</strong> <span className="resaltado">Todo espectador</span></p>
                    </div>
                </div>
            </div>

            <div className="right-panel">
                <h1>SUPERMAN (DOB)</h1>
                <a href="#" className="sinopsis-link">Sinopsis</a>
                <p className="sinopsis-text">
                    En su estilo característico, James Gunn asume el papel del superhéroe original en el nuevo universo de DC,
                    con una singular mezcla de acción épica, humor y corazón, ofreciendo un Superman impulsado por la compasión
                    y una creencia inherente en la bondad de la humanidad.
                </p>

                <div className="cine">
                    <h3>REWIND CLUB ARENALES</h3>
                    <p>Arenales 1756 - Centro comercial Arenales - 5to piso</p>
                    <span className="formato">2D</span>
                    <div 
                        className="hora" 
                        onClick={() => seleccionarHora(
                            "3:45 pm", 
                            "REWIND CLUB ARENALES", 
                            "Arenales 1756 - Centro comercial Arenales - 5to piso"
                        )}
                    >
                        3:45 pm
                    </div>
                </div>

                <div className="cine">
                    <h3>REWIND CLUB SAN MIGUEL</h3>
                    <p>Av. La Marina 2000 - Plaza San Miguel - 3er piso</p>
                    <span className="formato">2D</span>
                    <div 
                        className="hora" 
                        onClick={() => seleccionarHora(
                            "2:00 pm", 
                            "REWIND CLUB SAN MIGUEL", 
                            "Av. La Marina 2000 – Plaza San Miguel – 3er piso"
                        )}
                    >
                        2:00 pm
                    </div>
                </div>
            </div>
        </div>
    );
}

