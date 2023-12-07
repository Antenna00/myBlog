"use client"

import React, { useEffect, useState } from 'react'
import { createContext, ReactNode } from 'react'

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getFormLocalStorage = () => {
  //having window defined means it is CSR
  if (typeof window !== 'undefined' && window.localStorage) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState(() => {
    const storedTheme = getFormLocalStorage();
    return storedTheme || "light"
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const storedTheme = getFormLocalStorage();
    if (storedTheme) {
      setTheme(storedTheme);
    }
    console.log("ThemeContextProvider useEffect: Initial theme set to", storedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};