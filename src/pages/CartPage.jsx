export default function CartPage() {
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
        <div className="rounded-xl grid-cols-5 border-2 my-4 h-32 border-slate-300 grid ">
          <div className=" flex justify-center text-center items-center">
            <img
              className=" h-24 w-24 bg-cover rounded-full bg-black"
              src="https://leasein.pe/wp-content/uploads/2023/02/macbookpro-2021-1024x667.webp"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <div>
              <h4 className=" text-xl font-semibold block">Producto 1</h4>
              <p className=" text-base block">Proveedor 21312 S.A.S</p>
            </div>
          </div>
          <div className=" flex justify-end text-center items-center text-xl font-semibold">
            2
          </div>
          <div className=" flex justify-end text-center items-center mr-8 text-xl font-semibold">
            $ 2
          </div>
          <div className=" flex justify-end text-center items-center mr-16 text-xl font-semibold">
            $ 4
          </div>
        </div>

        <div className="rounded-xl grid-cols-5 border-2 my-4 h-32 border-slate-300 grid ">
          <div className=" flex justify-center text-center items-center">
            <img
              className=" h-24 w-24 bg-cover rounded-full bg-black"
              src="https://leasein.pe/wp-content/uploads/2023/02/macbookpro-2021-1024x667.webp"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <div>
              <h4 className=" text-xl font-semibold block">Producto 1</h4>
              <p className=" text-base block">Proveedor 21312 S.A.S</p>
            </div>
          </div>
          <div className=" flex justify-end text-center items-center text-xl font-semibold">
            2
          </div>
          <div className=" flex justify-end text-center items-center mr-8 text-xl font-semibold">
            $ 2
          </div>
          <div className=" flex justify-end text-center items-center mr-16 text-xl font-semibold">
            $ 4
          </div>
        </div>
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
                $ 4562.2
            </div>
        </div>
        <div className=" flex justify-center">
            <button className=" bg-stone-800 text-white uppercase font-semibold text-lg rounded-lg px-6 py-3">Finalizar compra</button>
        </div>
      </div>
    </>
  );
}
