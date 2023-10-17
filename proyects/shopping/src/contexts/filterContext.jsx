import { createContext, useState, useEffect } from "react";
import { searchProducts } from "../services/products";
import { useProducts } from "../hooks/useProducts";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [price, setPrice] = useState(0);
    const { productsInitial, setError } = useProducts();
    const [products, setProducts] = useState(productsInitial);
    console.log(products);

    const filterXPrice = () => {
        const data = productsInitial.filter(p => p.price >= price);
        setProducts(data);
    };


    useEffect(() => {
        filterXPrice();
    }, [price]);

    useEffect(() => {
        searchProducts({ search })
            .then(data => {
                setProducts(data.products);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setSearch('');
                console.log('Finalizó la búsqueda');
            });
    }, [search]);

    return (
        <FilterContext.Provider value={{ price, setPrice, setSearch, products }}>
            {children}
        </FilterContext.Provider>
    );
};
