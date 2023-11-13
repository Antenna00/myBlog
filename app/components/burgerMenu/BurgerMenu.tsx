"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';

function BurgerMenu() {

    const [open, setOpen] = useState(false);

    const menuToggle = () => {
      setOpen(open ? false : true);
    }

  return (
    <div className='hidden lg:flex'>

      {/* Burger Wrapper */}
      <div className=" flex-col hidden lg:flex">

        {/* Button */}
        <div className="hidden lg:flex w-[40px] h-[40px] flex-col bg-cyan-500 rounded-full justify-center
          cursor-pointer items-center absolute right-20 top-[0.7rem] z-20 
          hover:scale-150 transition-all ease-in-out 
          " onClick={() => menuToggle()}>
            <div className="w-[20px] h-[16px] flex justify-between flex-col">
              <div className=" w-[100%] h-[2px] bg-black"></div>
              <div className=" w-[100%] h-[2px] bg-black"></div>
              <div className=" w-[100%] h-[2px] bg-black"></div>
            </div>
          </div>


        {/*OVERLAY*/}
        <div className={`${open ? "h-[70vh] w-[60vw]" : "h-0 w-0"} flex absolute overflow-hidden right-[7rem] bg-gray-500 
        rounded-xl rounded-bl-[50px] transition-all duration-300 justify-center items-center cursor-default z-10`}>
            <div>ss</div>
            {/* add anchobi image afterwards */}
            <div className="absolute flex flex-col h-[70vw] w-[50vw] gap-10 text-4xl ">
              <Link href="/" className="ml-4 border-2 w-max px-4 hover:scale-150 transition-all duration-300">Homepage</Link>
              <Link href="/" className="ml-10 border-2 w-max px-4 hover:scale-150 transition-all duration-300">Contact</Link>
              <Link href="/" className="ml-16 border-2 w-max px-4 hover:scale-150 transition-all duration-300">About</Link>

              {/* auth state needs to be passed */}
              <Link href="/"></Link>
            </div>

        </div>
      </div>
      
    </div>
  )
}

export default BurgerMenu