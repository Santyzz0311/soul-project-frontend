import { useCart } from "../hooks/useCart"
import { FaCartPlus } from "react-icons/fa6";
import { BsCartDashFill } from "react-icons/bs";

function Product({ product }) {

	const { cart, addToCart, removeFromCart } = useCart()
	const checkProductIncart = eachProduct => {
		return cart.some(item => item._id === eachProduct._id)
	}

	return (
		<div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow ">
			<a href="#" className='flex justify-center '>
				{product.picture ? <img className="p-8 rounded-t-lg max-h-96" src={product.picture} alt="product image" /> : <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary my-5" />}
			</a>
			<div className="px-5 pb-5">
				<a href="#">
					<h5 className="text-2xl font-semibold tracking-tight text-gray-900 ">{product.nombre}</h5>
				</a>
				<p className='text-justify text-base text-gray-900 mt-3 mb-5 '>{product.descripcion}</p>
				<div className="flex items-center mt-2.5 mb-5">
					<span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-2.5 py-0.5 rounded  ms-3">{product.cantidad_stock} Unidades</span>
					<span className="bg-amber-100 text-amber-800 text-sm font-semibold px-2.5 py-0.5 rounded  ms-3">{product.categoria}</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 ">$ {product.precio}</span>
					<button onClick={() =>
						checkProductIncart(product)
							? removeFromCart(product)
							: addToCart(product)
					} className={`text-white ${checkProductIncart(product) ? 'bg-red-700 hover:bg-red-800 focus:ring-red-300' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
						{
							checkProductIncart(product)
								? <BsCartDashFill />
								: <FaCartPlus />
						}
					</button>
				</div>
			</div>
		</div>

	)
}

export default Product