import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Comments() {
  // const [loginStat, setLoginStat] = useState(false);
  const status = "authenticated";

  return (
    <div className="mt-[50px]">
      {/* Title */}
      <h1 className="text-2xl text-[color:var(--softTextColor)] mb-[30px]">
        Comments
      </h1>
      {status === "authenticated" ? (
        //Write Comment Section
        <div className="flex items-center justify-between gap-7">
          <textarea
            placeholder="write a comment here..."
            id=""
            cols={30}
            className="p-[20px] w-full border-[1px] text-black"
          ></textarea>
          <button className="py-[16px] px-[20px] bg-green-500 text-white font-bold border-none rounded-md cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <div>
          <Link href="/login">Login to write a comment</Link>
        </div>
      )}
      {/* Comments Container */}
      <div className="mt-[50px]">
        {/* Comments */}
        <div className="mb-[50px]">
          {/* User */}
          <div className="relative flex items-center gap-5 mb-[20px]">
            {/* Image */}

            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className="relative rounded-full object-cover h-[50px]"
            />

            {/* User Info */}
            <div className="flex flex-col gap-1 text-[color:var(--softTextColor)]">
              <span className="font-medium">John Doe</span>
              <span className="text-sm">01.01.2023</span>
            </div>
          </div>
          {/* Description */}
          <p className="text-lg font-light xl:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur nam labore, asperiores nihil totam animi, quasi
            aspernatur impedit nemo voluptas reprehenderit ducimus veniam beatae
            exercitationem rerum cupiditate in? Maxime, dolorem?
          </p>
        </div>
        <div className="mb-[50px]">
          {/* User */}
          <div className="relative flex items-center gap-5 mb-[20px]">
            {/* Image */}

            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className="relative rounded-full object-cover h-[50px]"
            />

            {/* User Info */}
            <div className="flex flex-col gap-1 text-[color:var(--softTextColor)]">
              <span className="font-medium">John Doe</span>
              <span className="text-sm">01.01.2023</span>
            </div>
          </div>
          {/* Description */}
          <p className="text-lg font-light xl:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur nam labore, asperiores nihil totam animi, quasi
            aspernatur impedit nemo voluptas reprehenderit ducimus veniam beatae
            exercitationem rerum cupiditate in? Maxime, dolorem?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
