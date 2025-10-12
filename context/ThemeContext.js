import { createContext, useState } from "react";
import { Appearance } from "react-native";

export const ThemeContext = createContext();

 const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    Appearance.getColorScheme() === "dark" ? "dark" : "light"
  );
  const toggleTheme = () => {
    setTheme((state) => (state === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;