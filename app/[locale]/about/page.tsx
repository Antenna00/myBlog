import Image from "next/image";
import Link from "next/link";
import { FaFileCode, FaDatabase, FaPaintRoller } from "react-icons/fa";
import { FaPeopleGroup, FaLanguage } from "react-icons/fa6";
import "./aboutStyles.css";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const skillData = [
  {
    name: "Programming Languages",
    experience: "3+ Years",
    icon: <FaFileCode size="6em" />,
    descriptions: "Java, Javascript, Typescript, HTML/CSS, PHP",
  },
  {
    name: "SQL",
    experience: "3+ Years",
    icon: <FaDatabase size="6em" />, //TODO JSX ELEMENT or ICON iamges
    descriptions: "mySQL, mongoDB, OracleDB",
  },
  {
    name: "Project Management",
    experience: "3+ Years",
    icon: <FaPeopleGroup size="6em" />, //TODO JSX ELEMENT or ICON iamges
    descriptions: "",
  },
  {
    name: "Languages",
    experience: "3+ Years",
    icon: <FaLanguage size="6em" />, //TODO JSX ELEMENT or ICON iamges
    descriptions: "Bilingual in Japanese and English",
  },
  {
    name: "Web Design",
    experience: "3+ Years",
    icon: <FaPaintRoller size="6em" />, //TODO JSX ELEMENT or ICON iamges
    descriptions: "Figma",
  },
  {
    name: "Framework",
    experience: "3+ Years",
    icon: <FaPaintRoller size="6em" />, //TODO JSX ELEMENT or ICON iamges
    descriptions: "Spring, WPF, NextJS, React, Laravel",
  },
];

function Page({params: {locale}} : {params: {locale:string}}) {
  unstable_setRequestLocale(locale);
  const textAbout = useTranslations('About');

  return (
    <div className="flex w-full h-full flex-col gap-10">
      {/* AboutMe Container */}
      <div className="flex w-full rounded-3xl h-[300px] mt-20 gap-10 relative justify-center px-5 items-center bg-blue-100">
        {/* Iamge Container */}
        <div className="relative flex">
          <Image src="/antora/antora_prof.png" alt="" width={400} height={400} className="relative object-fit rounded-full" />
        </div>

        {/* Info container */}
        <div className="relative text-black flex flex-col gap-5 w-[70%] pr-10">
          <h1 className="text-3xl font-bold">Antenna's Profile</h1>
            
            <p className="">
              {textAbout("profile")}
            </p>

          <div className="flex justify-between">
            <Link href="/contact">
              <button className="transition-all duration-300 border-2 border-black p-2 hover:bg-blue-300">
                Contact Me
              </button>
            </Link>

          </div>
        </div>
      </div>
      <hr />
      {/* SKILL */}
      <div>
        <h1 className="text-3xl font-bold text-center">SKILLS</h1>

        <div className="grid-cols-3 grid-flow-row grid gap-5 mt-5">
          {skillData.map((data, i) => {
            return (
              <div
                key={i}
                className="flex flex-1 flex-col h-[300px] border-2 border-blue-700 hover:bg-blue-300 transition-all duration-300 rounded-3xl justify-center items-center"
              >
                <div className=" flex flex-col relative justify-center items-center gap-5">
                  {/* Icon container */}
                  {data.icon}
                  {/* Information */}
                  <p className="text-xl font-bold">{data.name}</p>
                  {/* Experience */}
                  <p className="text-red-300">{data.experience}</p>
                  {/* description containers */}
                  <div>{data.descriptions}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mt-10">BIOGRAPHY</h1>

      <div className="timeline">
        <ul className="">
          <li className="">
            <div className="date after:border-[0.3px] bg-[color:#41516C] before:bg-[color:#41516C] after:bg-[color:black]">
              2017
            </div>
            <div className="title underline font-bold">
              {textAbout("biography_2017_title")}
            </div>
            <div className="descr">
              {textAbout("biography_2017_desc")}
            </div>
          </li>
          <li className="">
            <div className="date after:border-[0.3px] bg-[color:#FBCA3E] before:bg-[color:#FBCA3E] after:bg-[color:#FBCA3E]">
              2020
            </div>
            <div className="title underline font-bold">{textAbout("biography_2020_title")}</div>
            <div className="descr">
            {textAbout("biography_2020_desc")}
            </div>
          </li>
          <li className="">
            <div className="date after:border-[0.3px] after:border-black bg-[color:#E24A68] before:bg-[color:#E24A68] after:bg-[color:#E24A68]">
              2021
            </div>
            <div className="title underline font-bold">{textAbout("biography_2021_title")}</div>
            <div className="descr">
            {textAbout("biography_2021_desc")}
            </div>
          </li>
          <li className=" ">
            <div className="date after:border-[0.3px] after:border-black bg-[color:#1B5F8C] before:bg-[color:#1B5F8C] after:bg-[color:#1B5F8C]">
              2022
            </div>
            <div className="title underline font-bold">{textAbout("biography_2022_title")}</div>
            <div className="descr">
              {textAbout("biography_2022_desc")}
            </div>
          </li>
          <li className="">
            <div className="date after:border-[0.3px] after:border-black bg-[color:#4CADAD] before:bg-[color:#4CADAD] after:bg-[color:#4CADAD]">2023</div>
            <div className="title underline font-bold">{textAbout("biography_2023_title")}</div>
            <div className="descr">
              {textAbout("biography_2023_desc")}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
