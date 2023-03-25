import { Button, Box, Image, Badge } from "@chakra-ui/react";

export function ProductCard({ product, handleClick }) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product?.image} alt={product?.title} />

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        Nuevo
                    </Badge>

                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {product?.category}
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                >
                    {product?.title}
                </Box>

                <Box>
                    {product?.price.toString().replace(".", "")}
                    <Box as="span" color="gray.600" fontSize="sm">
                        {" "}
                        Gs.
                    </Box>
                </Box>

                <Box
                    display="flex"
                    mt="2"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        <Button
                            colorScheme="teal"
                            onClick={() => handleClick(product)}
                        >
                            Comprar
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
