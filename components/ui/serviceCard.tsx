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

                className="container border bg-[radial-gradient(circle_at_top_left,_white_10%,backgoundGray_100%)]  border-black p-4 rounded-xl max-w-72  cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div >
                    <img src="/electricianIcon.svg" alt="icon" className=" size-16 " />
                    <h1 className="text-2xl font-bold text-mediumBlue ">{title}</h1>
                </div>
                <div>
                    <p className="flex text-sm mt-1 text-[#080707]   "> {description} </p>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex gap-1">
                        <Star className="size-4" />
                        <Star className="size-4" />
                        <Star className="size-4" />
                        <Star className="size-4" />
                    </div>
                    <div>
                        <p>Starting at 199</p>
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <Button type="Action" name="Book Now" onClick={() => { router.push(href) }} />
                </div>
            </motion.div>
        </>
    )
}