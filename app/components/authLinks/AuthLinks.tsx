
"use client"

import React, { useState } from "react";
import Link from "next/link";
import BurgerMenu from "../burgerMenu/BurgerMenu";

function AuthLinks() {
  const status = "notauthenticated";
  const [open, setOpen] = useState(false);

  const menuToggle = () => {
    setOpen(open ? false : true);
  }
  
  return (
    <div className="flex">
      {status === "notauthenticated" ? (<Link className="flex lg:hidden" href="/login">Login</Link>
      ) : (
        <>
            <Link href="/write">Write</Link>
            <span className="flex gap-[10px] cursor-pointer"> Logout </span>
        </>
      )}
    </div>
  );
}

export default AuthLinks;
