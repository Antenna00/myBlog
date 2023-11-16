import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <div className="mb-12 flex gap-12 xl:gap-6 relative items-center after:h-[200px] after:relative after:animate-pulse after:gap-0 after:w-[1px] after:bg-green-400">
      {/* Image Container */}
      <div className="h-[350px] xl:h-[100px] xl:w-[100px] xl:flex-initial lg:hidden relative flex-1">
        <Image src="/p1.jpeg" alt="" fill className="object-cover" />
      </div>
      {/* Text Container */}
      <div className="flex-1 flex flex-col gap-6 xl:gap-3">
        {/* Details */}
        <div className="">
          <span className="text-gray-400">11.02.2023 - </span>
          <span className="text-red-500 font-medium">CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="text-[30px] xl:text-[25px] font-semibold hover:underline">
            Lorem ipsum dolor sit amet consecteturd
          </h1>
        </Link>
        <p className=" text-base xl:text-sm text-[color:var(--softTextColor)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          officiis, porro itaque voluptate ea sapiente deserunt quae pariatur
          accusamus doloremque explicabo fugit repellendus vitae. Consectetur
          non adipisci dolor. Eligendi, modi.
        </p>
        <Link
          href="/"
          className="w-max font-semibold rounded-sm px-4 py-2 text-black bg-gray-300 hover:bg-gray-100 transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
