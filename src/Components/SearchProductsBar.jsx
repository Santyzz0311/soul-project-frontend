export default function SearchProductsBar({ classname }) {
  const newClassName = classname ? classname : 'w-full px-4 py-2 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-200 text-black'

  return (
    <>
      <input type="text" className={newClassName} placeholder="Televisores, teléfonos..." />
    </>
  )
}
