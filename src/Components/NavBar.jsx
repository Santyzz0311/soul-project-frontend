import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import logo from "../assets/carrito-de-compras.png"
export default function NavBar() {

  return (
    <header className="bg-primary h-24 font-bold sticky z-50 text-white">
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-14"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
            <Link to="/register">
              <button
                type="button"
                className="flex text-sm bg-purple-500 rounded-full md:me-0 p-2 focus:ring-4 focus:ring-gray-300 "
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <AiOutlineUserAdd size="2em" />
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                className="flex text-sm bg-blue-500 rounded-full md:me-0 p-2 focus:ring-4 focus:ring-gray-300 "
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <AiOutlineUser size="2em" />
              </button>
            </Link>
            <Link to="/cart">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 p-2 focus:ring-4 focus:ring-gray-300 "
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <AiOutlineShoppingCart size="2em" />
              </button>
            </Link>

          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to="/products">
                  Productos
                </Link>
              </li>
              <li>
                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to="/sellProduct">
                  Vender Producto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
