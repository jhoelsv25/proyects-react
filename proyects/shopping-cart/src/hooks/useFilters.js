import { useContext } from "react";
import { FiltersContext } from "../context/filters";

//Custum hooks
export const useFilters = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { filterProducts, filters, setFilters };
};
