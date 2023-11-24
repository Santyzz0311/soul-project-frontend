import { useEffect, useState } from "react";
import { products as initialProducts } from "../mocks/products.json";
import ProductsItem from "../Components/ProductsItem";
import axios from "axios";
import Product from "../Components/Product";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const getProducts = async() => {
    try {
      axios.get("https://soul-server.vercel.app/Product/gettingProductAll").then((res) => {
        setProducts(res.data)
      }).catch((err) => {
        console.log(err)
      })
    } catch (error) {
      console.log(":(")
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
          <Product key={product.id} {...product} />
        ))
      )}
{/* 
      {loading ? (
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
      ) : (
        products.map((product) => (
          <ProductsItem key={product.id} {...product} />
        ))
      )} */}
    </main>
  );
}
