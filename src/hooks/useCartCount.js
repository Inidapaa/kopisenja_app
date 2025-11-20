import { useState, useEffect } from "react";
import { getCart } from "../utils/cartStorage";

export function useCartCount() {
  const [cartCount, setCartCount] = useState(0);

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
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return { cartCount, updateCartCount };
}
