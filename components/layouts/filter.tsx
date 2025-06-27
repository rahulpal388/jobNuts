import { FilterType } from "@/types/filter.type";
import { FilterCategory } from "./filterCategory";
import React from "react";
import { LocationFilter } from "./locationfilter";
import { PriceFilter } from "./priceFilter";


export function Filter() {

    const [filter, setFilter] = React.useState<FilterType>({
        category: [],
        location: [],
        price: {
            min: 0,
            max: 1000
        },
        rating: {
            min: 0,
            max: 5
        }
    })

    return (
        <>
            <div >
                <FilterCategory setFilter={setFilter} />
                <LocationFilter setFilter={setFilter} />
                <PriceFilter setFilter={setFilter} />
            </div>
        </>
    )
}