"use client";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


interface IInputs {
    email: string,
    username: string,
    password: string

}


export function Authentication() {
    const [isViewPassword, setIsViewPassword] = useState<Boolean>(false);
    // const { handleSubmit, register } = useForm<IInputs>();


    const onSubmit: SubmitHandler<IInputs> = (data) => {
        console.log(data)
    }

    const backHome = () => {
        window.location.href = "/";
    }

    return (
        <div className="flex dark:bg-foreground bg-background justify-center items-center min-h-screen ">
            <div className="w-full 3xl:w-[60rem] max-w-md min-h-[28rem] bg-gray-200 rounded-lg shadow-lg py-8 px-6 mx-4">
                <div className="flex  items-center mb-6  ">
                    <div className=" flex  px-1 items-center cursor-pointer " onClick={backHome} >
                        <ChevronLeft className="stroke-destructive" />
                        <span className="text-destructive text-sm ml-1">Back to home</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl text-destructive font-bold">Create Account</h1>
                        <p className="text-sm text-center text-neutral-600 mt-2">
                            Enter your username, email and password to create your account

                        </p>
                        <div className="mt-4  ">
                            <img src="/googleIcon.svg" className="cursor-pointer  " alt="google" onClick={() => signIn("google")} />
                        </div>
                        <div className="flex w-full items-center gap-2 mt-2 ">
                            <div className="w-full border-t border-dashed border-destructive"></div>
                            <div className="text-gray-600">or</div>
                            <div className="w-full border-t border-dashed border-destructive"></div>
                        </div>
                    </div>


                    <form className="flex flex-col gap-4  ">
                        <input
                            // {...register("username")}
                            placeholder="Username"
                            className="px-4 py-2 rounded border border-destructive focus:outline-none focus:ring-1 focus:ring-destructive"
                        />
                        <input
                            // {...register("password")}
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2 rounded border border-destructive focus:outline-none focus:ring-1 focus:ring-destructive"
                        />
                        <div className="flex gap-2 items-center justify-between px-4 rounded border border-destructive  focus-within:outline-none focus-within:ring-1 focus-within:ring-destructive  ">
                            <input
                                // {...register("email")}
                                type={isViewPassword ? "text" : "password"}
                                placeholder="Password"
                                className=" py-2  outline-none  w-full "
                            />
                            <div className="cursor-pointer" onClick={() => setIsViewPassword(prev => !prev)} >
                                {isViewPassword ? <Eye /> : <EyeOff />}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className=" bg-destructive text-white mt-4  cursor-pointer  font-semibold py-2 rounded  "

                        >
                            Create Account
                        </button>
                    </form>


                </div>
            </div>
        </div>
    )
}