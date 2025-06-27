"use client"
import { AlignLeft, Bell, Moon, SunMoon } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { SideBar } from "./sideBar"
import { motion, scale } from "motion/react"
import { useRouter } from "next/navigation"
import { NavItmes } from "./navItems"
import { NavAuth } from "./navAuth"






export function NavBar() {
    const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
    const router = useRouter()
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
                    <NavItmes />
                </div>

                {/* action items */}

                <div className="flex gap-6 items-center  ">
                    <SunMoon className="dark:text-background text-foreground cursor-pointer " />
                    <div className="relative inline-block">

                        {/* Notification Count */}
                        <div className="absolute -top-3 -right-1 bg-destructive text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                            12
                        </div>
                        <Bell />
                    </div>

                    {/* signin or Login */}
                    <NavAuth />

                </div>
            </motion.div >
        </>
    )
}
