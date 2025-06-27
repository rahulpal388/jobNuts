import { IWorker } from "@/types/worker.type"
import { Tags } from "./tags"
import { Button } from "./button"


export function WorkerCard({ worker }: {
    worker: IWorker
}) {



    return (
        <>

            <div className="rounded-lg bg-white dark:bg-gray-900 w-72 pb-2">
                <div className="relative">
                    <h1 className="absolute inset-1 bg-green-800 w-fit h-fit p-1 rounded " >{worker.availability}</h1>
                    <img src={worker.picture} alt="image" className=" w-full h-48 rounded-t-lg " />
                </div>
                <div className=" flex flex-col gap-4 px-4 py-2">
                    <div>
                        <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400" >
                            <h1 className="text-lg font-semibold  ">{worker.name}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Service: {worker.service}</p>

                            <p>Location : {worker.location}</p>
                            <p>Rating : {worker.rating.toFixed(1)}</p>
                            <p className="text-green-600 font-bold text-md">Price : ₹{worker.price}</p>
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
                        <Button type="Action" name="Save" onClick={() => { console.log("service saved") }} />
                        <Button type="Action" name="Book Now" onClick={() => { console.log("service Booked") }} />
                    </div>
                </div>
            </div>

        </>
    )
}