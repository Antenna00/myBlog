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
    descriptions: "B",
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
    descriptions: "Bilingual in Japanese and English",
  },
  {
    name: "Web Design",
    experience: "3+ Years",
    icon: <FaPaintRoller size="6em" />, //TODO JSX ELEMENT or ICON iamges
    descriptions: "",
  },
];

function Page() {
  console.log("Rendering on the client side:", typeof window !== "undefined");
  return (
    <div className="flex w-full h-full flex-col gap-10">
      {/* AboutMe Container */}
      <div className="flex w-full rounded-3xl h-[300px] mt-20 gap-10 relative justify-center px-5 items-center bg-blue-100">
        {/* Iamge Container */}
        <div className="relative h-[200px] w-[500px] flex">
          <Image src="/profpic.png" alt="" fill className=" object-cover" />
        </div>

        {/* Info container */}
        <div className="relative text-black flex flex-col gap-5 w-[80%]">
          <h1 className="text-3xl font-bold">Antenna</h1>
          <p className="">
            大阪府大阪市出身、中学2年途中からタイのインターナショナルスクールに転学。<br />
            その後はイギリスのUniversity of East AngliaにてBSc Environmental Scienceを修める。<br />
            日本に帰国後は環境科学分野での営業職を経てからエンジニアに転職。<br />
            SES業態で、エンジニアとして主に開発やコンサル業務等を行っている。<br />
          </p>
          <Link href="/contact">
            <button className="transition-all duration-300 border-2 border-blue-200 p-2 hover:bg-blue-300">
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

      {/* Education */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-center">EDUCATION</h1>
        <div className="my-40 mx-10">
          <div className="relative h-5 bg-blue-600 rounded-full"></div>
          <div className="flex -mt-8 relative justify-evenly w-full">
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

      <div className="timeline">
        <h1>UL timeline cards</h1>
        <ul className="">
          <li className="--accent-color:#41516C">
            <div className="date">2002</div>
            <div className="title">Title 1</div>
            <div className="descr">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              itaque hic quibusdam fugiat est numquam harum, accusamus suscipit
              consequatur laboriosam!
            </div>
          </li>
          <li className="--accent-color:#FBCA3E">
            <div className="date">2007</div>
            <div className="title">Title 2</div>
            <div className="descr">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              adipisci nobis nostrum vero nihil veniam.
            </div>
          </li>
          <li className="">
            <div className="date bg-[color:#E24A68] before:bg-[color:#E24A68] after:bg-[color:#E24A68]">
              2013
            </div>
            <div className="title">Title 3</div>
            <div className="descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              minima consequuntur soluta placeat iure totam commodi repellendus
              ea delectus, libero fugit quod reprehenderit, sequi quo, et
              dolorum saepe nulla hic.
            </div>
          </li>
          <li className="--accent-color:#1B5F8C">
            <div className="date">2017</div>
            <div className="title">Title 4</div>
            <div className="descr">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              cumque.
            </div>
          </li>
          <li className="--accent-color:#4CADAD">
            <div className="date">2022</div>
            <div className="title">Title 5</div>
            <div className="descr">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
              non.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
