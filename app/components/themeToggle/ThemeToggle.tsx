"use client"

import React, { useContext, useEffect } from "react";
import Image from "next/image"
import { ThemeContext } from "@/app/context/ThemeContext";

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggle: () => void;
};

function ThemeToggle() {

  const contextValue = useContext<ThemeContextType | undefined>(ThemeContext);
  
  //Context can be undefined so you have to check here
  if (!contextValue) {
    // Handle the case where the context value is undefined
    return null; // or some other fallback behavior
  }

  const {theme, toggle} = contextValue;

  return (
    <div className=" relative flex w-[40px] h-[20px]
    rounded-[50px] items-center justify-between animate-pulse hover:border-red-700 border-[1px]" 
    style={theme === "dark" ? {background:"white"} : {right:1, background:"#0f172a"}} onClick={() => toggle()}>
      <Image src="/moon.png" alt="" width={12} height={12} className=" pl-1"></Image>
      {/* ball */}
      <div className={`absolute w-[15px] h-[15px] rounded-[50%] 
      ${theme === "dark" ? "left-[1px] translate-x-0 duration-300 ease-in-out bg-gray-600" : "bg-white translate-x-[21.5px] duration-300 ease-in-out"}`}></div>
      <Image src="/sun.png" alt="" width={12} height={12} className=" pr-1"></Image>
    </div>
  );
}

export default ThemeToggle;

//style={theme === "dark" ? {transition:"all 3s", left:1, background:"black"} : {transition:"all 3s", right:1, background:"white"}}