"use client"
import { Button } from "../ui/button";
import { motion } from "motion/react"
import { Input } from "../ui/input";
import React, { use } from "react";
import { InputIcon } from "../ui/inputIcon";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { SearchService } from "./searchServices";

// bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(184,184,184,1)_50%,_rgba(255,255,255,1)_100%)]
// bg-[radial-gradient(circle,lightBlue_30%,lightBlue_40%,mediumBlue_100%)]

export function MainSection() {
    const locationRef = React.useRef<HTMLInputElement>(null);
    const serviceRef = React.useRef<HTMLInputElement>(null);
    const router = useRouter();
    return (
        <>
            <div className=" flex h-screen w-screen  lg:gap-28 justify-center  bg-bg-yellow-400 items-center  xl:px-40 pt-[12%]  pb-12  dark:text-background text-foreground ">
                <div className="flex  gap-12 justify-center items-center  w-full ">
                    <div className=" flex  w-full   flex-col  items-center   ">


                        <motion.h1

                            initial={{
                                y: 50,
                                opacity: 0
                            }}

                            animate={{
                                y: 0,
                                opacity: 1
                            }}

                            transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                            }}

                            className="lg:text-6xl  text-5xl px-4  text-center font-bold 3xl:text-[8rem] max-w-[80rem] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.4)_5%,rgba(0,0,0,1)_55%)]  ">Every Home Service One App <div className="text-red-800"> Zero Hassles</div></motion.h1>

                        <motion.p

                            initial={{
                                y: 50,
                                opacity: 0
                            }}

                            animate={{
                                y: 0,
                                opacity: 1
                            }}

                            transition={{
                                duration: 1,
                                ease: "easeInOut"
                            }}

                            className="mt-6 mb-20 text-center xs:text-lg text-xs px-4  tracking-wide text-chart-3 ">Book trusted pros for repairs, cleaning, and more — fast, easy, and reliable.</motion.p>

                        <motion.div

                            initial={{
                                y: 50,
                                opacity: 0
                            }}

                            animate={{
                                y: 0,
                                opacity: 1
                            }}

                            transition={{
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                            className="flex flex-col  gap-8 justify-center items-center w-full "
                        >
                            <div className="flex flex-col items-center justify-center">
                                <SearchService serviceRef={serviceRef} locationRef={locationRef} className="flex-col" />
                            </div>
                        </motion.div>
                    </div>


                </div>
            </div >
        </>
    )
}