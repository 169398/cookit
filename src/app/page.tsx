/*
import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
<div className="  w-4/3 text-center absolute top-1/2 left-1/2-translate-y">
<h1 className="text-3xl my-8">Explore <span style={{color: 'pink', textShadow: '0 0 3px blue'}}>foods</span> from diverse locations in the world </h1>

<Link  className="shadow bg-gray-300 py-2 px-4 cursor-pointer hover:bg-pink-500 text-xl py-2 " href="/types"> List of causines</Link>
</div>


      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
       
        
        <div className="flex flex-col items-center gap-2">
          

          <div className="flex flex-col items-center justify-center gap-4">
           
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

*/
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {/* Move the "container" div to encompass the entire content */}
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {/* Header section with the title and potentially a logo (if needed) */}
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-3xl my-8">
            Explore <span style={{ color: "pink", textShadow: "0 0 3px blue" }}>foods</span> from diverse locations in the world
          </h1>
          
        </div>

        {/* Rest of the content (List of Cuisines link) */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Link
            href="/types" // Always point to "List of Cuisines" page
            className="shadow bg-slate-800  padding-5px py-2 px-4 cursor-pointer hover:bg-pink-500 text-xl py-2"
          >
            List of Cuisines
          </Link>
        </div>
      </div>
    </main>
  );
}
