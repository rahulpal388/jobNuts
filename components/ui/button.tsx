import { HTMLAttributes } from "react"



const btnColor: {
    Default: string,
    Primary: string,
    Secondary: string,
    Action: string
} = {
    Default: "  rounded outline-none dark:text-background text-foreground 3xl:w-fit 3xl:px-4  3xl:h-16 3xl:text-2xl hover:opacity-80  cursor-pointer flex gap-2 justify-center items-center  ",
    Primary: " px-4 py-2 bg-[#27187E] ",
    Secondary: " px-4 py-2 bg-[#27187E]",
    Action: " px-3 py-2 bg-[#c93b31]  "
}




export function Button({ name, type, onClick, children, className }: {
    name: String,
    type: "Primary" | "Secondary" | "Action",
    onClick: () => void,
    children?: React.ReactNode,
    className?: string
}) {
    return (
        <>
            <button className={`${btnColor[type]} ${btnColor.Default} ${className} `} onClick={onClick}>{name}{children}</button>
        </>
    )
}