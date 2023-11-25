import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Components/Product";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get("https://soul-server.vercel.app/Product/gettingProductAll")
      const { data } = response
      setProducts(data)
    } catch (e) {
      console.error("Error fetching data:", e);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <main
      className={`h-[38rem] w-11/12 mx-auto my-8 overflow-x-hidden ${loading
        ? "overflow-y-hidden flex items-center justify-center"
        : "grid sm:grid-cols-3 grid-cols-1 gap-4 overflow-y-scroll"
        }`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
      ) : (
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))
      )}
      {/* 
      {loading ? (
        <div className="animate-spin rounded-[50%] h-20 w-20 border-solid border-4 border-[#f3f3f3] border-t-4 border-t-black" />
      ) : (
        products.map((product) => (
          <ProductsItem key={product._id} product={product} />
        ))
      )} */}
    </main>
  );
}
