import { createContext, useState } from "react";

export const ThemeContext = createContext(); // creates a empty box

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const handleToggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
