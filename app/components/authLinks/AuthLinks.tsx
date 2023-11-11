
"use client"

import React, { useState } from "react";
import Link from "next/link";

function AuthLinks() {
  const status = "notauthenticated";
  const [open, setOpen] = useState(false);

  const menuToggle = () => {
    setOpen(open ? false : true);
  }
  
  return (
    <>
      {status === "notauthenticated" ? (<Link href="/login">Login</Link>
      ) : (
        <>
            <Link href="/write">Write</Link>
            <span className="flex gap-[10px] cursor-pointer"> Logout </span>
        </>
      )}
      {/* Burger */}
      <div className=" flex-col hidden lg:flex">
        <div>
        <div className="hidden lg:flex w-[40px] h-[40px] flex-col bg-yellow-200 rounded-full justify-center
        cursor-pointer items-center mt-2 absolute right-10 top-3 z-10 
        hover:scale-150 transition-all ease-in-out
        " onClick={() => menuToggle()}>
          <div className="w-[20px] h-[16px] flex justify-between flex-col">
            <div className=" w-[100%] h-[2px] bg-black"></div>
            <div className=" w-[100%] h-[2px] bg-black"></div>
            <div className=" w-[100%] h-[2px] bg-black"></div>
          </div>

          
        </div>
        </div>
        {/* if opened */}
        {/* it runs after the value changed */}
        <div className={`${open ? "" : "anime-out w-0 h-0"} anime-in animate-spin transition-all flex flex-col overflow-hidden absolute w-[1400px] h-[1400px] -right-[590px] -top-[590px] bg-green-200/40 rounded-full`}>
              {/* inner circle */}
            <div className=" w-[500px] h-[500px] absolute flex flex-col left-[300px] top-[800px] bg-blue-400 text-lg"> 
              <Link href="/">ss</Link>
              <Link href="/">ss</Link>
              <Link href="/">ss</Link>
              <Link href="/">ss</Link>
              <Link href="/">ss</Link>
              <Link href="/">ss</Link>
              <Link href="/">ss</Link>
              <Link href="/">ss</Link>
              <Link href="/">ss</Link>
            </div>

        </div>
        
      </div>

    </>
  );
}

export default AuthLinks;
