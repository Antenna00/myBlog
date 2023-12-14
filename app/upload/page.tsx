"use client"

import React, { useEffect } from "react";
import Upload from "../components/upload/Upload";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function upload() {
  const { data, status} = useSession();

  const router = useRouter();
  
  useEffect(() => {
    console.log(status);
    if (status === "unauthenticated") {
      router.push("/");
      return;
    }
  }, [status, router]);
  
  if(status === "loading") {
    return <div className="">Loading...</div>
  }
  return (
    <div className="flex mt-20 w-full flex-col">
      <div className="w-full relative flex h-[600px]">
        <Image src="/uploadMain.png" alt="" width={1366} height={200} className="relative object-cover mx-auto items-center justify-center rounded-3xl"/>
      </div>
      <div className="flex mt-10">
      <Upload />
      </div>
    </div>
  );
}

export default upload;
