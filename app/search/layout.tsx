import Footer from "@/components/layouts/footer"
import { NavBar } from "@/components/layouts/navBar"



export default function SearchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>

            <div className="w-full h-full dark:bg-foreground bg-background flex flex-col gap-8 ">
                <div>
                    <NavBar />
                </div>
                <div className="px-10 ">
                    {children}

                </div>
                <Footer />
            </div>

        </>
    )
}