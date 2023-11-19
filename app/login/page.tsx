import React from "react";
import Image from "next/image";
function Login() {
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
            <div className="p-[20px] w-[200px] rounded-md border-none text-white font-bold cursor-pointer">
              Sign in with Google
            </div>
            {/* Github Login */}
            <div className="p-[20px] w-[200px] rounded-md border-none text-white font-bold cursor-pointer">
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
