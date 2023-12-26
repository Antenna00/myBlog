import React from "react";
import Menu from "@/app/components/menu/Menu";
import Image from "next/image";
import Comments from "@/app/components/comments/Comments";
import PostView from "@/app/components/postView/PostView";

function SinglePage() {
  return (
    <div className="mt-[70px]">
      {/* Info Container */}
      <div className="flex items-center gap-[50px] border-b-[1px]">
        {/* Text Container */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-6xl mb-[50px] xl:text-5xl lg:text-4xl">
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
              <span className="text-[20px] font-medium xl:text-[15px]">John Doe</span>
              <span className="xl:text-[13px]">01.01.2024</span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 relative h-[350px]">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-[50px] xl:gap-[30px]">
        {/* Post */}
        <div className="flex flex-col flex-[6] mt-[60px]">
          <PostView />
          

          {/* <div>
            <p className="text-xl xl:text-lg font-light mb-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
              velit sequi minus doloribus, consequatur vitae quod fugiat
              asperiores tempore veniam veritatis quibusdam maiores libero illo
              mollitia deserunt porro voluptates.
            </p>
            <h2 className="text-2xl xl:text-xl font-semibold">
              Lorem ipsum dolor
            </h2>
            <p className="text-xl xl:text-lg font-light mb-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
              velit sequi minus doloribus, consequatur vitae quod fugiat
              asperiores tempore veniam veritatis quibusdam maiores libero illo
              mollitia deserunt porro voluptates.
            </p>
            <p className="text-xl xl:text-lg font-light mb-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
              velit sequi minus doloribus, consequatur vitae quod fugiat
              asperiores tempore veniam veritatis quibusdam maiores libero illo
              mollitia deserunt porro voluptates.
            </p>
          </div> */}
          <Comments />
        </div>
        {/* Menu Container */}
        <div className="flex-[2] xl:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
