"use client"
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

const Title = () => {


  return (
    <>
      <h1 className="text-[6rem] xl:text-[72px] lg:text-[60px] sm:text-[40px]">
        <p className="underline" />
        <span className=' whitespace-pre'>
        <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Welcome to \n')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .typeString(`Antenna's Transmission`)
                .start();
            }}
            options={{
              delay:70,
            }}
          />
        </span>
      </h1>
    </>
  );
};

export default Title;