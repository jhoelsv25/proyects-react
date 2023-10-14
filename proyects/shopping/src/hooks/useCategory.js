import { useEffect, useState } from "react";
import { getCategories } from "../services/products";

export const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchCategories();
  }, []);
  return { categories, error };
};
