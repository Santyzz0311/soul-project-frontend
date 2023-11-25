import React from 'react'

function Product({ nombre, precio, cantidad_stock, categoria, descripcion, picture }) {
    console.log(picture)
  return (

<div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#" className='flex justify-center '>
        {picture ? <img className="p-8 rounded-t-lg max-h-96" src={picture} alt="product image" /> : <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary my-5" />}
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