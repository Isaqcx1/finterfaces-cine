import { Link, useNavigate } from "react-router-dom";
import "../styles/Inicio.css";
import fan from '../img/4fan.png';
import pelia from '../img/peli1.png';
import pelib from '../img/peli2.png';
import pelic from '../img/peli3.png';
import pelid from '../img/peli4.png';
import pelie from '../img/peli5.png';
import pelif from '../img/peli6.png';
import superman from '../img/superman.png';
import jurasic from '../img/jurasic.png';
import stich from '../img/stich.png';
import carrusel from '../img/carrusel.png';
import bufon from '../img/bufon.png';
import dragon from '../img/dragon.png';
import f1 from '../img/f1.png';
import megan from '../img/megan.png';
import pitufos from '../img/pitufos.png';

export function Inicio() {
  const navigate = useNavigate()

  const handlerRedirectReservaciones = () => {
    navigate('/reservaciones')
  }




  return (
    <div className="inicio-container">
      <div className="en-estreno-banner">
        <h2>¡En estreno!</h2>
      </div>

      
      <div className="poster-container">
        <div className="poster">
          <img src={fan} />
        </div>
      </div>



      <div className="estrenos-section">
        <h2>Próximos estrenos</h2>
        <span className="sub-text">Pre-venta</span>
        <div className="movies-row">
          <img src={pelia} alt="Estreno" />
          <img src={pelib} alt="Estreno" />
          <img src={pelic} alt="Estreno" />
          <img src={pelid} alt="Estreno" />
          <img src={pelie} alt="Estreno" />
          <img src={pelif} alt="Estreno" />
        </div>
      </div>



      
      <div className="cartelera-section">
        <h2>Cartelera</h2>
        <p className="ver-toda">Ver todo</p>
        <div className="peliculas-grid">

          <div className="pelicula-card">
            <img src={superman}/>
            <div>
              <h3>SUPERMAN</h3>
              <p className="sinopsis">Sinopsis</p>
              <p className="descripcion">
                En su estilo inconfundible, James Gunn asume el papel de guionista...
              </p>
              <button onClick={() => {
                localStorage.setItem("peliculaSeleccionada", "SUPERMAN");
                handlerRedirectReservaciones();
              }}>Comprar</button>
            </div>
          </div>

          <div className="pelicula-card">
            <img src={jurasic}/>
            <div>
              <h3>JURASSIC WORLD: RENACE</h3>
              <p className="sinopsis">Sinopsis</p>
              <p className="descripcion">
                Una expedición se enfrenta a criaturas prehistóricas...
              </p>
              <button>Comprar</button>
            </div>
          </div>

          <div className="pelicula-card">
            <img src={stich}/>
            <div>
              <h3>LILO & STITCH</h3>
              <p className="sinopsis">Sinopsis</p>
              <p className="descripcion">
                Una niña hawaiana hace amigo de un extraterrestre fugitivo...
              </p>
              <button>Comprar</button>
            </div>
          </div>

          <div className="pelicula-card">
            <img src={carrusel}/>
            <div>
              <h3>RE: CARRUSEL</h3>
              <p className="sinopsis">Sinopsis</p>
              <p className="descripcion">
                Un grupo de amigos entra en una antigua atracción de terror...
              </p>
              <button>Comprar</button>
            </div>
          </div>

          <div className="pelicula-card">
            <img src={bufon}/>
            <div>
              <h3>EL BUFÓN</h3>
              <p className="sinopsis">Sinopsis</p>
              <p className="descripcion">
                Un malvado bufón aterroriza a los habitantes en Halloween...
              </p>
              <button>Comprar</button>
            </div>
          </div>

          <div className="pelicula-card">
            <img src={dragon}/>
            <div>
              <h3>COMO ENTRENAR A TU DRAGÓN</h3>
              <p className="sinopsis">Sinopsis</p>
              <p className="descripcion">
                Responsabilidades inesperadas le cambian la vida...
              </p>
              <button>Comprar</button>
            </div>
          </div>

          <div className="pelicula-card">
            <img src={f1} />
            <div>
              <h3>F1: LA PELICULA</h3>
              <p className="sinopsis">Sinopsis</p>
              <p className="descripcion">
                Un emocionante documental que te sumerge en el mundo de la Fórmula 1...
              </p>
              <button>Comprar</button>
            </div>
          </div>

          <div className="pelicula-card">
            <img src={megan} />
            <div>
              <h3>MEGAN 2.0</h3>
              <p className="sinopsis">Sinopsis</p>
              <p className="descripcion">
                Una inteligencia artificial toma el control y comienza a actuar por su cuenta...
              </p>
              <button>Comprar</button>
            </div>
          </div>

          <div className="pelicula-card">
            <img src={pitufos}/>
            <div>
              <h3>PITUFOS</h3>
              <p className="sinopsis">Sinopsis</p>
              <p className="descripcion">
                Los pequeños seres azules emprenden una nueva aventura para salvar su aldea...
              </p>
              <button>Comprar</button>
            </div>
          </div>

        </div>
      </div>




    </div>

  );
}
