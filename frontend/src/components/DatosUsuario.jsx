function DatosUsuario() {
  
    return (
        <div className="space-y-4">
            <div className="flex flex-row gap-10 items-baseline">
            <label className="block text-xl w-1/3 font-medium text-gray-700">Nombre</label>
            <input type="text" className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2" placeholder="Tu nombre"/>
            </div>
            <div className="flex flex-row gap-10 items-baseline">
            <label className="block text-xl w-1/3 font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2"></input>
            </div>
            <button className="mt-4 bg-verdeMarcaPrimario text-white px-4 py-2 rounded-md hover:bg-verdeMarcaSecundario hover:cursor-pointer">Guardar Cambios</button>
        </div>
    );

}

export default DatosUsuario;