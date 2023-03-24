import { Header } from "../../components/Header";
import { Center, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { ProductCardConfirmPay } from "../../components/ProductCardConfirmPay";
import { ProductDetail } from "../../components/ProductDetail";

export function Payment() {
    return (
        <Header>
            <Center mb={10}>
                <Heading>Detalles del Producto</Heading>
            </Center>

            <SimpleGrid columns={[1, 2, 2]} spacing={10}>
                <Flex align="center" justify="center">
                    <ProductCardConfirmPay />
                </Flex>

                <Flex>
                    <ProductDetail />
                </Flex>
            </SimpleGrid>
        </Header>
    );
}
