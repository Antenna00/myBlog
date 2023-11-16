"use client"
import React, { useEffect } from "react";
import gsap from "gsap";

function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text");
    const cursorTextA = document.getElementById("cursor-text");
    //
    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };
    
    document.addEventListener("mousemove", onMouseMove);
    //


    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLAnchorElement;

      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4 });
        if (cursorTextA) {
          cursorTextA.style.display = "block";
        }
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale:1 });
      if (cursorTextA) {
        cursorTextA.style.display = "none";
        
      }
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
  });
  return (

    <div
      id="custom-cursor"
      className="custom-cursor"
    >
      <span
        id="cursor-text"
        className="text-[5px] font-extrabold tracking-[1px] hidden"
      >
        View
      </span>
    </div>
  );
}

export default Cursor;
