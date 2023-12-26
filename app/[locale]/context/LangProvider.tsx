"use client"

import React, { useContext } from 'react'

import { useEffect, useState } from 'react'
import { createContext, ReactNode } from 'react'

type DataType = {
    language: string;
}

interface LangContextProps {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}

const LangContext = createContext<LangContextProps>({
    language: "english",
    setLanguage: () : string => ""
}
)

export const LangProvider = ({children} : {children: ReactNode}) => {
    const [language, setLanguage] = useState("english");

    return(
        <LangContext.Provider value={{language, setLanguage}}>
            {children}
        </LangContext.Provider>
    )
}

export const useLangContext = () => useContext(LangContext);
