

export interface FilterType {
    category: string[],
    location: string[],
    price: {
        min: number,
        max: number
    },
    rating: {
        min: number,
        max: number
    },
}