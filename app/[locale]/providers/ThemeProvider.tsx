"use client"
import React, { useEffect, useState } from 'react'
import { useContext, ReactNode } from "react";
import { ThemeContext } from "@/app/[locale]/context/ThemeContext";

type ThemeContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    toggle: () => void;
  };

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const contextValue = useContext<ThemeContextType | undefined>(ThemeContext);
  const [mounted, setMounted] = useState(false);
  
  //Context can be undefined so you have to check here
  if (!contextValue) {
    // Handle the case where the context value is undefined
    return  <div className={`dark overflow-hidden`}>{children}</div>; // or some other fallback behavior
  }

  const {theme, setTheme} = contextValue;


  useEffect(() => {
    document.body.classList.add(theme);
    setMounted(true);

    // Remove previous theme class on unmount
    return () => document.body.classList.remove(theme);
  }, [theme]);


    return (
      <div className={`${theme} overflow-hidden`}>{children}</div>
    )
  
}

export default ThemeProvider