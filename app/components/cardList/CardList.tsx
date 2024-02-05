import React from "react";
import Pagination from "../pagination/Pagination";
import Card from "@/app/components/card/Card";

export type postDataType = 
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
  }

const getPostsData = async (page:number, cat:string) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if(!res.ok) {
    throw new Error(`Failed: ${res.status}`);
  }

  return res.json();
}

async function CardList({page, cat} : {page:number; cat?:string}) {

  const {posts, count} = await getPostsData(page, cat!);
  const POST_PER_PAGE = 3;
  const hasPrev = page > 1 //If true, user can go back the page
  const hasNext = count - (POST_PER_PAGE * page) > 0 //if true, user can go to next page

  return (
    <>
    <div className=" flex flex-col flex-[5]">
      {/* Title */}
      <h1 className="text-3xl font-bold my-12">Recent Posts</h1>

      {/* Cards Container */}
      <div>
        {posts.map((item:postDataType, i:number)=> {
          return <Card  key={item.id} item={item}/>
        })}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
    </>
  );
}

export default CardList;
