import { useEffect, useState } from "react";
import type { Product } from "../types";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8000/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log("Error occured", err);
      }
    };

    fetchProducts().then();
  }, []);

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      
    </div>
  );
};

export default ProductGrid;
