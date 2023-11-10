"use client"
import React, { useEffect, useState } from 'react'
import { useContext, ReactNode } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

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
    return null; // or some other fallback behavior
  }

  const {theme, setTheme} = contextValue;

  useEffect(() => {
    setMounted(true);
  }, [])

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && theme !== storedTheme) {

      setTheme((theme) => (theme === storedTheme ? theme : storedTheme));
    }
  }, []);
  
    return (
      <div className={theme}>{children}</div>
    )
  
}

export default ThemeProvider