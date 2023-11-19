"use client"

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";



const font = Poppins({ weight: "600", subsets: ["latin"] });


export const Navbar = () =>{


    return (
        <div className="fixed top-0 w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
                <MobileSidebar/>
                <Link href="/">
                        <Image width={80} height={20} alt="Logo" src="/logo.svg" />
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button onClick={()=>{}} size="sm" variant="default">
                Book a Demo
                <ArrowRight className="w-4 h-4 mx-1"/>
                </Button>
                <ModeToggle />
            </div>
        </div>
    )
}