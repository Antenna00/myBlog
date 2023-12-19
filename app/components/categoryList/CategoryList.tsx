import Link from "next/link";
import React from "react";
import Image from "next/image";

type categories =   {
  id: string;
  slug: string;
  title: string;
  img: string;
}

const getCategoriesData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if(!res.ok) {
    throw new Error(`Failed: ${res.status}`);
  }

  return res.json();
}

async function CategoryList() {
  const data: categories[] = await getCategoriesData();

  return (
    //Container
    <div className="flex flex-col h-max">

      {/* Title */}
      <h1 className="my-12 text-3xl font-bold">Main Categories</h1>      

      <div className=" justify-between flex-wrap flex gap-[20px] lg:after:w-48">
        {data.map((item, i:number) => {
          return (
            <Link
              key={i}
              href={`/blog?cat=${item.slug}`}
              className={`flex items-center gap-[10px] h-20 w-48 justify-center 
              border-green-300 border-2 bg-gray-200 
              hover:bg-green-200 transition-all duration-300 rounded-2xl sm:w-full`}
            >
              <div className="w-[32px] h-[32px] relative">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className=" object-fit rounded-full"
                />
              </div>

              <p className=" text-black font-bold capitalize">{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
