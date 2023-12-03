"use client";
import React, { useEffect, useState, ChangeEvent } from "react";
import Image from "next/image";
import { FileUploader } from "react-drag-drop-files";
import "./upload.css";
import Preview from "../preview/Preview";
import { storage } from "../firebase/Firebase";
import { uploadBytes, getDownloadURL, deleteObject, ref } from "firebase/storage";

function Upload() {
  // const boxArea = <div className='dropArea'>Add file </div>
  const [md, setMd] = useState<{
    content: string | ArrayBuffer | null;
    name: string;
  } | null>({ content: "", name: "" });

  //TODO This should be deleted later as markdown will be uploaded to the DB
  const [mdUrl, setMdUrl] = useState(""); //Firebase Path for Markdown.

  const [error, setError] = useState(""); //Store the Error Messages.

  //Handle Images
  const [hasImage, setHasImage] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageFileArray, setImageFileArray] = useState([]); //Store the File Data
  const [imagePathArray, setImagePathArray] = useState<string[]>([]); //Store the local Path
  const [imageFbUrlArray, setImageFbUrlArray] = useState([]); //Store the Firebase Path

  //Markdown Descriptions
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<File>();
  const [thumbnailFbUrl, setThumbnailFbUrl] = useState<string>("");
  const [thumbnailUploaded, setThumbnailUploaded] = useState<boolean>(false);
  const [thumbnailFbPath, setThumbnailFbPath] = useState<string>("");
  const fileTypesMd = ["md", "file"]; //For FileUploader Component
  const fileTypesThumb = ["png", "jpg", "avif", "webp"];

  let counter = 0;

  //save the LocalPath & Temporary URL.
  //Use this to re-replace the firebase URL
  //when you press the button it is re-rendered so it will go back to initial state
  const temporaryUrls = new Map();

  const generateTemporalUrl = async (localImagePath: string) => {
    if (!temporaryUrls.has(localImagePath)) {
      const temporaryUrl = `${counter++}`;
      temporaryUrls.set(localImagePath, temporaryUrl);

      // const updatedArray = [...imagePathArray, localImagePath];
      // console.log("Updated imagePathArray:", updatedArray);

      setImagePathArray((prevArray) => [...prevArray, localImagePath]);

      return temporaryUrl;
    } else if (temporaryUrls.has(localImagePath)) {
      const temporaryUrl = temporaryUrls.get(localImagePath);
      return temporaryUrl;
    }
  };

  const ripImageFromMarkdown = async (
    mdContent: string | ArrayBuffer | null,
  ) => {
    //TODO Add image ripoff from <img> tag as well.
    if (mdContent && typeof mdContent === "string") {
      const markdownMatches = mdContent.matchAll(/!\[.*?\]\((.*?)\)/g);
      const markdownPaths = Array.from(markdownMatches, (match) => ({
        path: match[1],
        position: match.index,
      }));

      // Extract paths from <img>
      const imgTagMatches = mdContent.matchAll(/<img.*?src=['"](.*?)['"].*?>/g);
      const imgTagPaths = Array.from(imgTagMatches, (match) => ({
        path: match[1],
        position: match.index,
      }));

      const imagePaths = [...markdownPaths, ...imgTagPaths];

      imagePaths.sort((a, b) => (a?.position || 0) - (b?.position || 0));

      const sortedImagePaths = imagePaths.map(({ path }) => path);
      const replacedPromises = Array.from(sortedImagePaths, async (path) => {
        const temporalUrl = await generateTemporalUrl(path);
        return { path, temporalUrl };
      });

      const replacedResults = await Promise.all(replacedPromises);

      let modifiedContent = mdContent;
      for (const { path, temporalUrl } of replacedResults) {
        modifiedContent = modifiedContent.replace(
          new RegExp(`!\\[.*?\\]\\(${path}\\)`, "g"),
          `![alt text](${temporalUrl})`,
        );
        modifiedContent = modifiedContent.replace(
          new RegExp(`<img.*?src=['"]${path}['"].*?>`, "g"),
          `<img src="${temporalUrl}" alt="alt text">`,
        );
      }
      console.log(modifiedContent);
      return modifiedContent;
    }
  };

  //Handle MD and MD descriptions
  const handleMd = async (event: File) => {
    const content = event;
    console.log("Content:", content);

    if (imagePathArray.length > 0) {
      setImagePathArray([]);
    }
    
    if (content) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        if (event.target) {
          const mdContent = event.target.result;
          const modifiedContent = await ripImageFromMarkdown(mdContent);
          if (modifiedContent !== undefined) {
            setMd({ content: modifiedContent, name: content.name });
            // console.log(md);
            // console.log(md?.name)
          }
          setError("");
        }
      };
      reader.readAsText(content, "UTF-8");
    }
  };

  const handleImg = (
    event: ChangeEvent<HTMLInputElement>,
    inputIndex: number,
  ) => {};

  //ImagePathの設定
  useEffect(() => {
    if (imagePathArray.length > 0) {
      console.log("Updated imagePathArray:", imagePathArray);
      setHasImage(true);
      console.log(hasImage);
    }
  }, [imagePathArray]);

  const handleThumb = (event: File) => {
    const thumbnail = event;
    setError("");
    if (thumbnail) {
      setThumbnail(thumbnail);
    }

  };

  const handleMdDesc = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "titleInput") {
      setTitle(value);
    } else if (name === "categoryInput") {
      const categoryValues = value
        .split(",")
        .map((category) => category.trim());
      setCategory(categoryValues);
    }
  };

  //Submit Images
  const onSubmitImages = async() => {

  };

  //Submit Thumbnail
  const onSubmitThumb = async(event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("onSubmitThumb is running");
    setError("");

    //If thumbnail is already uploaded, previous thumbnail must be deleted.
    if(thumbnailUploaded) {
      try{
        console.log("Deleting previous thumb")
        const fileRef = ref(storage, thumbnailFbPath);
        deleteObject(fileRef);

        //Initialize the thumbnail path and url
        setThumbnailFbPath("");
        setThumbnailFbUrl("");
        setThumbnailUploaded(false);
      }catch(error) {
        console.error("Error Deleting ")
      }
    }

    //Error Handling
    if(thumbnail === undefined || null) {
      setError("Thumbnail is not choosen");
      return;
    }

    //Get the date in fromat of YYYY-MM-DD
    const jpDate = new Date().toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
    day: "2-digit"}).replaceAll('/', '-');
    console.log(jpDate);

    //set the storage path of firebase
    const storageRef = storage.ref(`images/${jpDate}/thumbnails/${thumbnail.name}`);
    setThumbnailFbPath(`images/${jpDate}/thumbnails/${thumbnail.name}`)

    const snapshot = await uploadBytes(storageRef, thumbnail)
    const url = await getDownloadURL(snapshot.ref);
    setThumbnailFbUrl(url);
    setThumbnailUploaded(true);
  };

  //Submit markdown, title and category
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("onSubmit is running")
    event.preventDefault();
    setError("");
    console.log(imageUploaded);

    //TODO Make sure to check title are filled before sumitting
    //TODO thumbnail as well. you send everything to the databse from here

    if (!imageUploaded && hasImage) {
      console.log("Images are required to be uploaded first");
      setError("Images are required to be uploaded first");
      return;
    }

    if (md?.content === "" || undefined || null) {
      console.log("File is not selected");
      setError("File is not selected");
      return;
    }

    // console.log(title);
    // console.log(category);

    const utcDate = new Date();

    // アップロード処理
    console.log("Uploading MD");
    const storageRef = storage.ref(`markdown/${utcDate}/${md?.name}`); //TODO change the utcData path later

    if (md?.content !== undefined && md.content !== null) {
      uploadBytes(
        storageRef,
        new Blob([md?.content], { type: "text/markdown" }),
      ).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        //get the image url that replaces with markdown temp url
        getDownloadURL(snapshot.ref).then((url) => {
          setMdUrl(url);
        });
      });
    }
  };

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
        {error && (
          <div className="bg-yellow-200">
            <span className="text-red-500">*{error}</span>
          </div>
        )}
          <form className="flex flex-col" onSubmit={onSubmit}>
            <p className="text-[20px] font-semibold">Your Markdown:</p>

            <FileUploader
              id="mdInput"
              hoverTitle="Drop your Markdown here"
              handleChange={handleMd}
              name="file"
              //  children={boxArea}
              types={fileTypesMd}
              required
            />

            {/* {md.content && ( */}
            <div className="flex flex-col ml-5 relative mt-5">
              <p className="text-[18px] font-semibold">
                Mark Down Descriptions:
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex relative justify-between">
                  <input
                    type="text"
                    id="titleInput"
                    name="titleInput"
                    onChange={handleMdDesc}
                    placeholder="...Title"
                    required
                  ></input>
                </div>
                <div className="flex relative justify-between">
                  <input
                    type="text"
                    id="categoryInput"
                    name="categoryInput"
                    onChange={handleMdDesc}
                    placeholder="...Category"
                    required
                  ></input>
                </div>
              </div>
            </div>
            {/* )} */}
            <button type="submit">Upload Markdown</button>
          </form>
          <p className="text-[20px] font-semibold mt-10">Your Thumbnail:</p>
          <div className="relative w-full">
            {thumbnail && thumbnail !== undefined && (
              <p>{thumbnail?.name} is selected</p>
            )}
            <FileUploader
              id="thumbInput"
              maxSize={1}
              hoverTitle="Drop your Thumbnail here"
              handleChange={handleThumb}
              name="file"
              classes="drop_zone"
              //  children={boxArea}
              types={fileTypesThumb}
              required
            />
            <button onClick={onSubmitThumb}>Upload Thumbnail</button>
          </div>
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
      <Preview title={title} thumbnailFbUrl={thumbnailFbUrl} mdContent={md?.content} />
    </div>
  );
}

export default Upload;
