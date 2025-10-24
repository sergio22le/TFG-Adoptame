function DatosUsuario() {
  
    return (
        <div className="my-5 space-y-4">
            <div className="flex flex-row gap-10 items-baseline">
            <label className="block text-xl w-1/3 font-medium text-gray-700">Nombre</label>
            <input type="text" className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2" placeholder="Tu nombre"/>
            </div>
            <div className="flex flex-row gap-10 items-baseline">
            <label className="block text-xl w-1/3 font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2"></input>
            </div>
            <div className="mt-10">
                <button className="bg-verdeMarcaPrimario text-md text-white px-5 py-3 rounded-2xl hover:bg-verdeMarcaSecundario">Guardar Cambios</button>
            </div>
        </div>
    );

}

export default DatosUsuario;