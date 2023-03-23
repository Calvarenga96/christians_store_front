import { Flex, Heading, Text, Button } from "@chakra-ui/react";

export function RegisterMessage({ onClick, isOpen }) {
    return (
        <>
            {!isOpen && (
                <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    rowGap="30px"
                >
                    <Heading>¡Bienvenido!</Heading>

                    <Text fontSize="2xl">
                        Para poder continuar, necesitas registrarte
                    </Text>

                    <Button
                        colorScheme="teal"
                        variant="outline"
                        onClick={onClick}
                    >
                        Registrarse
                    </Button>
                </Flex>
            )}
        </>
    );
}
