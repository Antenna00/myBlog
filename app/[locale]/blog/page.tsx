import React from 'react'
import CardList from '@/app/components/cardList/CardList'
import Menu from '@/app/components/menu/Menu'
import Image from 'next/image'

const getCatImg = async (cat:string) => {
  const res = await fetch(`http://localhost:3000/api/categories?cat=${cat || ""}`, {
    cache: "no-store",
  });

  if(!res.ok) {
    throw new Error(`Failed: ${res.status}`);
  }

  return res.json();
}

const getCatParam = async (searchParams:any) => {
  return searchParams.cat;
}

async function page({searchParams} : {searchParams : {page:string; cat:string}}) {

  //transition from homepage -> cat is populated
  //transition from langswitch -> cat is not populated
  const page = parseInt(searchParams.page) || 1;
  const cat =  await getCatParam(searchParams);

  const CatData = await (await getCatImg(cat)).catImage[0];
  // console.log(CatData);

  return (
    <>
    <div>
      <div className='flex bg-blue-800/30 h-[300px] px-[10px] py-[5px] my-[100px] relative justify-evenly items-center'>
        {/* Title */}
        <h1 className=' text-center text-[35px] font-bold capitalize'>
          {CatData.title}
          </h1>
        <Image src={CatData.img} alt="" width={400} height={400} className='rounded-full'/>
        </div>
        {/* Content Container */}
        <div className='flex gap-[50px]'>
            <CardList page={page} cat={cat}/>
            <Menu />
        </div> 
    </div>
    </>
  )
}

export default page