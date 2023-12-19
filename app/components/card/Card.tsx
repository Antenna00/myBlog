import React from "react";
import Image from "next/image";
import Link from "next/link";
import { postDataType } from "../cardList/CardList";
  
  type CardProps = {
    item: postDataType;
  };

//TODO Why is it not a DATE???????
function Card({item} : CardProps) {

  // console.log("item.dateUploaded:", item.dateUploaded);
  // console.log(typeof item.dateUploaded === 'string');
  // console.log(item.imgUrls);
  // console.log("typeof", Array.isArray(item.imgUrls));

  const dateUploaded = new Date(item.dateUploaded);
  const date = dateUploaded.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

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
          <span className="text-gray-400">{date}</span>
          <span className="text-red-500 font-medium capitalize">&nbsp;{item.catSlug}</span>
        </div>
        <Link href="/">
          <h1 className="text-[30px] xl:text-[25px] font-semibold hover:underline">
            {item.title}
          </h1>
        </Link>
        {/* <p className=" text-base xl:text-sm text-[color:var(--softTextColor)]">
          {item.descMD}
        </p> */}
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
