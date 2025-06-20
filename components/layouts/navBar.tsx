"use client"
import { AlignLeft, Moon, SunMoon } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { SideBar } from "./sideBar"
import { motion, scale } from "motion/react"
import { useRouter } from "next/navigation"
import { navItems } from "@/constant/navConstant"






export function NavBar() {
    const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
    const router = useRouter()
    const varient = {
        draw: {
            opacity: 0.8,

        }
    }
    const childVarient = {
        draw: {
            width: "100%"
        }
    }



    return (
        <>

            <motion.div

                initial={{
                    y: -50,
                    opacity: 0
                }}

                animate={{
                    y: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 0.7,
                    ease: "easeInOut"
                }}


                className="flex justify-between items-center py-2  fixed top-0   left-0 w-full   px-12  z-50 backdrop-blur-md   ">
                {/* logo */}
                <div className="max-lg:hidden">
                    <h1 className="lg:text-3xl text-xl font-light italic tracking-wider  dark:text-background text-foregroun
                    ">JobNuts</h1>
                </div>

                <div className="hidden max-lg:block">
                    <div className="  ">
                        <AlignLeft className="cursor-pointer size-8 text-foreground dark:text-background " onClick={() => { setSideBarOpen(prev => !prev) }} />
                    </div>
                    <SideBar setSideBarOpen={setSideBarOpen} isSideBarOpen={isSideBarOpen} />
                </div>
                {/* navigation items */}
                <div className="flex gap-6 items-center justify-evenly max-lg:hidden   rounded-xl px-4 z-50 3xl:w-[50rem]  ">
                    {
                        navItems.map((item, i) => (
                            <motion.div

                                whileHover={"draw"}
                                variants={varient}
                                transition={{
                                    duration: 0.3
                                }}

                                key={i} className="cursor-pointer p-2">
                                <h4 className="xl:text-lg dark:text-background text-foreground " >{item.name}</h4>
                                <motion.div
                                    initial={{
                                        width: 0
                                    }}
                                    variants={childVarient}

                                    className=" h-1  bg-btnRed  "></motion.div>
                            </motion.div>
                        ))
                    }
                </div>
                {/* action items */}
                <div className="flex gap-6 items-center max-sm:hidden ">
                    <SunMoon className="dark:text-background text-foreground cursor-pointer " />
                    <a href="#" className="dark:text-background text-foreground">Customer Login</a>
                    <Button type="Action" onClick={() => { router.push("/auth/signin") }} name="Sign in" />
                </div>
            </motion.div >
        </>
    )
}