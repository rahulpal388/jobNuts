import { HTMLInputTypeAttribute } from "react"


export function Input({ type, ref, placeholder }: {
    type: HTMLInputTypeAttribute,
    ref: React.Ref<HTMLInputElement>,
    placeholder: string
}) {

    return <input type={type} ref={ref} className="border-[1.3px]  outline-none rounded px-2 py-1 " placeholder={placeholder} />
}