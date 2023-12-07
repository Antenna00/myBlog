"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

//TODO Hovering button doesnt trigger the cursor scale
//TODO Hovering the themetoggle component get cursor
function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorTextA = document.getElementById("cursor-text");
    const buttons = document.querySelectorAll("button");
    const fileInputs = document.querySelectorAll("FileUploader");
    const textInputs = document.querySelectorAll("input");
    //
    const onMouseMove = (event: MouseEvent) => {
      gsap.set(cursor, { x: event.clientX - 10, y: event.clientY - 10 });
    };

    document.addEventListener("mousemove", onMouseMove);
    //

    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLAnchorElement;

      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4 });
        if (cursorTextA) {
          // cursorTextA.style.display = "block"; //TODO　これなんでつけてたんだっけ？ => circle内にviewって出るよう？
        }
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
      if (cursorTextA) {
        // cursorTextA.style.display = "none";
      }
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", onMouseEnterLink);
      button.addEventListener("mouseleave", onMouseLeaveLink);
    })

  });
  return (
    <div id="custom-cursor" className="custom-cursor">
    </div>
  );
}

export default Cursor;
