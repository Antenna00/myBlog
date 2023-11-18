import Link from "next/link";
import React from "react";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";

function Menu() {
  return (
    <div className="flex-[2] flex flex-col my-12 relative md:items-center md:justify-center sm:justify-center sm:items-center">
      {/* Title */}
      <h1 className="text-3xl font-bold xl:text-2xl">About Me</h1>
      {/* About Container */}
      <div className="h-40 flex gap-4 mt-8 xl:gap-1">
        {/* Image Container */}
        <div className="relative h-32 w-32 xl:h-20 xl:w-20">
          <Image src="/profpic.png" fill alt="" className="rounded-3xl aspect-square"></Image>
        </div>

        {/* Text Container */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center px-4">
            <span className="font-bold xl:text-sm">Rin Kitajima</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-base text-[color:--softTextColor] mt-[35px]">
        {"What's Hot"}
      </h2>
      <h1 className="text-3xl font-bold xl:text-2xl">Most Popular</h1>
      <MenuPosts withImage={true}/>

      {/* Category Section Title */}
      <h1 className="text-3xl font-bold mt-[45px] xl:text-2xl">Categories</h1>
      {/* Category List Container */}
      <div className="flex mt-10 gap-6 flex-wrap md:justify-center md:after:w-[90px]">
        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px] xl:w-[70px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-blue-200`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px] xl:w-[70px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-yellow-200 w-max`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px] xl:w-[70px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-green-200 w-max`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px] xl:w-[70px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-blue-200 w-max`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px] xl:w-[70px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-yellow-200 w-max`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px] xl:w-[70px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-green-200 w-max`}
          >
            Travel
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
