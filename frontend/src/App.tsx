import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import { CartProvider } from "./contexts/CartContext";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartProvider>
      <div className="flex flex-col justify-between min-h-[100vh]">
        <Navbar toggleCartOpen={() => setIsCartOpen((prev) => !prev)} />
        <ProductGrid />
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
