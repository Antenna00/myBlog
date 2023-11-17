import React from "react";
import Menu from "../components/menu/Menu";
import Image from "next/image";

function SinglePage() {
  return (
    <div className="mt-[70px]">
      {/* Info Container */}
      <div className="flex items-center gap-[50px] border-b-[1px]">
        {/* Text Container */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-6xl mb-[50px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          {/* User */}
          <div className="flex items-center gap-[20px]">
            {/* User Image Container */}
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="rounded-full object-cover"
              />
            </div>
            {/* User Text Container */}
            <div className="flex flex-col gap-[1px] text-[color:var(--softTextColor)]">
              <span className="text-[20px] font-medium">John Doe</span>
              <span>01.01.2024</span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 relative h-[350px]">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-[50px]">
        {/* Post */}
        <div className="flex flex-col flex-[6] mt-[60px]">
          <p className="text-xl font-light mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            velit sequi minus doloribus, consequatur vitae quod fugiat
            asperiores tempore veniam veritatis quibusdam maiores libero illo
            mollitia deserunt porro voluptates.
          </p>
          <h2 className="text-2xl font-semibold">
            Lorem ipsum dolor
          </h2>
          <p className="text-xl font-light mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            velit sequi minus doloribus, consequatur vitae quod fugiat
            asperiores tempore veniam veritatis quibusdam maiores libero illo
            mollitia deserunt porro voluptates.
          </p>
          <p className="text-xl font-light mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            velit sequi minus doloribus, consequatur vitae quod fugiat
            asperiores tempore veniam veritatis quibusdam maiores libero illo
            mollitia deserunt porro voluptates.
          </p>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
