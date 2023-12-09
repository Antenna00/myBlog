import React from "react";
import Image from "next/image";
import Title from "./Title";

function Featured() {
  return (
    //Feature Container
    <div className="mt-[30px]">
      <Title />

      {/* Post container */}
      <div className="mt-[60px] flex items-center gap-[50px]">
        {/* Image container */}
        <div className="flex-1 h-[580px] xxxl:h-[600px] lg:hidden xl:h-[400px] lg:h-[300px] md:hidden relative bg-slate-200 rounded-2xl">
          <Image
            src="/TestImage.png"
            alt=""
            fill
            priority
            className="object-fit rounded-2xl transition-all hover:-rotate-12"
          />

        </div>
        <div className="flex-1 h-[600px] hidden lg:flex md:hidden relative bg-slate-200 rounded-2xl">
        <Image
            src="/antenna.jpg"
            alt=""
            fill
            className="object-contain rounded-2xl transition-all hover:-rotate-12"
          />
          </div>
        {/* Text Container */}
        <div className="flex-1 flex flex-col gap-[20px] justify-center">
          {/* Post title */}
          <h1 className="text-[40px] font-semibold sm:text-[20px]">
            Lorem ipsum dolor sits amet consectesur adipisicing elit.
          </h1>
          <p className="text-[20px] font-light text-[color:var(--softTextColor)] sm:text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            libero reprehenderit neque iure sint natus similique consequatur non
            perspiciatis? Officiis quaerat optio officia odio nobis? Alias,
            unde. Sunt, sint nam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime libero reprehenderit neque iure sint natus
            similique consequatur non perspiciatis? Officiis quaerat optio
            officia odio nobis? Alias, unde. Sunt, sint nam.
          </p>
          <button className="w-max font-semibold rounded-sm pt-[16px] pb-[20px] px-4 text-black bg-gray-300">
            {" "}
            Read More{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
