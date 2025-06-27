import { bgTagsColors } from "@/constant/randonTagColor"


function getRandomColor(): string {
    const index = Math.floor(Math.random() * bgTagsColors.length)
    return bgTagsColors[index]
}


export function Tags({ tag }: {
    tag: string
}) {
    const color = getRandomColor();

    return (
        <>
            <p className={`w-fit text-[10px] px-1 rounded ${color} `}>{tag}</p>
        </>
    )
}