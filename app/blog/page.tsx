import React from 'react'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'

function page() {
  return (
    <div>
        {/* Title */}
        <h1 className='bg-orange-400 text-white px-[10px] py-[5px] mt-10 text-center text-[35px] font-bold'>Style Blog</h1>
        {/* Content Container */}
        <div className='flex gap-[50px]'>
            <CardList />
            <Menu />
        </div> 
    </div>
  )
}

export default page