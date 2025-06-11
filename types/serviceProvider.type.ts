

export interface ServiceProvider {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    rating: number;
    reviewsCount: number;
    priceRange: {
        min: number;
        max: number;
    };
    location: string;
    servicesOffered: string[];
    contactInfo: {
        email: string;
        phone?: string;
    };
    isVerified?: boolean; // Optional field to indicate if the provider is verified
    isAvailable?: boolean; // Optional field to indicate if the provider is currently available

}