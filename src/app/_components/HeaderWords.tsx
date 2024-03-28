"use client";
import { Button, buttonVariants } from "~/components/ui/button";
import { TypewriterEffect } from "../../components/typewriter-effect";
import Link from "next/link";


export function HomeWords() {
  const words = [
    {
        text: "Discover",
      },

    {
        text: "Delicious",
      },
    {
        text: "Recipes",
      },

    {
        text: "and",
      },
    {
      text: "Explore",
    },
    
    {
        text: "New",
      },
    {
      text: "Cuisines",
    },
    {
      text: "with",
    },
    {
      text: "Cookit.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-blue-600 dark:text-neutral-200 font-bold text-base  mb-10  ">
      No more recipe hunting😉      </p>
      <TypewriterEffect words={words} />

      <Button className={buttonVariants()}>
        
      <Link
            href="/types" 
          >
            List of Cuisines
          </Link>
      </Button>
      
    </div>
  );
}
