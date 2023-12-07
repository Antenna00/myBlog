import React, { useState, SyntheticEvent, useEffect } from 'react';

interface BlogImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // Make src optional
  src?: string;
}
const BlogImage: React.FC<BlogImageProps> = ({ src, alt, ...rest }) => {
  const [imageSize, setImageSize] = useState<{ width: string; height: string }>({ width: '50px', height: 'auto' });
  
  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = event.currentTarget;
    const { naturalWidth, naturalHeight } = imgElement;

    const maxWidth = 5000;
    const innerWrapperWidth = document.querySelector('.innerWrapper')?.clientWidth || 0;
    console.log(innerWrapperWidth);

    if(innerWrapperWidth >= 10000) {
      const maxWidth = naturalWidth;
      const newWidth = Math.min(innerWrapperWidth, maxWidth);
      const aspectRatio = naturalWidth / naturalHeight;
      const newHeight = newWidth / aspectRatio;
      setImageSize({
        width: `${newWidth}px`,
        height: `${newHeight}px`,
      });
      return;
    }
    // Calculate new dimensions while maintaining the aspect ratio
    const aspectRatio = naturalWidth / naturalHeight;
    const newWidth = Math.min(naturalWidth, maxWidth);
    const newHeight = newWidth / aspectRatio;

    setImageSize({
      width: `${newWidth}px`,
      height: `${newHeight}px`,
    });
  };

  const handleWindowResize = () => {
    const imgElement = document.querySelector('.blog-image') as HTMLImageElement | null;
    if (imgElement && imgElement.complete) {
      handleImageLoad({ currentTarget: imgElement } as SyntheticEvent<HTMLImageElement, Event>);
    }
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <span className='flex relative justify-center items-center'>
      <img
        src={src}
        alt={alt}
        width={imageSize.width}
        height={imageSize.height}
        onLoad={handleImageLoad}
        {...rest}
        className="mb-8"
      />
    </span>
  );
};

export default BlogImage;