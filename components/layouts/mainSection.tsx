"use client"
import { Button } from "../ui/button";
import { motion } from "motion/react"
import { Input } from "../ui/input";
import React, { use } from "react";
import { InputIcon } from "../ui/inputIcon";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

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

                            className="mt-6 mb-20 text-center xs:text-lg text-xs px-4  tracking-wide text-background  dark:bg-foreground ">Book trusted pros for repairs, cleaning, and more — fast, easy, and reliable.</motion.p>

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
                            <div className="flex max-sm:flex-col gap-8  mb-4">
                                <InputIcon type="text" ref={locationRef} placeholder="Enter location" icon={<MapPin className=" stroke-accent-foreground dark:stroke-background " />} />
                                <InputIcon type="text" ref={serviceRef} placeholder="Enter Service" icon={<BriefcaseBusiness className="stroke-accent-foreground dark:stroke-background " />} />
                            </div>
                            <Button type="Action" name="Search Service" onClick={() => {
                                if (!locationRef.current?.value || !serviceRef.current?.value) {
                                    alert("Please enter both location and service");
                                    return;
                                }
                                router.push(`/search?location=${locationRef.current?.value}&service=${serviceRef.current?.value}`)
                            }} />
                        </motion.div>
                    </div>
                    {/* <div className="flex gap-4 max-md:hidden">
                        <div className="flex flex-col gap-4  ">
                            <motion.img

                                initial={{
                                    x: -30,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut"
                                }}

                                src="/electrician.svg" alt="electrician image" height={250} width={250} className="shadow-blue-200 shadow-md rounded " />
                            <motion.img

                                initial={{
                                    y: 30,
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

                                src="/plumber.svg" alt="plumber image" height={180} width={180} className="shadow-blue-200 shadow-md rounded " />
                        </div>
                        <div className="max-md:hidden">
                            <motion.img
                                initial={{
                                    x: 30,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut"
                                }}
                                src="/kitchen.svg" alt="kitchen cleaning" height={180} width={180} className="shadow-blue-200 shadow-md rounded mt-20 " />
                        </div>
                    </div> */}

                </div>
            </div >
        </>
    )
}