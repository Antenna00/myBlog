"use client";

import React, { useState } from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    console.log(error);
  }

  return data;
};

type commentType = {
  id: string;
  desc: string;
  userEmail: string;
  postSlug: string;
  createdAt: Date;
  user: {
    name: string;
    image: string;
  };
};

function Comments({ postSlug }: { postSlug: string }) {
  // const [loginStat, setLoginStat] = useState(false);
  const { status } = useSession();
  const [ desc, setDesc ] = useState("");
  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher,
  );

  const formatDate = (date: Date) => {
    const dateUploaded = new Date(date);
    const localeDate = dateUploaded.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    console.log("running");
    return localeDate;
  };

  console.log(data);

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
            className="p-[20px] w-full border-[1px]"
            onChange={e => setDesc(e.target.value)}
          ></textarea>
          <button className="py-[16px] px-[20px] bg-green-500 text-white font-bold border-none rounded-md cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <div>
          <Link href="/login" className=" text-red-400">
            =&gt; Login to write a comment
          </Link>
        </div>
      )}

      {isLoading
        ? (<span>loading</span>)
        : data.map((item: commentType, i: number) => {
            return(
            <div className="mt-[50px]">
              {/* Comments */}

              <div className="mb-[50px]" key={i}>
                {/* User */}
                <div className="relative flex items-center gap-5 mb-[20px]">
                  {/* Image */}

                  <Image
                    src={item.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className="relative rounded-full object-cover h-[50px]"
                  />

                  {/* User Info */}
                  <div className="flex flex-col gap-1 text-[color:var(--softTextColor)]">
                    <span className="font-medium">{item.user.name}</span>
                    <span className="text-sm">
                      {formatDate(item.createdAt)}
                    </span>
                  </div>
                </div>
                {/* Description */}
                <p className="text-lg font-light xl:text-base">{item.desc}</p>
              </div>
            </div>
        )
          })}
    </div>
  );
}

export default Comments;
