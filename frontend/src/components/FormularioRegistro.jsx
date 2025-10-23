function FormularioRegistro() {
    
    return (
        <div className="flex flex-col items-center justify-center my-10 mx-5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <form className="bg-white p-6 rounded-xl shadow-lg w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Crear nuevo usuario</h2>
                <div className="mb-4 w-3/4 mx-auto">
                    <label className="block text-gray-700 mb-2">Usuario</label>
                    <input className="w-full p-2 border border-gray-400 rounded-xl" type="text" id="usuario" name="usuario" required />
                </div>
                <div className="mb-6 w-3/4 mx-auto">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
                    <input className="w-full p-2 border border-gray-400 rounded-xl" type="password" id="password" name="password" required />
                </div>
                <div className="mb-10 w-3/4 mx-auto">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Repetir contraseña</label>
                    <input className="w-full p-2 border border-gray-400 rounded-xl" type="password" id="password" name="password" required />
                </div>
                <button className="bg-verdeMarcaPrimario text-md text-white px-5 py-3 rounded-2xl hover:bg-verdeMarcaSecundario" type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default FormularioRegistro;