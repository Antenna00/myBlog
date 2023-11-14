import React from "react";
import Image from "next/image";
function Card() {
  return (
    <div>
      {/* Image Container */}
      <div className="h-[200px] w-[200px] bg-blue-200 relative">
        <Image src="/p1.jpeg" alt="" fill className=" object-contain" />
      </div>
      {/* Text Container */}
      <div>
        {/* Details */}
        <div className="">
            <span>11.02.2023</span>
            <span>CULTURE</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
