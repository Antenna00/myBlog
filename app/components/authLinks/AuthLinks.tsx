
"use client"

import React, { useState } from "react";
import Link from "next/link";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { signOut, useSession } from "next-auth/react";

function AuthLinks() {

  const [open, setOpen] = useState(false);
  const {data, status} = useSession();

  const menuToggle = () => {
    setOpen(open ? false : true);
  }
  
  return (
    <div className="flex">
      {status !== "authenticated" ? (<Link className="flex lg:hidden" href="/login">Login</Link>
      ) : (
        <>
            <Link href="/write">Uploads</Link>
            <span className="flex gap-[10px] cursor-pointer" onClick={() => signOut({ redirect: true, callbackUrl: '/' })}> Logout </span>
        </>
      )}
    </div>
  );
}

export default AuthLinks;
