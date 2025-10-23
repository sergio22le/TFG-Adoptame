function Configuracion() {
  return (
    <div>
      <form className="py-5 space-y-5">
        <div className="flex flex-row justify-between gap-10">
          <label className="block w-2/5 text-xl font-medium text-gray-700">Cambiar contraseña</label>
          <input type="password" className="mt-1 block w-3/5 border border-gray-300 rounded-md shadow-sm p-2" placeholder="Nueva Contraseña"/>
        </div>
        <div className="flex flex-row justify-between gap-10">
          <label className="block w-2/5 text-xl font-medium text-gray-700">Antigua contraseña</label>
          <input type="password" className="mt-1 block w-3/5 border border-gray-300 rounded-md shadow-sm p-2" placeholder="Nueva Contraseña"/>
        </div>
        <div className="flex flex-row justify-between gap-10">
          <label className="block w-2/5 text-xl font-medium text-gray-700">Notificaciones por Email</label>
          <select className="mt-1 block w-3/5 border border-gray-300 rounded-md shadow-sm p-2">
            <option>Habilitadas</option>
            <option>Deshabilitadas</option>
          </select>
        </div>
        <button type="submit" className="mt-4 bg-verdeMarcaPrimario text-white px-4 py-2 rounded-md hover:bg-verdeMarcaSecundario hover:cursor-pointer">Guardar Configuración</button>
      </form>
    </div>
  );
}

export default Configuracion;