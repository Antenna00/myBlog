import React from "react";
import Upload from "../components/upload/Upload";
import Preview from "../components/preview/Preview";
import Image from "next/image";
function upload() {
  return (
    <div className="flex mt-20 w-full flex-col">
      <div className="w-full relative flex">
        <Image src="/uploadThumb.jpg" alt="" width={900} height={400} className="relative mx-auto items-center justify-center rounded-3xl"/>
      </div>
      <div className="flex mt-10">
      <Upload />
        
      <Preview />
      </div>
    </div>
  );
}

export default upload;
