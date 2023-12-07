import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import dynamic from "next/dynamic";
const SetTheme = dynamic(() => import('../setTheme/SetTheme'), {
  ssr: false,
});
function Navbar() {
//TODO change button to link and set the link to the SNS
  return (
    <div className="flex justify-between items-center gap-7 overflow-hidden">
      {/* Socials */}
      <div className="flex flex-1 gap-10 items-center lg:hidden">
        <div className="flex gap-[10px] lg:hidden">
        <button>
          <Image className="hover:scale-150 hover:translate-x-5 hover:translate-y-5 hover:absolute transition-all duration-300" 
          src="/facebook.png" alt="" width={24} height={24}></Image>
        </button>
        <button>
        <Image src="/linkedin.png" alt="" width={24} height={24}></Image>
        </button>
        <button>
        <Image src="/github.png" alt="" width={24} height={24}></Image>
        </button>
        </div>
        <div className="flex lg:hidden">

          <SetTheme />

        </div>
      </div>

      <div className="flex flex-1 font-sans lg:flex-initial justify-center lg:justify-start text-4xl xl:text-[25px] lg:text-[18px] md:text-[15px] sm:text-sm font-bold items-center">
        <p className="flex relative text-center items-center"> Antenna's Transmission </p>
      </div>

      {/* Links */}
      <div className="flex gap-[10px] flex-1 lg:flex justify-between cursor-pointer items-center xl:text-[15px] lg:text-[14px] md:text-[12px]">
        <div className="hidden lg:flex">
        <ThemeToggle />
        </div>
        <Link href="/" className="lg:hidden">Homepage</Link>
        <Link href="/contact" className="lg:hidden">Contact</Link>
        <Link href="/about" className="lg:hidden">About</Link>

        <AuthLinks />
        <BurgerMenu />
        
      </div>
    </div>
  );
}

export default Navbar;
