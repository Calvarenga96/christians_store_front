import { useContext, useState } from "react";
import {
    Box,
    Button,
    Flex,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast,
    Spinner,
} from "@chakra-ui/react";
import { DataContext } from "../../context/DataContext";
import axios from "../../axios/config";
import { useProducts } from "../../hooks/useProducts";

export function ProductDetail() {
    const { productToBuy, user, setUser } = useContext(DataContext);
    const { spinner, setSpinner } = useProducts();
    const [cip, setCip] = useState("");
    const [isError, setIsError] = useState(false);
    const toast = useToast();

    const handleSubmit = async (e) => {
        setSpinner(true);
        e.preventDefault();

        if (cip === "") return setIsError(true);

        setUser((prevData) => ({ ...prevData, cip }));

        const data = {
            userId: user.id,
            value: productToBuy.price.toString().replace(".", ""),
            description: productToBuy.title,
            cip,
            name: productToBuy?.title,
        };

        try {
            const response = await axios.post("/create-debt", data);
            const payUrl = response?.data?.response?.debt?.payUrl;
            window.open(payUrl);
        } catch (error) {
            console.log(error);
            toast({
                title: error.response.data,
                status: "error",
                isClosable: true,
            });
        } finally {
            setSpinner(false);
        }
    };

    return (
        <>
            {spinner ? (
                <>
                    <Spinner />
                </>
            ) : (
                <Box
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    h="max-content"
                    p={5}
                >
                    <Text as="b">Costo Total:</Text>{" "}
                    <Text mb={10}>
                        {productToBuy?.price?.toString().replace(".", "")} Gs.
                    </Text>
                    <form onSubmit={handleSubmit}>
                        <FormControl isInvalid={isError}>
                            <FormLabel>Ingresa tu número de cédula</FormLabel>
                            <NumberInput
                                isRequired
                                mb={3}
                                onChange={(value) => setCip(value)}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            {isError && (
                                <FormErrorMessage>
                                    El número de cédula es requerido
                                </FormErrorMessage>
                            )}
                            <Flex justify="center">
                                <Button colorScheme="teal" type="submit">
                                    Dirigirse a la zona de pago
                                </Button>
                            </Flex>
                        </FormControl>
                    </form>
                </Box>
            )}
        </>
    );
}
