import React from "react";
import Image from "next/image";
import Link from "next/link";

interface test {
  withImage: boolean;
}

function MenuPosts({ withImage }: test) {
  return (
    //Item container
    <div className="flex items-center flex-col gap-8 w-full relative mt-[35px] sm:items-center sm:justify-center md:items-center md:justify-center">
      <Link href="/" className="flex gap-4 items-center relative sm:justify-center sm:items-center">
        {/* Image Container */}
        <div className="relative aspect-square flex-1 sm:flex-initial sm:w-[100px]">
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className="rounded-full object-cover border-gray-200 border-2"
          ></Image>
        </div>
        {/* Text Container */}
        <div className="relative flex-[4] sm:flex-initial flex flex-col gap-1 ">
          <span
            className={`py-[3px] px-2 rounded-full text-xs text-black font-semibold bg-green-200 w-max`}
          >
            Travel
          </span>
          <h3 className=" text-base font-medium text-[color:car(--softTextColor)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          {/* Detail */}
          <div className="text-xs">
            <span className="">Jon Doe</span>
            <span className="text-gray-400"> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="flex gap-4 items-center">
        {/* Image Container */}
        <div className="relative aspect-square flex-1 sm:flex-initial sm:w-[100px]">
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className="rounded-full object-cover border-gray-200 border-2"
          ></Image>
        </div>
        {/* Text Container */}
        <div className="flex-[4] sm:flex-initial flex flex-col gap-1">
          <span
            className={`py-[3px] px-2 rounded-full text-xs text-white bg-orange-400 w-max`}
          >
            Travel
          </span>
          <h3 className=" text-base font-medium text-[color:car(--softTextColor)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          {/* Detail */}
          <div className="text-xs">
            <span className="">Jon Doe</span>
            <span className="text-gray-400"> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="flex gap-4 items-center">
        {/* Image Container */}
        <div className="relative aspect-square flex-1 sm:flex-initial sm:w-[100px]">
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className="rounded-full object-cover border-gray-200 border-2"
          ></Image>
        </div>
        {/* Text Container */}
        <div className="flex-[4] sm:flex-initial flex flex-col gap-1">
          <span
            className={`py-[3px] px-2 rounded-full text-xs text-white bg-orange-400 w-max`}
          >
            Travel
          </span>
          <h3 className=" text-base font-medium text-[color:car(--softTextColor)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          {/* Detail */}
          <div className="text-xs">
            <span className="">Jon Doe</span>
            <span className="text-gray-400"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts;
