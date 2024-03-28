import React from "react";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
const session = await getServerAuthSession();

  
const Header= () => {
    return <div className=" py-5 bg-slate-300">
<div>
<Link href="/">
<h1 className="text-pink-700  text-3xl font-bold text-right">Cookit</h1>
</Link>

{/* Sign-in button at the top right corner using Next.js Link */}

<Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-5 py-4 font-semibold no-underline transition hover:bg-slate-400  "
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
</div>

</div>
        
}
    

export default Header;