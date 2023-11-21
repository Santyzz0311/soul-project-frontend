export default function ProductsItem({ nombre, precio, cantidad_stock, categoria, descripcion }) {
  return (
    <div className="w-full max-w-sm border h-72 border-gray-200 rounded-lg shadow bg-secondary ">
      <div className="px-5 pb-5 flex flex-col justify-around h-full">
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{nombre} <span className="text-sm tracking-tight">({categoria})</span></h2>
        <div className="flex items-center gap-x-4 mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3 inline-block flex-1 text-center items-center">Stock {cantidad_stock}</span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">{descripcion}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${precio}</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
        </div>
      </div>
    </div>

  )
}
