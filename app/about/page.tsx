import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFileCode, FaDatabase, FaPaintRoller } from "react-icons/fa";
import { FaPeopleGroup, FaLanguage } from "react-icons/fa6";

const skillData = [
  {
    name: "Programming Languages",
    experience: "3+ Years",
    icon: <FaFileCode size="6em" />,
    descriptions: "",
  },
  {
    name: "SQL",
    experience: "3+ Years",
    icon: <FaDatabase size="6em" />, //TODO JSX ELEMENT or ICON iamges
    descriptions: "",
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
    descriptions: "",
  },
  {
    name: "Web Design",
    experience: "3+ Years",
    icon: <FaPaintRoller size="6em" />, //TODO JSX ELEMENT or ICON iamges
    descriptions: "",
  },
];

function Page() {
  return (
    <div className="flex w-full h-full flex-col gap-10">
      {/* AboutMe Container */}
      <div className="flex w-full rounded-3xl h-[300px] mt-20 gap-10 relative justify-center px-5 items-center bg-blue-100">
        {/* Iamge Container */}
        <div className="relative h-[200px] w-[500px] flex">
          <Image src="/profpic.png" alt="" fill className=" object-cover" />
        </div>

        {/* Info container */}
        <div className="relative text-black flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Antenna</h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste cum
            facilis tempore in! Saepe magnam quam illo impedit fugit ex,
            nesciunt amet. Sint sed reprehenderit officiis excepturi, tempora
            dolor velit.
          </p>
          <Link href="/contact">
            <button className=" border-2 border-blue-200 p-2">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <hr />
      {/* SKILL */}
      <div>
        <h1 className="text-3xl font-bold text-center">SKILLS</h1>

        <div className="grid-cols-3 grid-flow-row grid gap-5 mt-5">
          {skillData.map((data) => {
            return (
              <div className="flex flex-1 flex-col h-[300px] border-2 border-blue-700 rounded-3xl justify-center items-center">
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

      {/* Education */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-center">EDUCATION</h1>
        <div className="my-40 mx-10">
          <div className="relative h-5 bg-blue-600 rounded-full"></div>
          <div className="flex -mt-8 relative  justify-evenly w-full">
            <div className="flex flex-col relative">
              <div className="bg-yellow-100 h-[50px] w-[50px] rounded-full" />
              <div className="absolute top-14 h-[50px] ">
                <p className=" font-bold">British International School</p>
              </div>
            </div>
            <div className=" bg-yellow-100 h-[50px] w-[50px] rounded-full"></div>
            <div className=" bg-yellow-100 h-[50px] w-[50px] rounded-full"></div>
            <div className=" bg-yellow-100 h-[50px] w-[50px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
