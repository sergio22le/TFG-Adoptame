import DatosUsuario from "../components/DatosUsuario";
import Historial from "../components/Historial";
import Notificaciones from "../components/Notificaciones";
import Configuracion from "../components/Configuracion";
import { useState } from "react";

function PerfilAdoptante() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("Mis datos");

  const manejarSeleccion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  let componenteMostrado;

  if (opcionSeleccionada === "Historial") {
    componenteMostrado = <Historial />;
  } else if (opcionSeleccionada === "Notificaciones") {
    componenteMostrado = <Notificaciones />;
  } else if (opcionSeleccionada === "Configuración") {
    componenteMostrado = <Configuracion />;
  } else {
    componenteMostrado = <DatosUsuario />;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 bg-fondo md:bg-inherit md:flex md:flex-row lg:gap-10 items-center justify-center w-full mx-10 md:pt-5 pb-5 px-5 shadow-md">
        <button className="text-lg font-semibold hover:cursor-pointer bg-verdeMarcaPrimario rounded-xl text-white hover:bg-verdeMarcaSecundario p-3 mx-5 my-2 md:bg-fondo md:hover:bg-fondo md:font-bold md:text-black md:text-2xl md:hover:underline" onClick={() => manejarSeleccion("Mis datos")}>Mis datos</button>
        <button className="text-lg font-semibold hover:cursor-pointer bg-verdeMarcaPrimario rounded-xl text-white hover:bg-verdeMarcaSecundario p-3 mx-5 my-2 md:bg-fondo md:hover:bg-fondo md:font-bold md:text-black md:text-2xl md:hover:underline" onClick={() => manejarSeleccion("Historial")}>Historial</button>
        <button className="text-lg font-semibold hover:cursor-pointer bg-verdeMarcaPrimario rounded-xl text-white hover:bg-verdeMarcaSecundario p-3 mx-5 my-2 md:bg-fondo md:hover:bg-fondo md:font-bold md:text-black md:text-2xl md:hover:underline" onClick={() => manejarSeleccion("Notificaciones")}>Notificaciones</button>
        <button className="text-lg font-semibold hover:cursor-pointer bg-verdeMarcaPrimario rounded-xl text-white hover:bg-verdeMarcaSecundario p-3 mx-5 my-2 md:bg-fondo md:hover:bg-fondo md:font-bold md:text-black md:text-2xl md:hover:underline" onClick={() => manejarSeleccion("Configuración")}>Configuración</button>
      </div>

      <div className="w-1/2 mx-auto my-10">
        {componenteMostrado}
      </div>
    </div>
  );
}

export default PerfilAdoptante;