import { IBookingItems } from "@/types/booking.type";
import { workers } from "./worker.constant";



export const bookingItems: IBookingItems[] = [
    {
        service: workers[1],
        status: "Pending",
        booked_at: Date.now()
    },
    {
        service: workers[5],
        status: "Completed",
        booked_at: Date.now()
    },
    {
        service: workers[8],
        status: "Completed",
        booked_at: Date.now()
    },
    {
        service: workers[0],
        status: "Pending",
        booked_at: Date.now()
    },
]