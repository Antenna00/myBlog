import React from "react";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <div className="flex w-full h-full flex-col">
      {/* AboutMe Container */}
      <div className="flex w-full h-[300px] mt-20 gap-10 relative justify-center px-5 items-center bg-blue-100">
        {/* Iamge Container */}
        <div className="relative h-[200px] w-[500px] flex">
          <Image src="/profpic.png" alt="" fill className=" object-cover" />
        </div>

        {/* Info container */}
        <div className="relative text-black flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Antenna</h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste cum
            facilis tempore in! Saepe magnam quam illo impedit fugit ex,
            nesciunt amet. Sint sed reprehenderit officiis excepturi, tempora
            dolor velit.
          </p>
          <Link href="/contact">
          <button className=" border-2 border-blue-200 p-2">Contact Me</button>
          </Link>
        </div>
      </div>
      SKILL

    </div>
  );
}

export default Page;
