import React from "react";
import Image from "next/image";

function Featured() {
  return (
    //Feature Container
    <div className="mt-[30px]">

        <h1 className="text-[96px]">
          <p className="underline">Welcome to <br /> Antenna's Transmission</p>
        </h1>
  
      {/* Post container */}
      <div className="mt-[60px] flex items-center gap-[50px]">
        {/* Image container */}
        <div className="flex-1 h-[600px] relative bg-slate-200 rounded-2xl">
          <Image src="/antenna2.jpg" alt="" fill className="object-fit rounded-2xl transition-all hover:-rotate-12"/>
        </div>
        {/* Text Container */}
        <div className="flex-1 flex flex-col gap-[20px] justify-center">
          {/* Post title */}
          <h1 className="text-[40px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="text-[20px] font-light text-[color:var(--softTextColor)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            libero reprehenderit neque iure sint natus similique consequatur non
            perspiciatis? Officiis quaerat optio officia odio nobis? Alias,
            unde. Sunt, sint nam.s
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            libero reprehenderit neque iure sint natus similique consequatur non
            perspiciatis? Officiis quaerat optio officia odio nobis? Alias,
            unde. Sunt, sint nam.
            
          </p>
          <button className="w-max font-semibold rounded-sm pt-[16px] pb-[20px] px-4 text-black bg-gray-300"> Read More </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
