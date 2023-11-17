import Link from "next/link";
import React from "react";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";

function Menu() {
  return (
    <div className="flex-[2] flex flex-col my-12 relative md:items-center md:justify-center sm:justify-center sm:items-center">
      {/* Title */}
      <h1 className="text-3xl font-bold">About Me</h1>
      {/* About Container */}
      <div className="h-40 flex gap-4 mt-8">
        {/* Image Container */}
        <div className="relative h-32 w-32">
          <Image src="/profpic.png" fill alt="" className="rounded-3xl"></Image>
        </div>

        {/* Text Container */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center border-2 justify-center px-4">
            <span className="font-bold">Rin Kitajima</span>
          </div>

          <span className="font-bold">Skills:</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-base text-[color:--softTextColor] mt-[35px]">
        {"What's Hot"}
      </h2>
      <h1 className="text-3xl font-bold">Most Popular</h1>
      <MenuPosts withImage={true}/>

      {/* Category Section Title */}
      <h1 className="text-3xl font-bold mt-[45px]">Categories</h1>
      {/* Category List Container */}
      <div className="flex mt-10 gap-6 flex-wrap md:justify-center md:after:w-[90px]">
        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-blue-200`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-yellow-200 w-max`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-green-200 w-max`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-blue-200 w-max`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px]">
          <span
            className={`py-[6px] px-5 rounded-full text-md text-black font-semibold bg-yellow-200 w-max`}
          >
            Travel
          </span>
        </Link>

        {/* category */}
        <Link href="/blog?cat=style" className="w-[90px]">
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
