"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function DashBoard() {
    const { data, status } = useSession();
    const router = useRouter()
    console.log("Session Data:", data);

    if (status === "unauthenticated") {
        router.push("/auth/signin");
    }

    return <>
        <div>
            {status === "authenticated" ? "Dahsboard" : "Please Sign In"}
        </div>

    </>
}