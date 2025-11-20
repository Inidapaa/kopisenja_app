import { useState, useEffect } from "react";
import { getCart, CART_UPDATED_EVENT } from "../utils/cartStorage";

export function useCartCount() {
  const [cartCount, setCartCount] = useState(() => {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  });

  const updateCartCount = () => {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();
    // Listen untuk perubahan di localStorage
    const handleStorageChange = () => {
      updateCartCount();
    };
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(CART_UPDATED_EVENT, handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(CART_UPDATED_EVENT, handleStorageChange);
    };
  }, []);

  return { cartCount, updateCartCount };
}
