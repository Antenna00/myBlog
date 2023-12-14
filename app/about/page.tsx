"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFileCode, FaDatabase, FaPaintRoller } from "react-icons/fa";
import { FaPeopleGroup, FaLanguage } from "react-icons/fa6";
import "./aboutStyles.css";
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

function Page() {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    setLanguage(language !== "English" ? "English" : "Japanese");
  };

  return (
    <div className="flex w-full h-full flex-col gap-10">
      {/* AboutMe Container */}
      <div className="flex w-full rounded-3xl h-[300px] mt-20 gap-10 relative justify-center px-5 items-center bg-blue-100">
        {/* Iamge Container */}
        <div className="relative flex">
          <Image src="/antora/antora_prof.png" alt="" width={400} height={400} className="relative object-fit rounded-full" />
        </div>

        {/* Info container */}
        <div className="relative text-black flex flex-col gap-5 w-[80%]">
          <h1 className="text-3xl font-bold">Antenna's Profile</h1>
          {language !== "English" ? (
            <p className="">
              大阪府大阪市出身、中学2年途中からタイのインターナショナルスクールに転学。
              <br />
              その後はイギリスのUniversity of East AngliaにてBSc Environmental
              Scienceを修める。
              <br />
              日本に帰国後は環境科学分野での営業職を経てからエンジニアに転職。
              <br />
              SES業態で、エンジニアとして主に開発やコンサル業務等を行っている。
              <br />
            </p>
          ) : (
            <p className="">
              My handlename is Antenna.
              <br />I currently work as IT Consultant/Engineer/PM for Japanese
              firm. <br />
              Most of the work I do now is not directl
            </p>
          )}
          <div className="flex justify-between">
            <Link href="/contact">
              <button className="transition-all duration-300 border-2 border-blue-200 p-2 hover:bg-blue-300">
                Contact Me
              </button>
            </Link>
            <button
              className="transition-all duration-300 border-2 border-red-200 p-2 hover:bg-red-300"
              onClick={toggleLanguage}
            >
              Language
            </button>
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
              イーストアングリア大学：入学
            </div>
            <div className="descr">
              国際バカロレア資格を取得後はイギリスのイーストアングリア大学に進学する。
              2011年の東日本大震災の被災を遠方からニュースで連日聞く中で、
              環境科学を学びたい意志を強くもち、その分野で見識の深い、イーストアングリア大学で環境科学を専攻する。
            </div>
          </li>
          <li className="">
            <div className="date after:border-[0.3px] bg-[color:#FBCA3E] before:bg-[color:#FBCA3E] after:bg-[color:#FBCA3E]">
              2020
            </div>
            <div className="title underline font-bold">日本に帰国後就職</div>
            <div className="descr">
              イーストアングリア大学を卒業後は日本に帰国し、太陽光発電機器の技術営業職に就くが、
              営業として技術に関わるに連れて自らモノづくりに携わりたいという気持ちが強くなっていき、SES事業会社、S社へ転職する。
            </div>
          </li>
          <li className="">
            <div className="date after:border-[0.3px] after:border-black bg-[color:#E24A68] before:bg-[color:#E24A68] after:bg-[color:#E24A68]">
              2021
            </div>
            <div className="title underline font-bold">某警察署　交通事故管理システム</div>
            <div className="descr">
              APとして改修案件に開発工程から携わる。
              ウォーターフォール開発の中で設計書修正、開発着手からテスト設計や実施まで幅広く関わる。
              技術スタック：Spring Framework, ThymeLeaf, MyBatis, 
            </div>
          </li>
          <li className=" ">
            <div className="date after:border-[0.3px] after:border-black bg-[color:#1B5F8C] before:bg-[color:#1B5F8C] after:bg-[color:#1B5F8C]">
              2022
            </div>
            <div className="title underline font-bold">某市役所　財務および旅費管理システム</div>
            <div className="descr">
              改修案件に開発工程から携わる。
              WBSの管理を始め、開発工程にも自ら着手する。
            </div>
          </li>
          <li className="">
            <div className="date after:border-[0.3px] after:border-black bg-[color:#4CADAD] before:bg-[color:#4CADAD] after:bg-[color:#4CADAD]">2023</div>
            <div className="title underline font-bold">某自動車会社　サービス運用準備</div>
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
