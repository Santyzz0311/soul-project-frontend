import { useCart } from "../hooks/useCart"
import { FaCartPlus } from "react-icons/fa6";
import { BsCartDashFill } from "react-icons/bs";

export default function ProductsItem({ product }) {

  const { cart, addToCart, removeFromCart } = useCart()
  const checkProductInCart = eachProduct => {
    return cart.some(item => item._id === eachProduct._id)
  }

  return (
    <div className="w-full max-w-sm border h-72 border-gray-200 rounded-lg shadow bg-secondary ">
      <div className="px-5 pb-5 flex flex-col justify-around h-full">
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{product.nombre} <span className="text-sm tracking-tight">({product.categoria})</span></h2>
        <div className="flex items-center gap-x-4 mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3 inline-block flex-1 text-center items-center">Stock {product.cantidad_stock}</span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">{product.descripcion}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.precio}</span>
          {

            <button className={`text-white ${checkProductInCart(product) ? 'bg-red-700 hover:bg-red-800 focus:ring-red-300' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} focus:ring-4 focus:outline-none font-medium rounded-lg flex justify-center items-center px-5 py-2.5  h-12 w-20`} onClick={() => {
              checkProductInCart(product)
                ? removeFromCart(product)
                : addToCart(product)
            }}>
              {
                checkProductInCart(product)
                  ? <BsCartDashFill />
                  : <FaCartPlus />
              }
            </button>
          }
        </div>
      </div>
    </div>

  )
}
