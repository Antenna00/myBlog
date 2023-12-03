"use client";
import React, {
  useEffect,
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import Image from "next/image";
import { FileUploader } from "react-drag-drop-files";
import "./upload.css";
import Preview from "../preview/Preview";
import { storage } from "../firebase/Firebase";
import {
  uploadBytes,
  getDownloadURL,
  deleteObject,
  ref,
} from "firebase/storage";

//TODO Add the visibility of when items are uploaded
function Upload() {
  // const boxArea = <div className='dropArea'>Add file </div>
  const [md, setMd] = useState<{
    content: string | ArrayBuffer | null;
    name: string;
  } | null>({ content: "", name: "" });
  const [mdUploaded, setMdUploaded] = useState<boolean>(false);
  //TODO This should be deleted later as markdown will be uploaded to the DB
  const [mdUrl, setMdUrl] = useState<string>(""); //Firebase Path for Markdown.
  const [error, setError] = useState<string>(""); //Store the Error Messages.

  //Handle Images
  const [hasImage, setHasImage] = useState<boolean>(false);
  const [imageUploaded, setImageUploaded] = useState<boolean>(false);
  const [imageFileArray, setImageFileArray]: [
    File[],
    Dispatch<SetStateAction<File[]>>,
  ] = useState<File[]>([]); //Store the File Data
  const [imagePathArray, setImagePathArray] = useState<string[]>([]); //Store the local Path
  const [imageFbUrlArray, setImageFbUrlArray] = useState<string[]>([]); //Store the Firebase Path

  //Markdown Descriptions
  const [title, setTitle] = useState<string>("");
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

  //From Temporal Url => Hosting Url
  const ripTemporalUrlFromMarkdown = async (mdContent:string) => {
    const matches = mdContent.matchAll(/!\[.*?\]\((.*?)\)/g);
    const imgTagMatches = mdContent.matchAll(/<img.*?src=['"](.*?)['"].*?>/g);

    const replacedPromises = Array.from(matches, async (match) => {
      const imagePath = match[1];
      return { match, imagePath, isImgTag: false };
    });

    const imgTagReplacedPromises = Array.from(imgTagMatches, async (match) => {
      const imagePath = match[1];
      return { match, imagePath, isImgTag: true };
    });

    const replacedResults = await Promise.all([
      ...replacedPromises,
      ...imgTagReplacedPromises,
    ]);

    let modifiedContent = mdContent;

    const urlPromises = replacedResults.map(
      async ({ match, imagePath, isImgTag }) => {
        const index = parseInt(imagePath, 10);
        const hostingUrl = imageFbUrlArray[index];
        if (hostingUrl) {
          if (isImgTag) {
            // Preserve <img> tag
            modifiedContent = modifiedContent.replace(
              match[0],
              `<img src="${hostingUrl}" alt="alt text">`
            );
          } else {
            // Replace ![] path with hosting URL
            modifiedContent = modifiedContent.replace(
              match[0],
              `![alt text](${hostingUrl})`
            );
          }
        } else {
          console.error(`Hosting URL not found for imagePath: ${imagePath}`);
        }
      }
    );

    await Promise.all(urlPromises);

    // Now, modifiedContent should have all the replacements done.
    setMd({ content: modifiedContent, name: md!.name });
    return modifiedContent;
  };

  //When image is uploaded and FbUrls are populated
  useEffect(() => {
    const handleEffect = async () => {
      if (imageFbUrlArray.length > 0) {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const mdContent = event?.target?.result;

          if(typeof mdContent === 'string'){
          const modifiedContent = await ripTemporalUrlFromMarkdown(mdContent);
          setMd({ content: modifiedContent, name: md!.name });
          setError("");
          }

        };

        if(md!.content !== null) {
          reader.readAsText(
            new Blob([md!.content], { type: "text/markdown" }),
            "UTF-8"
          );
        }
      }
    };
    handleEffect();
  }, [imageFbUrlArray]); // This effect depends on imageFbUrlArray


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

  //TODO debug
  useEffect(() => {
    if (imageFileArray.length > 0) console.log(imageFileArray);
  }, [imageFileArray]);

  const handleImg = (
    event: ChangeEvent<HTMLInputElement>,
    inputIndex: number,
  ) => {
    const updatedImageFileArray: File[] = Array.from(event.target.files || []);
    setImageFileArray((prevArray: File[]) => {
      const newArray: File[] = [...prevArray];
      newArray[inputIndex] = updatedImageFileArray[0]; // Assuming you want the first file from the FileList
      return newArray;
    });
  };

  //ImagePathの設定
  //TODO debug
  useEffect(() => {
    if (imagePathArray.length > 0) {
      console.log("Updated imagePathArray:", imagePathArray);
      setHasImage(true);
      console.log(hasImage);
    }
  }, [imagePathArray, hasImage]);

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

  const updateImageFbUrlArray = (urls: string[]) => {
    setImageFbUrlArray(urls);
    setImageUploaded(true);
    console.log("Updated imageFbUrlArray:", urls);
  };

  //Submit Images
  const onSubmitImages = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("onSubmitImages is Running");

    setError("");

    //Error handling if Image is selected but deleted afterwards
    const undefinedIndex = imageFileArray.findIndex(
      (file) => file === undefined,
    );

    //Error handling: when there is undefined index while there are no enough imageFile array compare to imagePatharray
    if (
      undefinedIndex !== -1 &&
      imageFileArray.length < imagePathArray.length
    ) {
      setError(
        "You need to sumbit " +
          (imagePathArray.length - imageFileArray.length) +
          " more file(s) and unsetting images",
      );
      return;
    }

    if (undefinedIndex !== -1) {
      let numArray = [];
      for (let i = 0; i < imageFileArray.length; i++) {
        if (imageFileArray[i] === undefined) {
          numArray.push(i + 1);
        }
      }
      setError("Image is not selected at No." + numArray + " image");
      return;
    }

    //error handling
    if (imageFileArray.length === 0) {
      setError("File is not selected");
      return;
    } else if (imageFileArray.length < imagePathArray.length) {
      setError(
        "You need to sumbit " +
          (imagePathArray.length - imageFileArray.length) +
          " more file(s)",
      );
      return;
    }
    //TODO fix date
    const jpDate = new Date()
      .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replaceAll("/", "-");
    console.log(jpDate);

    const uploadedUrls = await Promise.all(
      imageFileArray.map(async (imageFile) => {
        const storageRef = storage.ref(`images/${jpDate}/${md?.name}/${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        const url = await getDownloadURL(snapshot.ref);
        return url;
      }),
    );

    console.log("Uploaded URLs:", uploadedUrls);

    // Update imageFbUrlArray
    updateImageFbUrlArray(uploadedUrls);
  };

  //Submit Thumbnail
  const onSubmitThumb = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("onSubmitThumb is running");
    setError("");

    //If thumbnail is already uploaded, previous thumbnail must be deleted.
    if (thumbnailUploaded) {
      try {
        console.log("Deleting previous thumb");
        const fileRef = ref(storage, thumbnailFbPath);
        deleteObject(fileRef);

        //Initialize the thumbnail path and url
        setThumbnailFbPath("");
        setThumbnailFbUrl("");
        setThumbnailUploaded(false);
      } catch (error) {
        console.error("Error Deleting ");
      }
    }

    //Error handling: When thumbail has not been selected
    if (thumbnail === undefined || null) {
      setError("Thumbnail is not choosen");
      return;
    }

    //Get the date in fromat of YYYY-MM-DD
    const jpDate = new Date()
      .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replaceAll("/", "-");
    console.log(jpDate);

    //set the storage path of firebase
    const storageRef = storage.ref(
      `images/${jpDate}/${md?.name}/thumbnails/${thumbnail.name}`,
    );
    setThumbnailFbPath(`images/${jpDate}/thumbnails/${thumbnail.name}`);
    const snapshot = await uploadBytes(storageRef, thumbnail);
    const url = await getDownloadURL(snapshot.ref);

    setThumbnailFbUrl(url);
    setThumbnailUploaded(true);
  };

  //TODO button is becoming white bg
  //Submit markdown, title and category
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("onSubmit is running");
    event.preventDefault();
    setError("");
    console.log(imageUploaded);

    //TODO Make sure to check title are filled before sumitting
    //TODO thumbnail as well. you send everything to the databse from here

    if(!thumbnailUploaded) {
      setError("Thumbnail is not updated");
      return;
    }
    //Images are not uploaded yet despite of having images
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

    const jpDate = new Date()
      .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replaceAll("/", "-");
    console.log(jpDate);

    // アップロード処理
    console.log("Uploading MD");
    const storageRef = storage.ref(`markdown/${jpDate}/${md?.name}`); //TODO change the utcData path later

    if (md?.content !== undefined && md.content !== null) {
      uploadBytes(
        storageRef,
        new Blob([md?.content], { type: "text/markdown" }),
      ).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        //get the image url that replaces with markdown temp url
        getDownloadURL(snapshot.ref).then((url) => {
          setMdUrl(url);
          setMdUploaded(true);
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

            {md!.content && (
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
             )} 
             <div className="flex gap-10">
            <button className="uploadButton" type="submit">{!mdUploaded ? (<p>Upload Markdown</p>) : (<p className="text-red-500">Uploaded!</p>)}</button>

              {/* //TODO discard button to reset all, delete all images if exist and refresh at last. */}
            <button className="discardButton"><p className=" text-white">Discard All</p></button>
            </div>
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
            <button className="uploadButton" onClick={onSubmitThumb}>
              {!thumbnailUploaded ? (<p>Upload Thumbnail</p>) : (<p className="text-red-500">Reupload Thumbnail</p>)}
            </button>
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
                        required
                        className="w-max h-max mt-2"
                      />
                    );
                  })}
                  <button type="submit">Upload Images</button>
                </form>
              </div>
            ) : (
              <p>{!imageUploaded ? ("There are no images detected.") : ("Image is Uploaded!")}</p>
            )}
          </div>
        </div>
      </div>
      <Preview
        title={title}
        thumbnailFbUrl={thumbnailFbUrl}
        mdContent={md?.content}
      />
    </div>
  );
}

export default Upload;
