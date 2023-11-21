import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {

  return (
    <main className="h-screen flex justify-center items-center">
      <section className="w-1/3 h-1/2 bg-slate-400 shadow-lg rounded-md p-4">
        <form className="flex flex-col gap-y-6 h-full justify-around relative">
          <div className="absolute top-0 right-0">
            <Link to="/">
              <FaHome size="1.2em" />
            </Link>
          </div>
          <h1 className="text-center text-2xl font-bold">Ingresa tus credenciales</h1>
          <div className="flex justify-around items-center">
            <label className="text-xl" htmlFor="email"><IoMdMail /></label>
            <input className="w-3/4 focus:outline-none p-2 rounded-md text-black" type="email" name="email" id="email" />
          </div>
          <div className="flex justify-around items-center">
            <label className="text-xl" htmlFor="password"><RiLockPasswordFill /></label>
            <input className="w-3/4 focus:outline-none p-2 rounded-md text-black" type="password" name="password" id="password" />
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
