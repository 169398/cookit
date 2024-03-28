import React from "react";
import Link from "next/link";
import { authOptions, getServerAuthSession } from "~/server/auth";
const session = await getServerAuthSession(authOptions);
import { Button, buttonVariants } from "~/components/ui/button";
  
const Header= () => {
    return <div className='fixed top-0 inset-x-0 h-fit bg-zinc-400 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>

       
<Link href="/">
<h1 className="text-pink-700  text-3xl font-bold text-right  md:block">Cookit</h1>
</Link>

{/* Sign-in button at the top right corner using Next.js Link */}

<Link className={buttonVariants()}
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
          >
            {session ? "Sign out" : "Sign in"}
          </Link>




          </div> 
      </div>

        
}
    

export default Header;