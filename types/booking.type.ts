import { IWorker } from "./worker.type"

export type IBookingItems = {
    service: IWorker,
    booked_at: number,
    status: "Pending" | "Completed"
}