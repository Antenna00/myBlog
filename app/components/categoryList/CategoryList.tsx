import Link from "next/link";
import React from "react";
import Image from "next/image";

//Add changing color feature with borderColor and bgColor
const linkData = [
  { name: "Coding", path: "/blog?cat=style", image: "/style.png", borderColor:"border-green-300", bgColor:"bg-green-300" },
  { name: "Cyber Security", path: "/blog?cat=style", image: "/style.png" },
  { name: "Infrastructure", path: "/blog?cat=style", image: "/style.png" },
  { name: "Database", path: "/blog?cat=style", image: "/style.png" },
  { name: "Algorithm", path: "/blog?cat=style", image: "/style.png" },
];

function CategoryList() {
  return (
    //Container
    <div className="flex flex-col h-max">
      {/* Title */}
      <h1 className="my-12 text-3xl font-bold">Popular Categories</h1>
      <div className=" justify-between flex-wrap flex gap-[20px] lg:after:w-48">
        {linkData.map((item, i) => {
          return (
            <Link
              href={item.path}
              className={`flex items-center gap-[10px] h-20 w-48 justify-center 
              border-green-300 border-2 bg-gray-200 
              hover:bg-green-200 transition-all duration-300 rounded-2xl sm:w-full`}
            >
              <div className="w-[32px] h-[32px] relative">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className=" object-fit rounded-full"
                />
              </div>

              <p className=" text-black font-bold">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
