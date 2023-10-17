import { IconSearch } from "../icons/Icons"
import { useFilter } from "../hooks/useFilter"
//import { Navigate } from "react-router-dom";

export const Search = () => {
    const { setSearch } = useFilter()
    function changeValue(e) {
        if (e.key === 'Enter') {
            setSearch(e.target.value);
            e.target.value = '';
        }
    }
    return (
        <div className=" border-blue-600 border-2 flex rounded-lg p-1">
            <input type="text" placeholder='Search...' className='p-1 w-full focus:outline-none' onKeyUp={changeValue} />
            <button className='p-2 text-white'><IconSearch /> </button>
        </div>
    )
}
