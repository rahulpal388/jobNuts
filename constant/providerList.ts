import { ServiceProvider } from "@/types/serviceProvider.type";




export const serviceProvider: ServiceProvider[] = [
    {
        id: 1,
        name: "Alpha Solutions",
        description: "Leading provider of web and app development services.",
        imageUrl: "https://example.com/images/alpha-solutions.jpg",
        rating: 4.5,
        reviewsCount: 120,
        priceRange: { min: 1000, max: 5000 },
        location: "123 Main St, New York, USA",
        servicesOffered: ["Web Development", "App Development"],
        contactInfo: {
            email: "contact@alphasolutions.com",
            phone: "+1-212-555-0101"
        },
        isVerified: true,
        isAvailable: true
    },
    {
        id: 2,
        name: "Beta Tech",
        description: "Cloud hosting and IT consulting experts.",
        imageUrl: "https://example.com/images/beta-tech.jpg",
        rating: 4.2,
        reviewsCount: 98,
        priceRange: { min: 1500, max: 6000 },
        location: "456 Market St, San Francisco, USA",
        servicesOffered: ["Cloud Hosting", "IT Consulting"],
        contactInfo: {
            email: "info@betatech.com",
            phone: "+1-415-555-0202"
        },
        isVerified: true,
        isAvailable: true
    },
    {
        id: 3,
        name: "Gamma Services",
        description: "Network security and technical support specialists.",
        imageUrl: "https://example.com/images/gamma-services.jpg",
        rating: 4.7,
        reviewsCount: 134,
        priceRange: { min: 1200, max: 5500 },
        location: "789 King Rd, London, UK",
        servicesOffered: ["Network Security", "Technical Support"],
        contactInfo: {
            email: "support@gammaservices.co.uk",
            phone: "+44-20-5555-3030"
        },
        isVerified: true,
        isAvailable: true
    },
    {
        id: 4,
        name: "Delta Innovations",
        description: "Creative UI/UX and graphic design studio.",
        imageUrl: "https://example.com/images/delta-innovations.jpg",
        rating: 4.3,
        reviewsCount: 87,
        priceRange: { min: 800, max: 4000 },
        location: "12 Alexanderplatz, Berlin, Germany",
        servicesOffered: ["UI/UX Design", "Graphic Design"],
        contactInfo: {
            email: "hello@deltainnovations.de",
            phone: "+49-30-5555-4040"
        },
        isVerified: true,
        isAvailable: true
    },

];