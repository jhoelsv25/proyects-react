import { useId } from "react";
import { useViewList } from "../hooks/useViewList";
import { IconGrid, IconList } from "../icons/Icons";
import { useFilter } from "../hooks/useFilter";

export const FilterProduct = () => {
    const rangeId = useId();
    const numberId = useId();
    const { view, setView } = useViewList();
    const { price, setPrice } = useFilter()

    const handleClick = (e) => {
        console.log(e.target.value);
    }
    const onChange = (e) => {
        setPrice(e.target.value)
    }
    return (
        <section className="flex justify-between ">
            <span className="flex gap-5  items-center justify-center">
                <label htmlFor={rangeId} className="font-semibold text-sm">Filter by price min:</label>
                <input type="range" min={0} max={2000} id={rangeId} value={price} onChange={onChange} />
                <strong>${price}.00</strong>
            </span>
            <span className="flex gap-2 items-center justify-center">
                <label htmlFor={numberId} className="uppercase text-sm font-ligth text-gray-500">Show:</label>
                <select id={numberId} className="py-1.5 px-2 rounded-md border" onChange={handleClick}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                <strong>products</strong>
                <div className="flex gap-5 ">
                    <span className={`cursor-pointer ${view === 'list' ? 'fill-gray-400' : 'fill-black'} `} onClick={() => setView('list')}>
                        <IconList />
                    </span>
                    <span className={`cursor-pointer  ${view === 'grid' ? 'fill-gray-400' : 'fill-black'}`} onClick={() => setView('grid')}>
                        <IconGrid />
                    </span>
                </div>
            </span>


        </section>

    )
}
