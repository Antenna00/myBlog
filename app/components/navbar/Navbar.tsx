import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

function Navbar() {
  return (
    <div className="flex justify-between mx-0 px-0 bg-red-200 items-center">
      {/* Socials */}
      <div className="flex gap-[10px] flex-1 cursor-pointer">
        <Image src="/facebook.png" alt="" width={24} height={24}></Image>
        <Image src="/linkedin.png" alt="" width={24} height={24}></Image>
        <Image src="/github.png" alt="" width={24} height={24}></Image>
      </div>

      <div className="flex flex-1 bg-blue-200 justify-center text-4xl font-bold items-center">
        <p> myBlog </p>
      </div>

      {/* Links */}
      <div className="flex gap-[10px] flex-1 justify-between cursor-pointer items-center">
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
