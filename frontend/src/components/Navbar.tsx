import { useCart } from "../contexts/useContexts";
import { Cart } from "./Svg";

const Navbar = ({ toggleCartOpen }: { toggleCartOpen: () => void }) => {
  const { cart } = useCart();
  return (
    <nav className="flex justify-between px-4 items-center h-[80px] border border-b-[#D3D3D3]">
      <div className="flex gap justify-center items-center">
        <img src="logo.png" alt="logo" className="h-13 w-12"/>
        <h1 className="text-[30px] font-bold">ShoppingCart</h1>
      </div>
      <div
        onClick={toggleCartOpen}
        className="relative flex justify-center items-center p-2 rounded-full h-10 w-10 border border-[#dedddd] cursor-pointer hover:shadow-lg transition"
      >
        <Cart scale={0.035} />

        {cart.length > 0 && (
          <span className="absolute -top-[1px] right-0.5 bg-red-600 text-white text-[8px] font-bold rounded-full h-3 w-3 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
