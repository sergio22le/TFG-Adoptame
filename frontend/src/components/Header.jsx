import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

      // Crear el estado que controla si el menu de hamburguesa esta abierto o cerrado
    const [menuAbierto, setMenuAbierto] = useState(false);

    // Funcion que cambia el valor (true/false) al hacer clic
    const cambiarMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
      
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
            <div className="md:hidden relative flex flex-row gap-5"> {/* Oculto a partir de pantallas medianas */}
              <Link to="/perfil"><img src="/Perfil.svg" alt="perfil" className="h-8 w-auto" /></Link>
              <button onClick={cambiarMenu} className="h-8 w-8 rounded-sm">
                <img src="/Menu-hamburguesa.svg" alt="Menú" />
              </button>

              {/* Menu desplegable que aparece cuando menuAbierto = true */}
              {menuAbierto && (
                <div className="absolute w-auto top-10 right-0 bg-verdeMarcaPrimario text-2xl font-bold text-white rounded-2xl shadow-md flex flex-col items-end-safe px-10 py-5 z-10 whitespace-nowrap">
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
          <nav className="hidden md:flex flex-row justify-center gap-25 bg-verdeMarcaPrimario border-none text-xl font-bold text-white w-full p-3 shadow-md">
            <Link to="/perros" className=" hover:underline">Perros</Link>
            <Link to="/protectoras" className=" hover:underline">Protectoras</Link>
            <Link to="/perfil" className=" hover:underline">Mi perfil</Link>
          </nav>

        </header>
    )
}

export default Header;