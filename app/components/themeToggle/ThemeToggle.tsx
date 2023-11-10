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
    <div className="bg-black relative flex w-[40px] h-[20px] 
    rounded-[50px] items-center justify-between" onClick={() => toggle()}>
      <Image src="/moon.png" alt="" width={14} height={14}></Image>
      {/* ball */}
      <div className="bg-white absolute w-[15px] h-[15px] rounded-[50%] left-[1px]"></div>
      <Image src="/sun.png" alt="" width={14} height={14}></Image>
    </div>
  );
}

export default ThemeToggle;
