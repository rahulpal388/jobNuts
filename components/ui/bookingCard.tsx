"use client"
import { IBookingItems } from "@/types/booking.type"
import { EllipsisVertical } from "lucide-react"
import { b } from "motion/react-client"
import { Button } from "./button"


export function BookingCard({ booking }: {
    booking: IBookingItems
}) {
    return (
        <>
            <div className="flex gap-6 justify-between  min-h-40 bg-neutral-800 rounded min-w-[30rem] ">
                <div className="flex gap-6">
                    <div>
                        <img src={booking.service.picture} alt="image" className=" rounded-l min-w-32 h-full " />
                    </div>
                    <div className="pt-2" >
                        <div className="flex gap-4 items-center ">
                            <p className="sm:text-2xl text-md sm:w-40 ">{booking.service.name}</p>
                            <div className="bg-green-600 px-2 rounded h-fit text-xs " >{booking.status}</div>
                        </div>
                        <div className="text-sm pb-2 text-neutral-400 gap-1 ">
                            <p>Service : {booking.service.service}</p>
                            <p>Location : {booking.service.location}</p>
                            <p className="">Price : <span className="text-green-600 font-bold ">₹{booking.service.price}</span></p>
                            {
                                booking.status === "Completed" && (
                                    <button className=" mt-1 bg-destructive rounded px-2 py-[0.5px] cursor-pointer hover:bg-destructive/60 " >Give Review</button>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end px-2 py-1">
                    <EllipsisVertical className="cursor-pointer" />
                    <p className="text-xs">{new Date(booking.booked_at).toLocaleString([], {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    })}</p>
                </div>
            </div>
        </>
    )
}