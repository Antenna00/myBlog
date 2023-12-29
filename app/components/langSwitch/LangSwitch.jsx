"use client"
import { getCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react'
import { GrLanguage } from "react-icons/gr";
import { useRouter } from '@/navigation';
import { usePathname } from '@/navigation';
import { Link } from '@/navigation';
import Router from 'next/router';

function LangSwitch() {
  const [theme, setTheme] = useState(global.window?.__theme || 'light');



  const setBackToLight = () => {
    global.window?.__setPreferredTheme('light')
  }

  const resetTheTheme = () => {
    global.window.__onThemeChange = setTheme;
  }

  // const refreshPage = async() => {
  //   window.location.reload(true);
  //   console.log("reloaded")
  // };

  const push = async(targetLocale) => {
    router.push(pathname, { locale: targetLocale }); // Use `await` for push
    console.log("pushed")
  }


  const router = useRouter();
  const cookieValue = getCookie("NEXT_LOCALE")

  const pathname = usePathname();

  //TODO I dont know why this is happening. the value in local storage and what it is on view is different > theme :(
  const langToggle = async () => {
    const targetLocale = cookieValue === 'ja' ? 'en' : 'ja';
    await push(targetLocale)
    setBackToLight()
  };

  return (
    <div>
      <button className=' bg-red-200' onClick={langToggle}>
        <GrLanguage  /> 
      </button>
    </div>
  )
}

export default LangSwitch