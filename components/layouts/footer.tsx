import { unAuthNavItems } from "@/constant/navConstant";

export default function Footer() {

    return (
        <>
            <div className="flex  min-h-72 px-12 bg-muted-foreground  py-12 gap-20 bg-darkBlue " >
                <h1 className="text-2xl font-light italic text-white ">JobNut</h1>
                <div>
                    <ul className="flex flex-col gap-1 text-white">
                        {unAuthNavItems.map((item, index) => (
                            <li key={index} className="hover:underline cursor-pointer">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}