import React from 'react'

function Product({ nombre, precio, cantidad_stock, categoria, descripcion }) {
  return (

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img className="p-8 rounded-t-lg" src="https://www.ktronix.com/medias/194253423232-001-820Wx820H?context=bWFzdGVyfGltYWdlc3wyOTU1MjV8aW1hZ2UvanBlZ3xhRGc1TDJoa1pDOHhNelF4TXpReU5qazFOREkzTUM4eE9UUXlOVE0wTWpNeU16SmZNREF4WHpneU1GZDRPREl3U0F8OGFhODRjNzVhM2UzYTVhMGYwYTA3ZTlkNzYzMDk1ZjNlMGEyOWUxMzUzMjk0MThkODZiYjg4MjcyNmU2N2IxNg" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 ">{nombre}</h5>
        </a>
        <p className='text-justify text-base text-gray-900 mt-3 mb-5 '>{descripcion}</p>
        <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-2.5 py-0.5 rounded  ms-3">{cantidad_stock} Unidades</span>
            <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-2.5 py-0.5 rounded  ms-3">{categoria}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 ">$ {precio}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</a>
        </div>
    </div>
</div>

  )
}

export default Product