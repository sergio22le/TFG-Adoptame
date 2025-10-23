import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Perros from "./pages/Perros.jsx";
import Protectoras from "./pages/Protectoras.jsx";
import Sesion from "./pages/Sesion.jsx";
import Perfil from "./pages/Perfil.jsx";
import Registro from "./pages/Registro.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; 

export const API_URL = 'http://localhost:8000/api';

function App() {

  // Comprobar si hay sesion iniciada
  // const token = sessionStorage.getItem("token");

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-fondo">
        
        <Header />

        {/* MAIN */}
        {/* Control de las rutas */}
        <main className="w-full flex-grow flex flex-col items-center justify-start text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perros" element={<Perros />} />
            <Route path="/protectoras" element={<Protectoras />} />
            <Route path="/sesion" element={<Sesion />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;