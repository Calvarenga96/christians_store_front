import { useState, useEffect } from "react";
import axios from "../axios/config";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [productToBuy, setProductToBuy] = useState([]);

    const getProducts = async () => {
        const products = await axios.get(
            "https://fakestoreapi.com/products?limit=10",
            {
                withCredentials: false,
            }
        );
        setProducts(products?.data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return {
        products,
    };
}
