import { IWorker } from "@/types/worker.type"
import { Tags } from "./tags"
import { Button } from "./button"
import { ArrowBigRight, ArrowRight } from "lucide-react"


export function WorkerCard({ worker }: {
    worker: IWorker
}) {



    return (
        <>

            <div className="rounded-lg bg-card-foreground w-72 pb-2">
                <div className="relative">
                    <h1 className="absolute inset-1 bg-green-700 w-fit h-fit p-1 rounded text-xs " >{worker.availability}</h1>
                    <img src={worker.picture} alt="image" className=" w-full h-48 rounded-t-lg " />
                </div>
                <div className=" flex flex-col gap-4 px-4 py-2">
                    <div>
                        <div className="flex flex-col gap-1 text-sm text-chart-3 " >
                            <h1 className="text-xl font-semibold text-input ">{worker.name}</h1>
                            <p className="text-xs text-chart-3">Service: {worker.service}</p>

                            <p className="text-xs">Location : {worker.location}</p>
                            <p className="text-xs">Rating : {worker.rating.toFixed(1)}</p>
                            <p className="text-green-600 font-bold text-xs">Price : ₹{worker.price}</p>
                        </div>


                    </div>
                    <div className="flex gap-1 flex-wrap">
                        {
                            worker.service_tags.map((tag, i) => (
                                <Tags key={i} tag={tag} />
                            ))
                        }
                    </div>
                    <div className="flex justify-between items-center  ">
                        <button className="bg-destructive rounded px-2 py-[1px] flex items-center justify-center gap-2 text-sm font-light ">
                            Book Now

                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}