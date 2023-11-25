import { useCart } from "../hooks/useCart"
import { BsCartXFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";

export default function CartItem({ product }) {

  const { removeFromCart, addToCart } = useCart()

  return (
    <li className="h-52 w-full p-2 flex flex-col justify-around gap-y-3 bg-secondary rounded-md">
      <div className=" flex justify-center items-center">
        <strong>{product.nombre}</strong> - ${product.precio * product.quantity}
      </div>
      <section className="text-xl flex justify-evenly items-center">
        <span>Cantidad:</span> <strong className="font-extrabold">{product.quantity}</strong>
      </section>
      <footer className="flex justify-around">
        <button className="text-white h-12 w-20 flex justify-center items-center rounded-lg focus:ring-4 focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-red-300" onClick={() => removeFromCart(product)}><BsCartXFill /></button>
        <button className="text-white h-12 w-20 flex justify-center items-center rounded-lg focus:ring-4 focus:outline-none bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 " onClick={() => addToCart(product)}><FaCartPlus /></button>
      </footer>
    </li>
  )
}