

export type IWorker = {
    name: string;
    service: string;
    price: number;
    location: string;
    availability: "Available Now" | "Booked Today";
    rating: number; // e.g. 4.8
    reviews: number; // number of reviews
    picture: string; // image URL
    service_tags: string[];
};
