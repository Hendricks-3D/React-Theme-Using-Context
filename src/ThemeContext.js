import { createContext, useContext, useState } from "react";

// 1. Create the context
export const ThemeContext = createContext(undefined);

// 2. Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. useTheme hook returns theme and toggleTheme
export const useTheme = () => useContext(ThemeContext);
