"use client";
import { ChevronLeft } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";


interface IInputs {
    email: string,
    username: string,
    password: string

}


export function Authentication() {
    // const { handleSubmit, register } = useForm<IInputs>();


    const onSubmit: SubmitHandler<IInputs> = (data) => {
        console.log(data)
    }

    const backHome = () => {
        window.location.href = "/";
    }

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full 3xl:w-[60rem] max-w-md min-h-[28rem] bg-gray-200 rounded-lg shadow-lg py-8 px-6 mx-4">
                <div className="flex  items-center mb-6  ">
                    <div className=" flex  px-1 items-center cursor-pointer " onClick={backHome} >
                        <ChevronLeft className="stroke-blue-950" />
                        <span className="text-blue-950 text-sm ml-1">Back to home</span>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl text-blue-950 font-bold">Create Account</h1>
                        <p className="text-sm text-center text-neutral-500 mt-2">
                            Enter your username, email and password to create your account
                        </p>
                    </div>
                    <form className="flex flex-col gap-4  ">
                        <input
                            // {...register("username")}
                            placeholder="Username"
                            className="px-4 py-2 rounded border border-mediumBlue focus:outline-none focus:ring-2 focus:ring-mediumBlue"
                        />
                        <input
                            // {...register("email")}
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2 rounded border border-mediumBlue focus:outline-none focus:ring-2 focus:ring-mediumBlue"
                        />
                        <input
                            // {...register("password")}
                            type="password"
                            placeholder="Password"
                            className="px-4 py-2 rounded border border-mediumBlue focus:outline-none focus:ring-2 focus:ring-mediumBlue"
                        />
                        <button
                            type="submit"
                            className="mt-4 bg-gradient-to-r cursor-pointer  from-transparent via-mediumBlue to-transparent text-white font-semibold py-2 rounded hover:scale-105 transition-transform border-2 border-mediumBlue "
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}