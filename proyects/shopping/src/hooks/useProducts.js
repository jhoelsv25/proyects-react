import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../services/products";
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (error) {
        // Manejar errores, por ejemplo, mostrar un mensaje de error o registrar el error.
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
