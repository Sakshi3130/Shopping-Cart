import { useState } from "react";
import { useCart } from "../contexts/useContexts";
import type { Product } from "../types";
import { Button } from "./Button";
import Notification from "./Notification";

const ProductCard = ({ product }: { product: Product }) => {
  const [notification, setNotification] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setNotification(true);
  };

  return (
    <div className="border border-[#eeeeee] p-4 max-[361px]:w-[140px] max-[391px]:w-[155px] max-[431px]:w-[170px] min-[539px]:w-[220px] rounded-[15px] shadow-lg">
      <div className="flex justify-center items-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-32 h-32 object-cover mb-4 rounded-[10px]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row justify-between">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 mb-4">₹{product.price}</p>
        </div>

        <Button title="Add To Cart" onClick={handleAddToCart} />
      </div>
      {notification && (
        <Notification
          message={`${product.name} added to cart`}
          onClose={() => setNotification(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
