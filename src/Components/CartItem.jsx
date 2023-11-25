import { useCart } from "../hooks/useCart"
import { BsCartXFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";

export default function CartItem({ product }) {

  const { removeFromCart, addToCart } = useCart()

  return (
    <div className="rounded-xl grid-cols-[1fr_25rem_repeat(3,_1fr)] border-2 my-4 h-32 border-slate-300 grid ">
      <div className=" flex justify-center text-center items-center">
        <img
          className=" h-24 w-24 bg-cover rounded-full bg-black"
          src={product.picture}
          alt="Imagen carrito"
        />
      </div>
      <div className="flex items-center w-full">
        <div className="flex items-center gap-x-10">
          <h4 className=" text-xl font-semibold block">{product.nombre}</h4>
          <button className="text-white h-12 w-20 flex justify-center items-center rounded-lg focus:ring-4 focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-red-300" onClick={() => removeFromCart(product)}><BsCartXFill /></button>
          <button className="text-white h-12 w-20 flex justify-center items-center rounded-lg focus:ring-4 focus:outline-none bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 " onClick={() => addToCart(product)}><FaCartPlus /></button>
        </div>
      </div>
      <div className=" flex justify-end text-center items-center text-xl font-semibold">
        {product.quantity}
      </div>
      <div className=" flex justify-end text-center items-center text-xl font-semibold">
        $ {product.precio}
      </div>
      <div className=" flex justify-end text-center items-center mr-2 text-xl font-semibold">
        $ {product.precio * product.quantity}
      </div>
    </div>
  )
}