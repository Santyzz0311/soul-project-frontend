export default function Login() {
  return (
    <main className="h-screen flex justify-center items-center">
      <section className="w-1/3 h-1/2 bg-slate-400 shadow-lg rounded-md p-4">
        <form className="flex flex-col gap-y-6 h-full justify-around">
          <h1 className="text-center text-2xl font-bold">Iniciar sesión</h1>
          <div className="grid grid-cols-[1fr_2fr]">
            <label className="font-bold" htmlFor="email">Correo:</label>
            <input className="w-full" type="email" name="email" id="email" />
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <label className="font-bold" htmlFor="password">Contraseña:</label>
            <input className="w-full" type="password" name="password" id="password" />
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-secondary hover:bg-tertiary text-white font-bold py-2 px-4 rounded">
              Iniciar sesión
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
