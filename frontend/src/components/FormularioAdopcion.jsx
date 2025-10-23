function FormularioAdopcion() {
    
    return (
        <div className="flex flex-col items-center justify-center my-10 mx-5 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <form className="bg-white p-6 rounded-xl shadow-lg w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Solicitud de adopción</h2>
                
                <button className="bg-verdeMarcaPrimario text-md text-white px-5 py-3 rounded-2xl hover:bg-verdeMarcaSecundario" type="submit">Solicitar</button>
            </form>
        </div>
    );
}

export default FormularioAdopcion;