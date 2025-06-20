import { Authentication } from "@/components/layouts/authentication";


export default function SignIn() {

    return (
        <>
            <div className="bg-[radial-gradient(circle,#a8c0ff_30%,#a8c0ff_40%,#3f2b96_100%)] relative">
                <div className="bg-[url('/black-scales.png')] bg-[length:100px_100px] absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"></div>
                <Authentication />
            </div>

        </>
    )
}
