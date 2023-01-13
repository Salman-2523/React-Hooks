import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartContextProvider } from "./contexts/CartContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CartContextProvider>
      <App />
      </CartContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
