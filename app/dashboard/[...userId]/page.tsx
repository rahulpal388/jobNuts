"use client";
import { signOut, useSession } from "next-auth/react";


export default function DashBoard() {
    const { data, status } = useSession();
    console.log("Session Data:", data);



    return <>
        <div>
            {status === "authenticated" ? "Dahsboard" : "Please Sign In"}

            <div>
                {data?.user.id}
            </div>
            <div>
                {data?.user.email}
            </div>
            <div>
                {data?.user.username}
            </div>
            <div>
                {data?.user.image}
            </div>
        </div>

    </>
}