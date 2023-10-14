import { useContext, useState } from "react";
import { FilterContext } from "../contexts/filterContext";
import { useProducts } from "./useProducts";

export const useFilter = () => {
  const { search, setSearch, price, setPrice, page, setPage } =
    useContext(FilterContext);
  const { products } = useProducts();
  const [error, setError] = useState(null);

  return { price, setPrice, products };
};
