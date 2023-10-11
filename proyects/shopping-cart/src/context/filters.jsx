/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
//Crear el contexto
export const FiltersContext = createContext();
// eslint-disable-next-line react-hooks/rules-of-hooks

// crear el provider,  para proveer el contexto
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  })
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
