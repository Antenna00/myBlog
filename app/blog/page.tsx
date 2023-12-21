import React from 'react'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'
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
        {/* Title */}
        <h1 className='bg-orange-400 text-white px-[10px] py-[5px] mt-10 text-center text-[35px] font-bold capitalize'>{cat} </h1>
        <Image src={firstCatData.img} alt="" width={100} height={100}/>
        
        {/* Content Container */}
        <div className='flex gap-[50px]'>
            <CardList page={page} cat={cat}/>
            <Menu />
        </div> 
    </div>
  )
}

export default page