import React from "react";
import Image from "next/image"

function ThemeToggle() {
  return (
    <div className="bg-black relative flex w-[40px] h-[20px] 
    rounded-[50px] items-center justify-between">
      <Image src="/moon.png" alt="" width={14} height={14}></Image>
      {/* ball */}
      <div className="bg-white absolute w-[15px] h-[15px] rounded-[50%] left-[1px]"></div>
      <Image src="/sun.png" alt="" width={14} height={14}></Image>
    </div>
  );
}

export default ThemeToggle;
