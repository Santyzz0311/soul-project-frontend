import { Link } from "react-router-dom";
import SearchProductsBar from "./SearchProductsBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function NavBar() {

  const buttonSesions = {
    logIn: "Iniciar sesión",
    signUp: "Registrarse",
    className: "bg-secondary hover:bg-tertiary text-white font-bold py-2 px-4 rounded"
  }

  return (
    <header className="bg-primary h-24 font-bold sticky z-50 text-white">
      <nav className="h-full flex">
        <div className="w-3/6 h-full flex justify-center items-center">
          <span className="w-3/6 h-2/4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" alt="Logo compra y venta de objetos." />
          </span>
        </div>
        <div className="w-full h-full flex items-center">
          <SearchProductsBar />
        </div>
        <ul className="h-full w-full flex justify-evenly items-center">
          <li>
            <button className={buttonSesions.className}>
              {buttonSesions.signUp}
            </button>
          </li>
          <li>
            <Link to="/login" className={buttonSesions.className}>
              {buttonSesions.logIn}
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <button>
              <AiOutlineShoppingCart size="2em" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
