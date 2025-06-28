"use client"

import { ArrowRight, Star } from "lucide-react";

import { Button } from "./button";
import { IServiceCard } from "@/types/serviceCard.Type";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useScroll, useTransform, motion, useMotionTemplate } from "motion/react";


export function ServiceCard({ title, description, href }: IServiceCard) {
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacityContant = useTransform(scrollYProgress, [0, 0.1], [10, 0]);
    const translateTitle = useTransform(scrollYProgress, [0, 0.1], [100, 0])

    return (
        <>
            <motion.div ref={ref}

                style={{
                    filter: useMotionTemplate`blur(${opacityContant}px)`,
                    y: translateTitle
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}

                className="container  bg-card-foreground  dark:border-border border-[0.5px]  p-4 rounded-xl xl:w-96  md:w-[30%] w-full   transition transform duration-300  ease-in-out hover:-translate-y-3 cursor-pointer shadow-2xs">
                <div >
                    <img src="/electricianIcon.svg" alt="icon" className=" size-16 " />
                    <h1 className="text-2xl font-bold dark:text-background text-foreground ">{title}</h1>
                </div>
                <div>
                    <p className="flex text-sm mt-1 dark:text-chart-3     "> {description} </p>
                </div>

                <div className="mt-4 flex justify-center">
                    <Button type="Action" name="Book Now" onClick={() => { router.push(href) }} />
                </div>
            </motion.div>
        </>
    )
}