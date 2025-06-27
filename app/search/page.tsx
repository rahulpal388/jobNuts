"use client";
import { ChevronsUpDown } from "lucide-react";
import { useSearchParams } from "next/navigation"
import React from "react";
import { useSession } from "next-auth/react";
import { SearchService } from "@/components/layouts/searchServices";
import { WorkerCard } from "@/components/ui/workerCard";
import { workers } from "@/constant/worker.constant";


export default function Service() {
    const { data, status } = useSession()
    const locationRef = React.useRef<HTMLInputElement>(null);
    const serviceRef = React.useRef<HTMLInputElement>(null);

    const param = useSearchParams();

    const location = param.get("location");
    const service = param.get("service");

    if (status === "loading") {
        return (
            <>
                <div className=" dark:bg-foreground h-screen bg-background flex justify-center items-center   " >
                    <div className="h-20 w-20   rounded-full border-2 border-t-0  border-destructive animate-spin  ">  </div>
                </div>
            </>
        )
    }


    return (
        <>
            <div className="mt-16 flex flex-col gap-6  tracking-wide ">
                <div>
                    <h1 className="  text-2xl " >Welcome, {data?.user.username}</h1>
                </div>
                <div className="flex justify-end ">
                    <div className=" flex gap-1 px-2 py-1 rounded border ">
                        <ChevronsUpDown />
                        <span className="" >Filter</span>
                    </div>
                </div>
                <div className="flex gap-4 justify-end max-md:justify-center items-center   md:flex-row">
                    <SearchService locationRef={locationRef} serviceRef={serviceRef} />
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-center " >
                    {
                        workers.map((items, i) => (
                            <div key={i} >
                                <WorkerCard worker={items} />
                            </div>
                        ))
                    }
                </div>

            </div>

        </>
    )

}