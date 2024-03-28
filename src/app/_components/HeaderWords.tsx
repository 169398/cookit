"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { Button, buttonVariants } from "~/components/ui/button";
import { TypewriterEffect } from "../../components/typewriter-effect";
import Link from "next/link";

// Define the type of the session prop
type SessionProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any; // Update the type of session as per your session data structure
};

// Pass session as a prop to HomeWords
export function HomeWords({ session }: SessionProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <SessionProvider session={session}>
      <HomeWordsContent />
    </SessionProvider>
  );
}

function HomeWordsContent() {
  const { data: session } = useSession();

  const words = [
    { text: "Discover" },
    { text: "Delicious" },
    { text: "Recipes" },
    { text: "and" },
    { text: "Explore" },
    { text: "New" },
    { text: "Cuisines" },
    { text: "with", className: "text-blue-500 dark:text-blue-500" },
    { text: "Cookit." },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-blue-600 dark:text-neutral-200 font-bold text-base mb-10">
        No more recipe hunting😉{" "}
      </p>
      <TypewriterEffect words={words} />

      <div>
        {session ? (
          <>

          <Button className={buttonVariants()}>
              <Link href="/types">List of Cuisines</Link>
            </Button>
            <Button className={`${buttonVariants()} absolute  fixed top-10 right-0 mt-4 ml-4`}>
  <Link href="/api/auth/signout">Sign out</Link>
</Button>

           
          </>
        ) : (
          <Button className={buttonVariants()}>
            <Link href="/api/auth/signin">Sign in to View Cuisines </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
