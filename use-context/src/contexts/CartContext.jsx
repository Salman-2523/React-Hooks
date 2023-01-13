import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleCartCount = () => {
    setCartCount((prevCartCount) => prevCartCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, handleCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
