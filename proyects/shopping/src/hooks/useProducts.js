import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
export const useProducts = () => {
  const [productsInitial, setProductsInitial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        setProductsInitial(data.products);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { productsInitial, setProductsInitial, loading, error };
};
