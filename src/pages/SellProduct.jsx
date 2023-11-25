export default function SellProduct() {

  //   POST -> https://soul-server.vercel.app/Product/createProduct
  // REQUEST BODY --> { nombre, precio, cantidad_stock, categoria, descripcion }
  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="w-full flex flex-col md:flex-row px-8 md:mx-0">
        <div className="w-full">
          <h2 className="text-left text-4xl uppercase font-adventPro py-6">Contáctenos</h2>
          <form>
            <div className="grid grid-cols-1 grid-rows-1 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <div className="w-full relative">
                    <label htmlFor="name" className="absolute top-1/2 -translate-y-1/2 flex border-r-[1px] border-[#979797] px-3"></label>
                    <input
                      className={`outline-none bg-[#f4f4f4] text-black rounded-md w-full p-3 pl-16 placeholder:text-black border-[3px] `}
                      type="text"
                      name="name"
                      id="input-name"
                      placeholder="Nombre"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full relative">
                    <label htmlFor="address" className="absolute top-1/2 -translate-y-1/2 flex border-r-[1px] border-[#979797] px-3"></label>
                    <input
                      className={`outline-none bg-[#f4f4f4] text-black rounded-md w-full p-3 pl-16 placeholder:text-black border-[3px] `}
                      type="text"
                      name="address"
                      id="input-address"
                      placeholder="Ubicación"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full relative">
                    <label htmlFor="email" className="absolute top-1/2 -translate-y-1/2 flex border-r-[1px] border-[#979797] px-3"></label>
                    <input
                      className={`outline-none bg-[#f4f4f4] text-black rounded-md w-full p-3 pl-16 placeholder:text-black border-[3px]`}
                      type="email"
                      name="email"
                      id="input-address"
                      placeholder="Correo Electrónico"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full relative">
                    <label htmlFor="number" className="absolute top-1/2 -translate-y-1/2 flex border-r-[1px] border-[#979797] px-3"></label>
                    <input
                      className={`outline-none bg-[#f4f4f4] text-black rounded-md w-full p-3 pl-16 placeholder:text-black border-[3px] `}
                      type="text"
                      name="number"
                      id="input-number"
                      placeholder="Teléfono"
                    />
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  className={`outline-none bg-[#f4f4f4] text-black resize-y rounded-md w-full placeholder:text-black p-4 border-[3px]`}
                  placeholder="Cuéntanos, ¿cómo podemos ayudarte?"
                  name="textarea"
                  id="textarea-form"
                ></textarea>
              </div>
              <div>
                <div className={`flex gap-2 rounded border-[3px]`}>
                  <input
                    type="checkbox"
                    name="terms"
                    id="input-checkbox"
                    className='cursor-pointer w-5 h-5 rounded-md mt-1 ml-2'
                  />
                  <label htmlFor="input-checkbox" className="text-left cursor-pointer">
                    Acepto el tratamiento que  le dará a mis datos
                    personales, de acuerdo con la política de privacidad, las
                    cuales he leído previamente.
                  </label>
                </div>
              </div>
              <div className="mx-auto flex">
                <button type="submit" className="bg-[#f4f4f4] rounded-md font-medium text-xl text-black py-1 px-16 hover:bg-grey-800">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
