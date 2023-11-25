import { useCart } from "../hooks/useCart"
import CartItem from "../Components/CartItem"

export default function Cart() {
  const { cart, clearCart } = useCart()

  return (
    <div className="flex flex-col gap-y-4 items-center">
      <ul className={`w-11/12 mx-auto my-8 h-[32rem] ${cart.length === 0 ? "" : "grid grid-cols-3 gap-4 overflow-y-scroll"} `}>
        {
          cart.length === 0
            ? <h1 className="text-center text-3xl font-bold">No hay productos en el carrito</h1>
            : cart.map(product => (
              <CartItem
                key={product._id}
                product={product}
              />
            ))
        }
      </ul>
      {cart.length !== 0 &&
        <div>
          <button className="text-white h-16 text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center" onClick={clearCart}>
            Limpiar carrito
          </button>
        </div>
      }
    </div>
  )
}