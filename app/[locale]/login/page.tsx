"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

//TODO Add button transition and fix the issue that cursor appears
//TODO add ts particles to the background of image
function Login() {
  const {data, status} = useSession();
  const router = useRouter();
  
  
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);
  
  if(status === "loading") {
    return (
    <div className="">
      <div className='h-full w-full relative flex justify-center items-center'>
            <Image src="/antora/antora_loading.jpg" width={700} height={700} alt=""/>
        </div>
      </div>);
  }


  return (
    //Container
    <div className="flex items-center justify-center mt-[60px]">
      {/* Wrapper */}
      <div className="flex relative items-center justify-evenly w-full">
        {/* Image Container */}
        <div className="xl:hidden">
          <Image
            src="/loginPage.png"
            alt=""
            width={400}
            height={500}
            className="object-cover"
          />
        </div >

        {/* Login Container */}
        <div className="flex flex-col py-[150px] px-[200px] bg-[color:var(--softBg)] sm:px-[100px] ssm:px-[70px] gap-10 rounded-xl">
          {/* Title */}
          <h1 className="text-[35px] text-center font-bold underline">Login</h1>
          <div className="flex flex-col gap-24 [&_div]:text-center [&_div:nth-child(1)]:bg-red-500 [&_div:nth-child(2)]:bg-black [&_div:nth-child(3)]:bg-blue-500">
            {/* Google Login */}
            <div className="p-[20px] w-[200px] rounded-md border-none text-white font-bold cursor-pointer" onClick={() => signIn("google")}>
              Sign in with Google
            </div>
            {/* Github Login */}
            <div className="p-[20px] w-[200px] rounded-md border-none text-white font-bold cursor-pointer" onClick={() => signIn("github")}>
              Sign in with Github
            </div>
            {/* Facebook Login */}
            <div className="p-[20px] w-[200px] rounded-md border-none text-white font-bold cursor-pointer">
              Sign in with Facebook
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
