"use client"

import React, { useEffect, useState } from 'react'
import { createContext, ReactNode } from 'react'

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getFromLocalStorage = () => {
  //having window defined means it is CSR
  if (typeof window !== 'undefined' && window.localStorage) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  // Return default theme on server-side
  return "light";
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState(getFromLocalStorage());

  const toggle = () => {
    if(theme === "dark") {
      setTheme("light")
      console.log("It is light")
    }else if(theme === "light") {
      setTheme("dark");
      console.log("It is dark")
    }
  };

  useEffect(() => {
    console.log(theme)
    
    // Update theme in localStorage on client-side
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
      setTheme(theme);
    }
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};