import { AuthNavItems, unAuthNavItems } from "@/constant/navConstant";
import { motion } from "motion/react"
import { useSession } from "next-auth/react";

export function NavItmes() {

    const { data, status } = useSession();

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

    return (<>
        {
            status === "unauthenticated" ? (
                unAuthNavItems.map((item, i) => (
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
            )
                :
                status === "authenticated" && (
                    AuthNavItems.map((item, i) => (
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
                )
        }
    </>)

}