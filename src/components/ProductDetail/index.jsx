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
} from "@chakra-ui/react";
import { DataContext } from "../../context/DataContext";
import axios from "../../axios/config";

export function ProductDetail() {
    const { productToBuy, user } = useContext(DataContext);
    const [cip, setCip] = useState("");
    const [isError, setIsError] = useState(false);
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cip === "") return setIsError(true);

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

            console.log(response);
            return;
            window.open(payUrl);
        } catch (error) {
            console.log(error);
            toast({
                title: error.response.data,
                status: "error",
                isClosable: true,
            });
        }
    };

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            h="max-content"
            p={5}
        >
            <Text as="b">Costo Total:</Text>{" "}
            <Text>{productToBuy?.price?.toString().replace(".", "")} Gs.</Text>
            <br />
            <br />
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
    );
}
