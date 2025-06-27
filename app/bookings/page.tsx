import { BookingCard } from "@/components/ui/bookingCard";
import { bookingItems } from "@/constant/booking.constant";


export default function Bookings() {

    return (
        <>
            <div className=" min-w-[60%]">
                <h1 className="text-2xl text-destructive text-center font-bold ">All the Booking Services</h1>
                <div className="flex flex-col   gap-4 mt-12 ">
                    {
                        bookingItems.map((items, i) => (
                            <BookingCard key={i} booking={items} />
                        ))
                    }
                </div>
            </div>
        </>
    )

}