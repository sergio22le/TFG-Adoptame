import PerfilAdoptante from "../components/PerfilAdoptante";
import PerfilProtectora from "../components/PerfilProtectora";
import PerfilAdministrador from "../components/PerfilAdministrador";

function Perfil() {

  {/* obtener el tipo de usuario desde el sessionStorage */}
  const tipoUsuario = sessionStorage.getItem("tipo");

  let usuario;

  if (tipoUsuario === "protectora") {
    usuario = <PerfilProtectora />;
  } else if (tipoUsuario === "administrador") {
    usuario = <PerfilAdministrador />;
  } else {
    usuario = <PerfilAdoptante />;
  };
  

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {usuario}
    </div>
  );
}

export default Perfil;