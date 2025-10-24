function Configuracion() {
  return (
    <div>
      <form className="my-5 space-y-5">
        <div className="flex flex-row justify-between items-baseline gap-10">
          <label className="block w-2/5 text-xl font-medium text-gray-700">Cambiar contraseña</label>
          <input type="password" className="mt-1 block w-3/5 border border-gray-300 rounded-md shadow-sm p-2" placeholder="Nueva Contraseña"/>
        </div>
        <div className="flex flex-row justify-between items-baseline gap-10">
          <label className="block w-2/5 text-xl font-medium text-gray-700">Antigua contraseña</label>
          <input type="password" className="mt-1 block w-3/5 border border-gray-300 rounded-md shadow-sm p-2" placeholder="Nueva Contraseña"/>
        </div>
        <div className="flex flex-row justify-between items-baseline gap-10">
          <label className="block w-2/5 text-xl font-medium text-gray-700">Notificaciones por Email</label>
          <select className="mt-1 block w-3/5 border border-gray-300 rounded-md shadow-sm p-2">
            <option>Habilitadas</option>
            <option>Deshabilitadas</option>
          </select>
        </div>
        <div className="mt-10">
          <button type="submit" className="bg-verdeMarcaPrimario text-md text-white px-5 py-3 rounded-2xl hover:bg-verdeMarcaSecundario">Guardar Configuración</button>
        </div>
      </form>
    </div>
  );
}

export default Configuracion;