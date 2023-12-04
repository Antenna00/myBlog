import React from "react";
import Upload from "../components/upload/Upload";
import Image from "next/image";

function upload() {

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
