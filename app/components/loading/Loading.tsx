import React from 'react'
import Image from 'next/image';

function Loading() {
  return (
    <div className="flex h-[100vh] w-[100%] relative">
        {/* Image Container */}
        <div className='h-full w-full relative flex justify-center items-center'>
            <Image src="/antora/antora_loading.jpg" width={700} height={700} alt=""/>
        </div>
    </div>
  )
}

export default Loading