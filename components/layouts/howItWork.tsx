"use client"
import { Calendar, CircleCheck, CircleCheckBig, Search, Wallet } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react";


export function HowItWork() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const translateLine_1 = useTransform(scrollYProgress, [0, 0.3], [0, 64])
    const translateLine_2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 64])
    const translateLine_3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 64])
    const translateLine_4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 64])

    const changeColor = useTransform(scrollYProgress, [0.3, 1], ["yellow", "red"])

    return (
        <>
            <div ref={ref} className="pb-32 px-12 flex flex-col items-center gap-12 ">
                <div>
                    <h1 className="text-2xl font-bold text-blue-950 text-center ">How It Work</h1>
                </div>
                <div className="flex  gap-4 justify-center items-center">
                    {/*div first  */}
                    <div className="flex gap-2 items-center ">
                        <div className="flex flex-col  gap-2 items-center ">
                            <Search className="lg-size-10 sixe-8 stroke-green-600  " />
                            <h1 className="text-center md:text-lg text-sm max-sm:text-xs ">Search Service</h1>
                        </div>
                        <div className="sm:w-16 w-8  " > <motion.div

                            initial={{
                                width: 0
                            }}

                            // animate={{
                            //     width: 64
                            // }}

                            style={{
                                width: translateLine_1
                            }}

                            className=" h-[2px]  bg-red-500 "> </motion.div></div>
                    </div>


                    {/* div second */}
                    <div className="flex gap-2 items-center ">
                        <div className="flex flex-col gap-2  items-center ">
                            <Calendar className="lg-size-10 sixe-8" />
                            <h1 className="text-center md:text-lg text-sm  max-sm:text-xs  ">Schedule Service</h1>
                        </div>
                        <div className="min-w-16  " > <motion.div

                            initial={{
                                width: 0
                            }}

                            // animate={{
                            //     width: 64
                            // }}

                            style={{
                                width: translateLine_2
                            }}

                            className=" h-[2px]  bg-red-500 "> </motion.div></div>

                    </div>

                    {/* div third */}
                    <div className="flex gap-2 items-center ">
                        <div className="flex flex-col gap-2  items-center ">

                            {/* <CircleCheck className="size-10" /> */}

                            <CircleCheck className="text-center text-lg lg-size-10 sixe-8" />
                            <h1 className="text-center  md:text-lg text-sm max-sm:text-xs">Confirm Service</h1>
                        </div>
                        <div className="min-w-16  " > <motion.div

                            initial={{
                                width: 0
                            }}

                            // animate={{
                            //     width: 64
                            // }}

                            style={{
                                width: translateLine_3
                            }}

                            className=" h-[2px]  bg-red-500 "> </motion.div></div>
                    </div>

                    {/* div fourth */}
                    <div className="flex gap-2 items-center ">
                        <div className="flex flex-col gap-2  items-center ">
                            <CircleCheckBig className="lg-size-10 sixe-8" />
                            <h1 className="text-center  md:text-lg text-sm  max-sm:text-xs">Service Completed</h1>
                        </div>
                        <div className="min-w-16  " > <motion.div

                            initial={{
                                width: 0
                            }}

                            // animate={{
                            //     width: 64
                            // }}

                            style={{
                                width: translateLine_4
                            }}

                            className=" h-[2px]  bg-red-500 "> </motion.div></div>
                    </div>

                    {/*div fifth  */}
                    <div>
                        <div className="flex flex-col gap-2  items-center ">
                            <Wallet className="lg-size-10 sixe-8" />
                            <h1 className="text-center md:text-lg text-sm max-sm:text-xs ">Pay</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





