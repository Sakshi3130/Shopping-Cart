export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ButtonProps{
    title:string;
    onClick?:()=>void;
    className?:string;
}

export interface QuantitySelectorProps{
    quantity: number;
    onIncrease?: ()=>void;
    onDecrease?: ()=>void; 
}

export interface CartItem extends Product{
    quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateCartItem: (product:CartItem) => void;
  clearCart: () => void;
  totalPrice: number;
}

export interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface NotificationProps {
  message: string;
  onClose: () => void;
};