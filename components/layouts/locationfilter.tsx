import { location } from "@/constant/location";
import { FilterType } from "@/types/filter.type";


export function LocationFilter({ setFilter }: { setFilter: React.Dispatch<React.SetStateAction<FilterType>> }) {

    return (
        <>
            <div>
                <h1 className="text-2xl font-semibold text-blue-950  ">Location</h1>
                <div>
                    {location.map((item, i) => (
                        <label className="flex gap-2 items-center" key={i}>
                            <input type="checkbox" value={item}
                                onChange={(e) => {
                                    const l = e.currentTarget.value;
                                    setFilter(prev => ({ ...prev, location: [...prev.location, l] }))
                                }}
                            />
                            <span className="">{item}</span>
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}