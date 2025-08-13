import { Link , useNavigate  } from "react-router-dom";
import "../styles/Header.css";
import logo from '../img/rewindlogo.png'

export function Header() {
    const navigate = useNavigate()

    const handlerRedirectInicio = () => {
        navigate('/inicio')
    }

    const handlerRedirectCines = () => {
        navigate('/cines')
    }
    const handlerRedirectAlimentos = () => {
        navigate('/alimentos')
    }
    const handlerRedirectPromociones= () => {
        navigate('/promociones')
    }


  return (
    <header className="header">
      <div className="header-logo">
        <img
          src={logo}
          
        />
      </div>
      <nav className="header-nav">
        <a onClick={handlerRedirectInicio}>Inicio</a>
        <a onClick={handlerRedirectCines}>Cines</a>
        <a onClick={handlerRedirectPromociones}>Promociones</a>
        <a onClick={handlerRedirectAlimentos}>Alimentos</a>

        
      </nav>
    </header>
  );
}
