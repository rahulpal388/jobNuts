"use client";
import { Filter } from "@/components/layouts/filter";
import { Button } from "@/components/ui/button";
import { FilterCategory } from "@/components/layouts/filterCategory";
import { InputIcon } from "@/components/ui/inputIcon";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation"
import React from "react";


export default function Service() {
    const locationRef = React.useRef<HTMLInputElement>(null);
    const serviceRef = React.useRef<HTMLInputElement>(null);

    const param = useSearchParams();

    const location = param.get("location");
    const service = param.get("service");


    return (
        <>
            <div className="mt-16 pt-12  tracking-wide ">
                <div>
                    <h1>Welcome </h1>
                </div>


                <div className="flex gap-4 justify-between items-center  md:flex-row">
                    <div>
                        <h1 className="text-2xl font-semibold text-blue-950  ">Filter Service</h1>
                        <Filter />
                    </div>
                    <div className="flex gap-4">

                        <InputIcon type="text" ref={locationRef} placeholder="Enter location" icon={<MapPin />} />
                        <InputIcon type="text" ref={serviceRef} placeholder="Enter service" icon={<BriefcaseBusiness />} />
                        <Button name="Search" type="Action" onClick={() => { `/search?location=${locationRef.current?.value}&service=${serviceRef.current?.value}` }} />
                    </div>
                </div>

            </div>

        </>
    )

}