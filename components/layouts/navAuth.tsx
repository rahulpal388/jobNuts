
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { useSession } from "next-auth/react"



export function NavAuth() {
    const router = useRouter()
    const { data, status } = useSession()

    return (
        <>

            {
                status === "unauthenticated" ? (
                    <div className="flex gap-6 items-center" >
                        <a href="#" className="dark:text-background text-foreground">Customer Login</a>
                        <Button type="Action" onClick={() => { router.push("/auth/signin") }} name="Sign in" />
                    </div>
                )
                    :
                    status === "authenticated" && (
                        <div className="ml-6">
                            <div className=" h-10 w-10 rounded-full  ">
                                {
                                    data.user.image ? (
                                        <img className="w-full h-full  rounded-full" src={data.user.image} alt="" />
                                    )
                                        :
                                        (
                                            <div className="w-full h-full rounded-full flex items-center justify-center text-2xl text-white bg-destructive " >
                                                {data.user.username?.split("")[0].toLocaleUpperCase()}
                                            </div>
                                        )

                                }
                            </div>
                        </div>
                    )
            }
        </>
    )
}