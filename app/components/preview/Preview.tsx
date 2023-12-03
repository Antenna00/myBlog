import React, { ReactNode } from "react";
import Image from "next/image";
import Menu from "../menu/Menu";
import Comments from "../comments/Comments";

interface previewProps {
  title: string;
  thumbnailFbUrl: string;
  mdContent: string | ArrayBuffer | null | undefined;
}

//TODO Receive mdProp or make context
function Preview({ title, thumbnailFbUrl, mdContent }: previewProps) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex relative justify-center">
        <div className="flex border-b-2 border-[color:#0658c2] mt-0 w-max items-center">
          <p className="flex justify-center items-center text-[30px] font-bold mx-5">
            Post Preview
          </p>
        </div>
      </div>
      <div className="h-[1000px] w-full border-[1px] border-gray-400 mt-10 overflow-scroll">
        {/* Info Container */}
        <div className="flex items-center gap-[50px] border-b-[1px]">
          {/* Text Container */}
          <div className="flex-1">
            {/* Title */}
            {title ? (
              <h1 className="text-3xl mb-[50px] xl:text-5xl lg:text-4xl">
                {title}
              </h1>
            ) : (
              <h1 className="text-3xl mb-[50px] xl:text-5xl lg:text-4xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h1>
            )}
            {/* User */}
            <div className="flex items-center gap-[20px]">
              {/* User Image Container */}
              <div className="w-[20px] h-[20px] relative">
                <Image
                  src="/p1.jpeg"
                  alt=""
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              {/* User Text Container */}
              <div className="flex flex-col gap-[1px] text-[color:var(--softTextColor)]">
                <span className="text-[10px] font-medium xl:text-[15px]">
                  John Doe
                </span>
                <span className="xl:text-[7px] text-[7px]">01.01.2024</span>
              </div>
            </div>
          </div>

          {/* Image Container */}
          {thumbnailFbUrl ? (
            <div className="flex-1 relative h-[200px]">
              <Image src={thumbnailFbUrl} alt="" fill className="object-cover" />
            </div>
          ) : (
            <div className="flex-1 relative h-[200px]">
              <Image src="/p1.jpeg" alt="" fill className="object-cover" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex gap-[50px] xl:gap-[30px]">
          {/* Post */}
          <div className="flex flex-col flex-[6] mt-[60px]">
            {mdContent && typeof mdContent === 'string' ? (
              //TODO Add react_markdown here
              <div>{mdContent}</div>
            ) : (
              <div>
                <p className="text-sm xl:text-lg font-light mb-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  optio velit sequi minus doloribus, consequatur vitae quod
                  fugiat asperiores tempore veniam veritatis quibusdam maiores
                  libero illo mollitia deserunt porro voluptates.
                </p>
                <h2 className="text-md xl:text-xl font-semibold">
                  Lorem ipsum dolor
                </h2>
                <p className="text-sm xl:text-lg font-light mb-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  optio velit sequi minus doloribus, consequatur vitae quod
                  fugiat asperiores tempore veniam veritatis quibusdam maiores
                  libero illo mollitia deserunt porro voluptates.
                </p>
                <p className="text-sm xl:text-lg font-light mb-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  optio velit sequi minus doloribus, consequatur vitae quod
                  fugiat asperiores tempore veniam veritatis quibusdam maiores
                  libero illo mollitia deserunt porro voluptates.
                </p>
              </div>
            )}

            <div>
              <p className="text-red-400 text-xl font-bold">
                *Comment Section is Omitted in Preview
              </p>
            </div>
          </div>
          {/* Menu Container */}
          <div className="flex-[2] xl:hidden">
              //TODO TOC component comes here
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
