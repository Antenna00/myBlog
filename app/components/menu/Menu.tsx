import Link from "next/link";
import React from "react";
import Image from "next/image";

function Menu() {
  return (
    <div className="flex-[2] gap-10">
      {/* Title */}
      <h2 className="text-base text-gray-500">{"What's Hot"}</h2>
      <h1 className="text-3xl font-bold">Most Popular</h1>

      {/* Items Container */}
      <div className="flex items-center flex-col gap-8 w-full ">
        <Link href="/" className="flex gap-4 items-center">
          {/* Image Container */}
          <div className="relative aspect-square flex-1">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full object-cover border-gray-200 border-2"></Image>
          </div>
          {/* Text Container */}
          <div className="flex-[4] flex flex-col gap-1">
            <span className={`py-[3px] px-2 rounded-full text-xs text-white bg-orange-400 w-max`}>Travel</span>
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
          <div className="relative aspect-square flex-1">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full object-cover border-gray-200 border-2"></Image>
          </div>
          {/* Text Container */}
          <div className="flex-[4] flex flex-col gap-1">
            <span className={`py-[3px] px-2 rounded-full text-xs text-white bg-orange-400 w-max`}>Travel</span>
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
          <div className="relative aspect-square flex-1">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full object-cover border-gray-200 border-2"></Image>
          </div>
          {/* Text Container */}
          <div className="flex-[4] flex flex-col gap-1">
            <span className={`py-[3px] px-2 rounded-full text-xs text-white bg-orange-400 w-max`}>Travel</span>
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

    </div>
  );
}

export default Menu;
