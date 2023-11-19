"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const LandingHero = () => {
    //const { isSignedIn } = useAuth(); <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <Badge className='px-3 items-center bg-primary-blue-500'>
        ✨ Welcome! ✨
        </Badge>
      <div className="text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-black dark:text-white">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-600 flex flex-col justify-center align-top">
          <TypewriterComponent
            options={{
              strings: [
                "Engage",
                "Energize",
                "Monetize",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <span className="text-black dark:text-white">your fan base.</span>
        </div>
      </div>
      <p className="text-primary-blue-400 dark:text-primary-blue-100 text-sm md:text-md font-normal">
                Deliver brilliant, personalized fan experiences{" "}
                <span className="text-green-600 dark:text-primary-blue-300">
                to the right fan, at the right time..
                </span>
      </p>
      <div className="">
        <Link href={"/demo"}>
          <Button variant="default" className="md:text-lg p-4 md:p-6 mt-7 rounded-full font-semibold transition transform active:scale-95 duration-200">
            Book a Demo
            <ArrowRight className='h-6 w-6'/>
          </Button>
        </Link>
      </div>
    </div>
  );
};