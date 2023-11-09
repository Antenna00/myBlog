"use client"

import React, { useState } from 'react'
import { createContext, ReactNode } from 'react'

type ThemeContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  };

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getFormLocalStorage = () => {
    //having window = CSR
    //having global = SSR
    if(typeof window !== undefined) {
        const value = localStorage.getItem("theme");
        return value || "Light";
    }
}

type ThemeContextProviderProps = {
    children: ReactNode;
  };

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState("light");
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };