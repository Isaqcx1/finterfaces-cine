import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Inicio } from "./pages/inicio";
import { Cines } from "./pages/cines";
import { Alimentos } from "./pages/alimentos";
import { AlimentosB } from "./pages/alimentosb";
import { AlimentosC} from "./pages/alimentosc";
import { Promociones } from "./pages/promociones";
import { Reservaciones } from "./pages/reservaciones";
import { Reservaciones2 } from "./pages/reservaciones2";
import { Reservaciones3 } from "./pages/reservaciones3";
import { Reservaciones4 } from "./pages/reservaciones4";
import { Reservaciones5 } from "./pages/reservaciones5";
import { Boleta } from "./pages/boleta";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/alimentosb" element={<AlimentosB />} />
        <Route path="/alimentosc" element={<AlimentosC />} />
        <Route path="/cines" element={<Cines />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/reservaciones" element={<Reservaciones />} />
        <Route path="/reservaciones2" element={<Reservaciones2 />}/> 
        <Route path="/reservaciones3" element={<Reservaciones3 />}/> 
        <Route path="/reservaciones4" element={<Reservaciones4 />}/> 
        <Route path="/reservaciones5" element={<Reservaciones5 />}/> 
        <Route path="/boleta" element={<Boleta />}/> 
      </Routes>
      {location.pathname !== "/reservaciones" && <Footer />}
    </>
  );
}


export default function General() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
