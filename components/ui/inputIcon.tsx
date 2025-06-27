import { MapPin } from "lucide-react"
import { HTMLInputTypeAttribute, RefAttributes } from "react"


export function InputIcon({ type, ref, placeholder, icon }: {
    type: HTMLInputTypeAttribute,
    ref: React.Ref<HTMLInputElement>,
    icon: React.ReactNode,
    placeholder: string
}) {

    return (
        <>
            <div className="  bg-background dark:bg-foreground 3xl:w-[30rem] 3xl:h-20 flex items-center gap-2 border-[1.3px] 3xl:rounded-lg 3xl:px-4 rounded dark:border-background border-foreground px-2 py-1 ">
                <div className="3xl:w-12 3xl:h-12 flex justify-center items-center rounded-full ">
                    {icon}
                </div>
                <input type={type} ref={ref} className="flex-shrink min-w-0 w-full dark:text-input text-foreground 3xl:text-3xl outline-none rounded px-2 py-1 " placeholder={placeholder} />
            </div>
        </>
    )
}