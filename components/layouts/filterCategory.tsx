import { Category } from "@/constant/category";
import { FilterType } from "@/types/filter.type";
import { Preahvihear } from "next/font/google";


export function FilterCategory({ setFilter }: { setFilter: React.Dispatch<React.SetStateAction<FilterType>> }) {

    return (
        <>

            <div>
                <h1 className="text-2xl font-semibold text-blue-950  ">Service Category</h1>
                {Category.map((item, i) => (

                    <label className="flex gap-2 items-center" key={i}>
                        <input type="checkbox" onChange={(e) => {
                            const c = e.currentTarget.value

                            setFilter(prev => ({ ...prev, category: [...prev.category, c] }))
                        }}

                            value={item}
                        />
                        <span className=""  >{item}</span>
                    </label>


                ))}

            </div>
        </>
    )

}