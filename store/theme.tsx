"use client";
import { createContext, useContext, useEffect, useState } from "react";

const modes = ["light", "dark"];

export const ThemeContext = createContext({
  modes,
  theme: "dark",
  setTheme: (theme: typeof modes[number]) => {},
});

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, modes }}>
      {children}
    </ThemeContext.Provider>
  );
}
