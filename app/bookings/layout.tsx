import { NavBar } from "@/components/layouts/navBar";


export default function BookingLayout({ children }: {
    children: React.ReactNode
}) {

    return (
        <>
            <div >
                <div>
                    <NavBar />
                </div>
                <div className="mt-20 flex items-center justify-center  px-4  ">
                    {children}
                </div>
            </div>
        </>
    )
}