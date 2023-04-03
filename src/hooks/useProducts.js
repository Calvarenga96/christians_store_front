import { useState, useEffect } from "react";
import axios from "../axios/config";
import { useToast } from "@chakra-ui/react";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const toast = useToast();

    const getProducts = async () => {
        setSpinner(true);
        try {
            const products = await axios.get(
                "https://fakestoreapi.com/products?limit=10",
                {
                    withCredentials: false,
                }
            );
            setProducts(products?.data);
        } catch (error) {
            console.log(error);
            toast({
                title:
                    error?.message ||
                    "Ha habido un problema para obtener los productos",
                status: "error",
                isClosable: true,
            });
        } finally {
            setSpinner(false);
        }
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
