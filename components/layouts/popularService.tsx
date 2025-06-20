"use client"
import { useScroll, useTransform, motion, useMotionTemplate } from "motion/react";
import { serviceCard } from "../../constant/serviceCard.constant";
import { ServiceCard } from "../ui/serviceCard";
import { useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";



export function PopularService() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacityContant = useTransform(scrollYProgress, [0, 0.1], [10, 0]);
    const translateTitle = useTransform(scrollYProgress, [0, 0.1], [100, 0])

    return (
        <>
            <div

                className=" flex flex-col  gap-12 items-center  " ref={ref} >
                <div>
                    <motion.h1
                        initial={{
                            y: 100
                        }}
                        style={{
                            filter: useMotionTemplate`blur(${opacityContant}px)`,
                            y: translateTitle

                        }}
                        className="text-4xl font-bold dark:text-background text-foreground text-center  ">Popular Service</motion.h1>

                </div>
                <div className="  flex gap-6 flex-wrap px-4 justify-evenly items-center">
                    {serviceCard.map((item, i) => (
                        <ServiceCard key={i} title={item.title} description={item.description} href={item.href} />
                    ))}
                </div>
                <div className="">
                    <Button type="Action" name="Explore More" onClick={() => { console.log("explore more") }} children={<ArrowRight className=" stroke-[1.5px]  " />} />
                </div>
            </div>
        </>
    )
}