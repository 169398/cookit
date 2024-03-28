
import Link from "next/link";
import { authOptions, getServerAuthSession } from "~/server/auth";
import { HomeWords } from "./_components/HeaderWords";




export default async function Home() {
  const session = await getServerAuthSession(authOptions);

  return (
<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-green-300 to-purple-400">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
       <HomeWords session={undefined} />

       
      </div>
    </main>
  );
}
