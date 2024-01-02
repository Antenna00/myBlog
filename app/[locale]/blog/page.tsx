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

async function page({searchParams} : {searchParams : {page:string; cat:string}}) {

  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat;
  const firstCatData = await (await getCatImg(cat)).catImage[0];

  return (
    <div>
      <div className='flex bg-blue-800/30 h-[300px] px-[10px] py-[5px] my-[100px] relative justify-evenly items-center'>
        {/* Title */}
        <h1 className=' text-center text-[35px] font-bold capitalize'>
          {cat}
          </h1>
        <Image src={firstCatData.img} alt="" width={400} height={400} className='rounded-full'/>
        </div>
        {/* Content Container */}
        <div className='flex gap-[50px]'>
            <CardList page={page} cat={cat}/>
            <Menu />
        </div> 
    </div>
  )
}

export default page