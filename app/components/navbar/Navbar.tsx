import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

function Navbar() {

  return (
    <div className="flex justify-between mx-0 px-0 items-center gap-7">
      {/* Socials */}
      <div className="flex flex-1 gap-10 cursor-pointer items-center lg:hidden">
        <div className="flex gap-[10px] lg:hidden">
        <Image src="/facebook.png" alt="" width={24} height={24}></Image>
        <Image src="/linkedin.png" alt="" width={24} height={24}></Image>
        <Image src="/github.png" alt="" width={24} height={24}></Image>
        </div>
        <div className="flex lg:hidden">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex flex-1 font-sans justify-center lg:justify-start text-4xl xl:text-[25px] lg:text-[18px] md:text-[15px] sm:text-sm font-bold items-center">
        <p className="flex relative text-center items-center"> Antenna's Transmission </p>
      </div>

      {/* Links */}
      <div className="flex gap-[10px] flex-1 justify-between cursor-pointer items-center xl:text-[15px] lg:text-[14px] md:text-[12px]">
        <div className="hidden lg:flex">
        <ThemeToggle />
        </div>
        <Link href="/" className="lg:hidden">Homepage</Link>
        <Link href="/" className="lg:hidden">Contact</Link>
        <Link href="/" className="lg:hidden">About</Link>
        <AuthLinks />
        
      </div>
    </div>
  );
}

export default Navbar;
