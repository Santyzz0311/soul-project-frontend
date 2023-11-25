import CartItem from "../Components/CartItem";
import { useCart } from "../hooks/useCart";

export default function CartPage() {

  const { cart, clearCart } = useCart()

  const totalPrice = products => {
    let valorTotal = 0

    products.forEach(({ quantity, precio }) => {
      valorTotal += quantity * precio
    });

    return valorTotal;
  }

  return (
    <>
      <div className="mx-auto container my-5">
        <h2 className=" uppercase text-4xl text-gray-900 my-3 font-bold">
          Tu Carrito
        </h2>
      </div>
      <div className="h-12 bg-stone-800 grid grid-cols-6 uppercase text-lg text-white">
        <div className="flex items-center justify-center text-center col-span-3 font-semibold">
          Productos
        </div>
        <div className="flex items-center justify-center text-center font-semibold">
          Cantidad
        </div>
        <div className="flex items-center justify-center text-center font-semibold">
          Precio
        </div>
        <div className="flex items-center justify-center text-center font-semibold">
          Total
        </div>
      </div>

      <div className="mx-20">
        {
          cart.map(product => (
            <CartItem
              key={product._id}
              product={product}
            />
          ))
        }
      </div>

      <div className="h-12 bg-stone-800 uppercase text-xl text-white">
        <div className="pl-48 font-semibold flex items-center text-center pt-2">
          Finaliza tu compra
        </div>
      </div>
      <div className="mx-auto container mt-8">
        <div className="rounded-xl grid-cols-2 border-2 my-4 h-24 border-slate-300 grid uppercase text-stone-800 font-semibold px-24">
          <div className=" flex items-center text-xl">
            total a pagar
          </div>
          <div className=" flex justify-end items-center text-2xl">
            $ {totalPrice(cart)}
          </div>
        </div>
        <div className=" flex justify-center">
          <button className=" bg-stone-800 text-white uppercase font-semibold text-lg rounded-lg px-6 py-3">Finalizar compra</button>
        </div>
      </div>
    </>
  );
}
