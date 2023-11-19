import React from 'react'
import Image from "next/image";

function About() {
  return (
    <div className=" flex gap-4 mt-8 xl:gap-1 justify-center items-center">
        {/* Image Container */}
        <div className="relative flex xl:h-20 xl:flex-1 justify-center items-center">
          <Image src="/profpic.png" width={128} height={128} alt="" className="rounded-3xl w-32 h-32 xl:h-20 xl:w-20 lg:h-16 lg:w-16"></Image>
        </div>

        {/* Text Container */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-center justify-center px-4 xl:text-xs lg:text-[10px]">
            <span className="font-bold xl:text-sm underline">Rin Kitajima</span>
            <span>System Engineer</span>
          </div>
        </div>
      </div>
  )
}

export default About