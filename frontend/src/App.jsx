import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Perros from "./pages/Perros.jsx";
import Protectoras from "./pages/Protectoras.jsx";
import Sesion from "./pages/Sesion.jsx";
import Perfil from "./pages/Perfil.jsx";
import Registro from "./pages/Registro.jsx";
import { useState } from "react";

function App() {
  
  // Crear el estado que controla si el menu de hamburguesa esta abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Funcion que cambia el valor (true/false) al hacer clic
  const cambiarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">

        {/* HEADER */}

        {/* Logo/sesion y barra nevageacion en columna */}
        <header className="w-full flex flex-col justify-between items-center">
          
          {/* Logo y iniciar sesion */}
          <div className="flex flex-row justify-between items-center w-full px-10 sm:px-15 md:px-20 py-5 shadow-lg">
            
            {/* Logo */}
            <div className="flex flex-row gap-1 justify-start text-lg font-bold text-black">
              <Link to="/"><img src="/LogoCompleto.svg" alt="Logo" className="h-12 md:h-15 w-auto" /></Link>
            </div>
            <div className="hidden md:block text-end"> {/* Oculto para pantallas pequeñas y medianas */}
              <Link to="/sesion" className="text-sm lg:text-md font-bold text-black"><button className="bg-verdeMarcaPrimario text-white px-8 py-3 hover:bg-verdeMarcaSecundario hover:cursor-pointer rounded-2xl">Iniciar sesión</button></Link>
            </div>

            {/* Menu hamburguesa en moviles */}
            <div className="md:hidden relative"> {/* Oculto a partir de pantallas medianas */}
              <button onClick={cambiarMenu} className="h-8 w-8 rounded-sm">
                <img src="/Menu-hamburguesa.svg" alt="Menú" />
              </button>

              {/* Menu desplegable que aparece cuando menuAbierto = true */}
              {menuAbierto && (
                <div className="absolute w-auto right-0 bg-verdeMarcaPrimario text-2xl font-bold text-white rounded-2xl shadow-md flex flex-col items-end-safe px-10 py-5 z-10 whitespace-nowrap">
                  <Link to="/perros" className="py-2 hover:underline" onClick={() => setMenuAbierto(false)} >Perros</Link>
                  <Link to="/protectoras" className="py-2 hover:underline" onClick={() => setMenuAbierto(false)} >Protectoras</Link>
                  
                  {/* Si hay token de sesion, mostrar enlace a perfil, si no, a login */}
                  <Link to="/perfil" className="py-2 hover:underline" onClick={() => setMenuAbierto(false)} >Perfil</Link>
                  <Link to="/sesion" className="py-2 hover:underline" onClick={() => setMenuAbierto(false)} >Inciar sesión</Link>
                </div>
              )}
              
            </div>
          </div>
          
          {/* Barra de navegacion en pantallas grandes */}
          <nav className="hidden md:flex flex-row justify-center gap-25 bg-verdeMarcaPrimario border-none text-xl font-bold text-white w-full p-3 shadow-lg">
            <Link to="/perros" className=" hover:underline">Perros</Link>
            <Link to="/protectoras" className=" hover:underline">Protectoras</Link>
            <Link to="/perfil" className=" hover:underline">Mi perfil</Link>
          </nav>

        </header>

        {/* MAIN */}
        {/* Control de las rutas */}
        <main className="w-full flex-grow flex flex-col items-center justify-center text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perros" element={<Perros />} />
            <Route path="/protectoras" element={<Protectoras />} />
            <Route path="/sesion" element={<Sesion />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="w-full text-white flex flex-col items-center justify-center text-center bg-verdeMarcaPrimario p-4">
          <h1 className="text-xl font-bold">&copy; 2025 Adóptame - Todos los derechos reservados</h1>
          <div className="flex flex-row justify-around gap-10">
            <p className="">Email</p>
            <p className="">Teléfono</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;