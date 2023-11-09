import React from "react";
import Link from "next/link";

function AuthLinks() {
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (<Link href="/login">Login</Link>
      ) : (
        <>
            <Link href="/write">Write</Link>
            <span className="flex gap-[10px] cursor-pointer"> Logout </span>
        </>
      )}
    </>
  );
}

export default AuthLinks;
