
"use client"

import React, { useState } from "react";
import Link from "next/link";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { signOut, useSession } from "next-auth/react";

function AuthLinks() {

  // const [open, setOpen] = useState(false);
  const {status} = useSession();

  // const menuToggle = () => {
  //   setOpen(open ? false : true);
  // }
  
  return (
    <div className="flex">
      {status !== "authenticated" ? (<Link className="flex lg:hidden cursor-none" href="/login">Login</Link>
      ) : (
        <div className="flex gap-7">
            <Link href="/write">Uploads</Link>
            <button className="flex gap-[10px] cursor-none" onClick={() => signOut({ redirect: true, callbackUrl: '/' })}> Logout </button>
        </div>
      )}
    </div>
  );
}

export default AuthLinks;
