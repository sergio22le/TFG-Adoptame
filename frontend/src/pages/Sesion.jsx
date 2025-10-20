import { Link } from "react-router-dom";

function Sesion() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-verdeMarcaSecundario">INICIAR SESION</h1>
      <Link to="/registro" className="text-2xl font-semibold text-verdeMarcaPrimario pt-10  hover:underline">Aun no tienes cuenta, regístrate</Link>
    </div>
  )
}

export default Sesion;