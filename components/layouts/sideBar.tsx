import { ChevronLeft } from "lucide-react";
import { navItems } from "../../constant/navConstant";
import { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "motion/react"
import { Button } from "../ui/button";


export function SideBar({ setSideBarOpen, isSideBarOpen }: {
    setSideBarOpen: Dispatch<SetStateAction<boolean>>,
    isSideBarOpen: boolean
}) {

    return (
        <>

            <AnimatePresence>
                {isSideBarOpen && (
                    <motion.div

                        exit={{
                            opacity: 0,
                            width: 0
                        }}

                        initial={{
                            opacity: 0,
                            width: 0
                        }}

                        animate={{
                            opacity: 1,
                            width: 192
                        }}
                        transition={{
                            duration: 0.2
                        }}

                        className="bg-gray-300 w-48 h-screen absolute inset-0 px-4 pt-4  ">
                        <div className=" w-full  flex justify-end">
                            <ChevronLeft className="size-10 stroke-[1.2px] cursor-pointer " onClick={() => { setSideBarOpen(false) }} />
                        </div>
                        <div className="mt-12 flex flex-col gap-6  ">
                            {navItems.map((item, i) => (
                                <div className="group hover:bg-blue-900 rounded py-1 cursor-pointer   " key={i}>
                                    <h1 className="text-center text-blue-950 font-semibold group-hover:text-white" >{item.name}</h1>
                                </div>
                            ))}
                        </div>

                        <div className=" ">
                            <Button className=" absolute bottom-4 left-10 " name="Logout" type="Action" onClick={() => { console.log("Logout") }} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}