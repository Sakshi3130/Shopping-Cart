import { useState } from "react";
import { useCart } from "../contexts/useContexts";
import type { CartModalProps } from "../types";
import { Button } from "./Button";
import QuantitySelector from "./QuantitySelector";
import Notification from "./Notification";

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { cart, updateCartItem, removeFromCart, totalPrice, clearCart } =
    useCart();
  const [showNotification, setShowNotification] = useState(false);
  if (!isOpen) return null;

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:8000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });
      await res.json();
      setShowNotification(true);
      clearCart();
      setShowNotification(true);

      clearCart();

      setTimeout(() => {
        setShowNotification(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90vw] md:w-120 min-h-[50vh] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <Button
            title="X"
            className="p-3 w-[30px] h-[30px] rounded-[10px] text-[15px] bg-gray-300 text-gray-800 border border-text-gray-800"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col">
          {cart.length === 0 ? (
            <p className="text-center text-[20px] mt-[20%]">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center gap-5"
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="max-w-15 h-15 object-cover rounded-[10px]"
                      />
                      <div className="max-[500px]:w-[70px]">
                        <h3 className="font-semibold truncate">{item.name}</h3>
                        <p className="text-gray-600 truncate">₹{item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <QuantitySelector
                        quantity={item.quantity}
                        onDecrease={() => {
                          updateCartItem({
                            ...item,
                            quantity: item.quantity - 1,
                          });
                          if (!(item.quantity - 1)) {
                            removeFromCart(item.id);
                          }
                        }}
                        onIncrease={() => {
                          updateCartItem({
                            ...item,
                            quantity: item.quantity + 1,
                          });
                        }}
                      />
                      <Button
                        title="X"
                        onClick={() => removeFromCart(item.id)}
                        className="p-3 w-[30px] h-[30px] rounded-[12px] text-[15px] bg-black text-white border-1 border-transparent hover:bg-white hover:text-black hover:border-black "
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-4 font-bold">Total: ₹{totalPrice}</div>
              <div className="flex justify-between gap-4">
                <Button title="Checkout" onClick={handleCheckout} />
                <Button
                  title="Clear Cart"
                  onClick={clearCart}
                  className="rounded-full border-[2px] text-[14px] font-[500] h-[35px] w-[120px] hover:bg-amber-500 hover:text-white transition"
                />
              </div>
            </>
          )}
        </div>
      </div>
      {showNotification && (
        <Notification
          message="Checkout successful!"
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default CartModal;
