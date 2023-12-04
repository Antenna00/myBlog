import React, { SyntheticEvent, useEffect, useState } from 'react'

//TODO What if I added other A tag link? I gotta consider that 

const YoutubeBlock = ({ url, children } : {url:string, children:React.ReactNode}) => {

  
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\?v=|[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);

    const [iframeWidth, setIframeWidth] = useState<string>('560px');
    const [iframeHeight, setIframeHeight] = useState<string>('315px');
    
    if (!videoId) {
      return <a href={url}>{children}</a>
    }

  
    // useEffect(() => {
    //   // Get the width of the inner wrapper with a margin of 1rem
    //   const innerWrapper = document.querySelector('.innerWrapper');
    //   const innerWrapperWidth = innerWrapper?.clientWidth || 0;
    //   const innerWrapperHeight = innerWrapper?.clientHeight || 0;
  
  
    //   // Set the iframe width to fit the inner wrapper width
    //   setIframeWidth(`${Math.min(innerWrapperWidth, 560)}px`);

    //   // Calculate the aspect ratio based on the default width (560px)
    //   const aspectRatio = 560 / 315; // Default YouTube aspect ratio
    //   // Calculate the new height while maintaining the aspect ratio
    //   const newHeight = `${Math.min(innerWrapperWidth / aspectRatio, innerWrapperHeight)}px`;
    //   setIframeHeight(newHeight);
    // }, [url]);
    
    return (
        <span className='flex relative justify-center items-center'>
        <iframe
          title="YouTube Video"
          width={560}
          height={315}
          src={`https://www.youtube.com/embed/${videoId[1]}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        </span>

    );
  };

export default YoutubeBlock