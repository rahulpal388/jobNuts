import { NavBar } from "@/components/layouts/navBar"



export default function SearchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="w-full h-full bg-backgoundGray  ">
                <div>
                    <NavBar />
                </div>
                <div>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-full px-20 p-4  ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}