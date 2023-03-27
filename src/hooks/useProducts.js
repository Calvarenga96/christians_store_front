import { useState, useEffect } from "react";
import axios from "../axios/config";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);

    const getProducts = async () => {
        setSpinner(true);
        const products = await axios.get(
            "https://fakestoreapi.com/products?limit=10",
            {
                withCredentials: false,
            }
        );
        setProducts(products?.data);
        setSpinner(false);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return {
        products,
        spinner,
        setSpinner,
    };
}
