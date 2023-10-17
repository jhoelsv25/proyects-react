import { useEffect, useState } from "react";
import { getCategories } from "../services/products";

export const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        console.log("TERMINO LA CARGA DE CATEGORIAS");
      });
  }, []);
  return { categories, error };
};
