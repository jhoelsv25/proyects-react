import { useState } from 'react';
import { createContext } from "react";


export const FilterContext = createContext()


export const FilterProvider = ({ children }) => {
    const [search, setSearch] = useState('')
    const [price, setPrice] = useState(0)
    const [page, setPage] = useState(1)


    return (
        <FilterContext.Provider value={{
            search, setSearch, price, setPrice, page, setPage,

        }}>
            {children}
        </FilterContext.Provider>
    )
}