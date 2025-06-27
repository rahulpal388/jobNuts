import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { InputIcon } from "../ui/inputIcon";
import { BriefcaseBusiness, MapPin } from "lucide-react";


export function SearchService({ locationRef, serviceRef, className }: {
    locationRef: React.RefObject<HTMLInputElement | null>
    serviceRef: React.RefObject<HTMLInputElement | null>
    className?: string
}) {
    const router = useRouter()

    return (
        <>

            <div className={`flex max-lg:flex-col gap-8 justify-center items-center mb-4 ${className} `}>
                <div className="flex max-sm:flex-col  gap-6">
                    <InputIcon type="text" ref={locationRef} placeholder="Enter location" icon={<MapPin className="stroke-accent-foreground dark:stroke-background " />} />
                    <InputIcon type="text" ref={serviceRef} placeholder="Enter Service" icon={<BriefcaseBusiness className="stroke-accent-foreground dark:stroke-background " />} />
                </div>
                <Button type="Action" name="Search Service" onClick={() => {
                    if (!locationRef.current?.value || !serviceRef.current?.value) {
                        alert("Please enter both location and service");
                        return;
                    }
                    router.push(`/search?location=${locationRef.current?.value}&service=${serviceRef.current?.value}`)
                }} />

            </div>


        </>
    )
}