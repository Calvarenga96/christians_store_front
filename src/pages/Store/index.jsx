import { useContext } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import { DataContext } from "../../context/DataContext";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";

export function Store() {
    const { products } = useProducts();
    const { setProductToBuy } = useContext(DataContext);
    const navigate = useNavigate();

    const handleClick = (product) => {
        setProductToBuy(product);
        navigate("/payment");
    };

    return (
        <Header>
            <Flex
                mt="30px"
                px={10}
                pb={10}
                justify="center"
                align="center"
                direction="column"
            >
                <Heading mb={10}>Christian's Store</Heading>

                <SimpleGrid columns={[1, 3, 5]} gap={[2, 3, 6]}>
                    {products?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            handleClick={handleClick}
                        />
                    ))}
                </SimpleGrid>
            </Flex>
        </Header>
    );
}
