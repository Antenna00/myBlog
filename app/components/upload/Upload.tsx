"use client";
import React, { useEffect, useState, ChangeEvent } from "react";
import Image from "next/image";
import { FileUploader } from "react-drag-drop-files";
import "./upload.css";
import Preview from "../preview/Preview";

function Upload() {
  // const boxArea = <div className='dropArea'>Add file </div>
  const [md, setMd] = useState({ content: "", name: "" });

  //TODO This should be deleted later as markdown will be uploaded to the DB
  const [mdUrl, setMdUrl] = useState(""); //Firebase Path for Markdown.

  const [error, setError] = useState(""); //Store the Error Messages.

  //Handle Images
  const [hasImage, setHasImage] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageFileArray, setImageFileArray] = useState([]); //Store the File Data
  const [imagePathArray, setImagePathArray] = useState([]); //Store the local Path
  const [imageFbUrlArray, setImageFbUrlArray] = useState([]); //Store the Firebase Path

  //Markdown Descriptions
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState<HTMLImageElement>();

  const fileTypesMd = ["MD"]; //For FileUploader Component
  const fileTypesThumb = ["PNG", "JPG", "AVIF", "WEBP"];
  //Handle MD and MD descriptions
  const handleMd = async (file: any) => {
    const content = file;
    setMd({ content: content, name: content.name }); //set the markdown content
  };

  const handleImg = (
    event: ChangeEvent<HTMLInputElement>,
    inputIndex: number,
  ) => {};

  const handleMdDesc = () => {};

  const onSubmitImages = () => {};

  const onSubmit = () => {};

  //Debugger
  useEffect(() => {
    // console.log()
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-1 rounded-xl w-max h-max flex-col gap-10">
        <div className="flex relative justify-center">
          <div className="flex border-b-2 border-[color:#0658c2] mt-0 w-max items-center">
            <p className="flex justify-center items-center text-[30px] font-bold mx-5">
              Upload the Post from Markdown File
            </p>
          </div>
        </div>

        <div>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <p className="text-[20px] font-semibold">Your Markdown:</p>

            <FileUploader
              id="mdInput"
              maxSize="1"
              minSize="1"
              hoverTitle="Drop your Markdown here"
              handleChange={handleMd}
              name="file"
              //  children={boxArea}
              types={fileTypesMd}
              required
            />

            {/* {md.content && ( */}
            <div className="flex flex-col relative mt-10">
              <p className="text-[20px] font-semibold">
                Mark Down Descriptions:
              </p>
              <div className="flex flex-col gap-5">
                <div className="relative w-full">
                  {thumbnail && thumbnail !== undefined && (
                    <p>{thumbnail?.name} is selected</p>
                  )}
                  <FileUploader
                    id="thumbInput"
                    maxSize="1"
                    minSize="1"
                    hoverTitle="Drop your Markdown here"
                    handleChange={handleMd}
                    name="file"
                    classes="drop_zone"
                    //  children={boxArea}
                    types={fileTypesThumb}
                    required
                  />
                </div>
                <div className="flex relative justify-between">
                  <input
                    type="text"
                    id="titleInput"
                    onChange={handleMdDesc}
                    placeholder="...Title"
                    required
                  ></input>
                </div>
                <div className="flex relative justify-between">
                  <input
                    type="text"
                    id="categoryInput"
                    onChange={handleMdDesc}
                    placeholder="...Category"
                    required
                  ></input>
                </div>
              </div>
            </div>
            {/* )} */}
            <button onClick={onSubmit}>Upload</button>
          </form>

          <hr />

          <div className="flex flex-col mt-10">
            <p className="text-[20px] font-semibold">Images:</p>
            {hasImage && !imageUploaded ? (
              <div>
                <h1>There are {imagePathArray.length} images detected</h1>
                <p>Please separately update those images in order.</p>
                <form className="flex flex-col" onSubmit={onSubmitImages}>
                  {imagePathArray.map((imagePath, i) => {
                    return (
                      <input
                        key={i}
                        placeholder={imagePath}
                        type="file"
                        onChange={(event) => handleImg(event, i)}
                      />
                    );
                  })}
                  <button onClick={onSubmitImages}>Upload</button>
                </form>
              </div>
            ) : (
              <p>There are no images detected.</p>
            )}
          </div>
        </div>
      </div>
      <Preview title={title} thumbnail={thumbnail} mdContent={md.content} />
    </div>
  );
}

export default Upload;
