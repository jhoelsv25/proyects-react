import { IconSearch } from "../icons/Icons"


export const Search = () => {
    return (
        <div className=" border-blue-600 border-2 flex rounded-lg p-1">
            <input type="text" placeholder='Search...' className='p-1 w-full focus:outline-none' />
            <button className='p-2 text-white'><IconSearch /> </button>
        </div>
    )
}
