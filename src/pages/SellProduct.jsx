import { IoPersonSharp } from "react-icons/io5";
import { MdPriceChange } from "react-icons/md";
import { CgShutterstock } from "react-icons/cg";
import { BiSolidCategory } from "react-icons/bi";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";


export default function SellProduct() {

  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    cantidad_stock: "",
    categoria: "",
    descripcion: ""
  })

  const [modalStates, setModalStates] = useState({
    state: false,
    description: ""
  })

  const handleChange = (e, key) => {
    setFormData(prevState => ({ ...prevState, [key]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.nombre === "") return

    if (formData.precio === "") return

    if (formData.cantidad_stock === "") return

    if (formData.categoria === "") return

    if (formData.descripcion === "") return

    try {
      const newValues = {
        ...formData,
        cantidad_stock: parseInt(formData.cantidad_stock),
        precio: parseInt(formData.precio)
      }

      const response = await axios.post("https://soul-server.vercel.app/Product/createProduct", newValues)

      setModalStates({
        state: true,
        description: response.data
      })
    } catch (e) {
      console.log("D:", e);
    } finally {
      setFormData({
        nombre: "",
        precio: "",
        cantidad_stock: "",
        categoria: "",
        descripcion: ""
      })
    }
  }

  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="w-full flex flex-col md:flex-row px-8 md:mx-0">
        <div className="w-full">
          <h2 className="text-center text-4xl uppercase font-adventPro py-6">Venda su Producto</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 grid-rows-1 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <div className="w-full relative">
                    <label htmlFor="name" className="absolute top-1/2 -translate-y-1/2 flex border-r-[1px] border-[#979797] px-3"><IoPersonSharp /></label>
                    <input
                      className={`outline-none bg-[#f4f4f4] text-black rounded-md w-full p-3 pl-16 placeholder:text-black border-[3px] `}
                      type="text"
                      name="nombre"
                      id="nombre"
                      placeholder="Nombre del producto"
                      value={formData.nombre}
                      onChange={(e) => handleChange(e, "nombre")}
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full relative">
                    <label htmlFor="address" className="absolute top-1/2 -translate-y-1/2 flex border-r-[1px] border-[#979797] px-3"><MdPriceChange /></label>
                    <input
                      className={`outline-none bg-[#f4f4f4] text-black rounded-md w-full p-3 pl-16 placeholder:text-black border-[3px]`}
                      type="text"
                      name="precio"
                      id="precio"
                      placeholder="Precio"
                      value={formData.precio}
                      onChange={(e) => handleChange(e, "precio")}
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full relative">
                    <label htmlFor="email" className="absolute top-1/2 -translate-y-1/2 flex border-r-[1px] border-[#979797] px-3"><CgShutterstock /></label>
                    <input
                      className={`outline-none bg-[#f4f4f4] text-black rounded-md w-full p-3 pl-16 placeholder:text-black border-[3px]`}
                      type="text"
                      name="cantidad_stock"
                      id="cantidad_stock"
                      placeholder="Ingrese el stock que tiene de este producto"
                      value={formData.cantidad_stock}
                      onChange={(e) => handleChange(e, "cantidad_stock")}
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full relative">
                    <label htmlFor="number" className="absolute top-1/2 -translate-y-1/2 flex border-r-[1px] border-[#979797] px-3"><BiSolidCategory /></label>
                    <input
                      className={`outline-none bg-[#f4f4f4] text-black rounded-md w-full p-3 pl-16 placeholder:text-black border-[3px] `}
                      type="text"
                      name="categoria"
                      id="categoria"
                      placeholder="Categoría"
                      value={formData.categoria}
                      onChange={(e) => handleChange(e, "categoria")}
                    />
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  className={`outline-none bg-[#f4f4f4] text-black resize-y rounded-md w-full placeholder:text-black p-4 border-[3px]`}
                  placeholder="Ingresa una descrición breve de tu producto"
                  name="descripcion"
                  id="descripcion"
                  value={formData.descripcion}
                  onChange={(e) => handleChange(e, "descripcion")}
                ></textarea>
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
      {
        modalStates.state && (
          <div className="absolute inset-0 h-full w-full backdrop-blur-lg flex items-center justify-center gap-x-4 font-extrabold">
            Elemento registrado con éxito
            <button onClick={() => setModalStates({ state: false, description: "" })}>
              <FaX />
            </button>
          </div>
        )
      }
    </div >
  )
}
