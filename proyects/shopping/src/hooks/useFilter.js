import { useContext } from "react";
import { FilterContext } from "../contexts/filterContext";

export const useFilter = () => {
  const { price, setPrice, setSearch, products } = useContext(FilterContext);

  return { setSearch, products, setPrice, price };
};
