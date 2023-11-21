import { useState } from "react";
import { products as initialProducts } from "../mocks/products.json";
import ProductsItem from "../Components/ProductsItem";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [products] = useState(initialProducts);

  return (
    <main
      className={`h-[32rem] w-11/12 mx-auto my-8 overflow-x-hidden ${loading
        ? "overflow-y-hidden flex items-center justify-center"
        : "grid grid-cols-3 gap-4 overflow-y-scroll"
        }`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
      ) : (
        products.map((product) => (
          <ProductsItem key={product.id} {...product} />
        ))
      )}
    </main>
  );
}
