"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
function Cursor() { 
  const cursorRef = React.useRef(null);
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    console.log("mounted")
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const nextlinks = document.querySelectorAll("Link");
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

    const onMouseEnterLink = () => {
      console.log("in")
        gsap.to(cursor, { scale: 4 });

    };

    const onMouseLeaveLink = () => {
      console.log("out")
      gsap.to(cursor, { scale: 1 });

    };

    nextlinks.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", onMouseEnterLink);
      button.addEventListener("mouseleave", onMouseLeaveLink);
    })

  }, [path]);

  return (
    <div id="custom-cursor" className="custom-cursor">
    </div>
  );
}

export default Cursor;
