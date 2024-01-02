import React from "react";
import Menu from "@/app/components/menu/Menu";
import Image from "next/image";
import Comments from "@/app/components/comments/Comments";
import PostView from "@/app/components/postView/PostView";

const getData = async (slug:string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${slug}`,
    {
      cache: "no-store",
    }
  );

  if(!res.ok) {
    throw new Error("Failed to fetch the post");
  }

  return res.json();
}

type postDataType = 
  {
    id:string
    slug:string
    title:string
    descMD:string
    thumbImgUrl:string
    view:number
    likes:number
    userEmail:string
    catSlug:string
    imgUrls:string[]
    dateUploaded:Date
    dateUpdated:Date
    user: {
      name: string
      image: string
    }
  }

interface paramsPropType {
  slug : string,
}

async function SinglePage({ params } : { params: paramsPropType}) {
  const { slug } = params;
  const data:postDataType = await getData(slug)

  const dateUploaded = new Date(data.dateUploaded);
  const date = dateUploaded.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

  return (
    <div className="mt-[70px]">
      {/* Info Container */}
      <div className="flex items-center gap-[50px] border-b-[1px]">
        {/* Text Container */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-6xl mb-[50px] xl:text-5xl lg:text-4xl">
            {data?.title}
          </h1>
          {/* User */}
          <div className="flex items-center gap-[20px]">
            {/* User Image Container */}
            <div className="w-[50px] h-[50px] relative">
              {data.user.image ? (
              <Image
                src={`https://lh3.googleusercontent.com/a/ACg8ocJm__fx4vkIAx7WteU0kT4V9aPTjygYK4YL2IoreBmC=s96-c`}
                alt=""
                fill
                className="rounded-full object-cover"
              />) : (
                <Image
                src={"/no_image.jpg"}
                alt=""
                fill
                className="rounded-full object-cover"
              />
              )}
              
            </div>
            {/* User Text Container */}
            <div className="flex flex-col gap-[1px] text-[color:var(--softTextColor)]">
              <span className="text-[20px] font-medium xl:text-[15px]">{data?.user.name}</span>
              <span className="xl:text-[13px]">{date}</span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 relative h-[350px]">
        {data.thumbImgUrl ? ( 
              <Image
                src={data.thumbImgUrl}
                alt=""
                fill
                className="object-cover"
              />) : 
              (<Image
                src="/no_image.jpg"
                alt=""
                fill
                className="object-cover"
              />)}
        </div>
      </div>
      {/* Content */}
      <div className="flex gap-[50px] xl:gap-[30px]">
        {/* Post */}
        <div className="flex flex-col flex-[6] mt-[60px]">
          <PostView content={data.descMD}/>
      
          <Comments postSlug={slug}/>
        </div>
        {/* Menu Container */}
        <div className="flex-[2] xl:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
