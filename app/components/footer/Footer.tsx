import React from "react";
import Image from "next/image";

function Footer() {
  return (
    //Container
    <div className="mt-[40px] flex flex-col">
      {/* Separator Line */}
      <div className="w-full h-[2px] bg-[color:--textColor] my-10"></div>

      {/*Contents Container */}
      <div className="flex mb-10">
        {/* Right side Container */}
        <div className="flex flex-col flex-[1] gap-4">
          {/* Blog Image & Title */}
          <div className="flex relative gap-10 items-center">
            {/* Image container */}
            <div className="relative w-20 h-20">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/*Title Container */}
            <div>
              <p className="text-3xl font-bold">
                Antenna's <br /> <span className="pl-16">Transmission</span>
              </p>
            </div>
          </div>

          {/* Blog Description */}
          <div>
            <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
            dicta adipisci deleniti sed velit alias veritatis facere ullam
            debitis praesentium eaque illum et quia illo excepturi fuga iure
            necessitatibus iusto.</p>
          </div>
          {/* Copyrights */}
          <div>© Rin Kitajima / Antenna 2023</div>
        </div>

        {/* Link Container */}
        <div className=" flex flex-1 gap-4">
          {/* Sitemap Container */}
          <div className="flex-1 border-2">
            <p className="text-center">SITEMAP</p>

          </div>

          {/* Other Links Container*/}
          <div className="flex-1 border-2">
            <p className="text-center">OTHER LINKS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
