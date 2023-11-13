import React from "react";
import Image from "next/image";

function Featured() {
  return (
    //Feature Container
    <div className="mt-[30px]">

        <h1 className="text-[96px]">
          <p>Welcome to Antenna's Transmission</p>
        </h1>
  
      {/* Post container */}
      <div className="mt-[60px] flex items-center gap-[50px]">
        {/* Image container */}
        <div className="flex-1 h-[500px] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover"/>
        </div>
        {/* Text Container */}
        <div className="flex-1 flex flex-col gap-[20px]">
          {/* Post title */}
          <h1 className="text-[40px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            libero reprehenderit neque iure sint natus similique consequatur non
            perspiciatis? Officiis quaerat optio officia odio nobis? Alias,
            unde. Sunt, sint nam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            libero reprehenderit neque iure sint natus similique consequatur non
            perspiciatis? Officiis quaerat optio officia odio nobis? Alias,
            unde. Sunt, sint nam.
            
          </p>
          <button> Button </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
