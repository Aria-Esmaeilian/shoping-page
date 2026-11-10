"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { CartItem } from "@/types/cart";

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  updateQuantity: (
    id: number,
    size: string,
    color: string,
    quantity: number,
  ) => void;
  clearCart: () => void;
  totalItems: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("shop-cart");

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      localStorage.removeItem("shop-cart");
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("shop-cart", JSON.stringify(cart));
    }
  }, [cart, loaded]);

  const addToCart = (item: CartItem) => {
    setCart((previous) => {
      const existing = previous.find(
        (product) =>
          product.id === item.id &&
          product.size === item.size &&
          product.color === item.color,
      );

      if (existing) {
        return previous.map((product) =>
          product.id === item.id &&
          product.size === item.size &&
          product.color === item.color
            ? {
                ...product,
                quantity: product.quantity + item.quantity,
              }
            : product,
        );
      }

      return [...previous, item];
    });
  };

  const removeFromCart = (id: number, size: string, color: string) => {
    setCart((previous) =>
      previous.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color),
      ),
    );
  };

  const updateQuantity = (
    id: number,
    size: string,
    color: string,
    quantity: number,
  ) => {
    if (quantity < 1) return;

    setCart((previous) =>
      previous.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
