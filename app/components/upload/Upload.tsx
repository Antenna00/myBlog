import React from "react";
import Image from "next/image";

function Upload() {
  return (
    <div className="flex flex-1 bg-blue-600 rounded-xl w-max h-max flex-col gap-10">
        <p className="text-xl font-bold underline mt-5 ml-5">
        Upload the Post from Markdown File
      </p>
      
      <div>
      <form className="flex flex-col" >

          <p>Your markdown file</p>
          <input
            id="mdInput"
            type="file"
            className=""
            placeholder="Choose Markdown"    
          />
          
        </form>
        

      </div>

    </div>
  );
}

export default Upload;
