import { useContext } from "react";
import { Box, Image } from "@chakra-ui/react";
import { DataContext } from "../../context/DataContext";

export function ProductCardConfirmPay() {
    const { productToBuy } = useContext(DataContext);

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
                src={productToBuy?.image}
                alt={productToBuy?.title}
                maxW="300px"
            />

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {productToBuy?.category}
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                >
                    {productToBuy?.title}
                </Box>

                <Box
                    display="flex"
                    mt="2"
                    alignItems="center"
                    justifyContent="center"
                >
                    {productToBuy?.description}
                </Box>
            </Box>
        </Box>
    );
}
