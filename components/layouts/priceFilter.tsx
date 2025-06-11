import { price } from "@/constant/price";
import { FilterType } from "@/types/filter.type";


export function PriceFilter({ setFilter }: { setFilter: React.Dispatch<React.SetStateAction<FilterType>> }) {

    return (
        <>

            <div>
                <h1>Price</h1>
                <div>
                    {price.map((item, i) => (
                        <label className="flex gap-2 items-center" key={i}>
                            <input type="checkbox" value={item}

                               

                            />
                            <span className="">{item}</span>
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}