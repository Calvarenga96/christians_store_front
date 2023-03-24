import { useContext } from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { DataContext } from "../../context/DataContext";

export function RegisterMessage({ onClick, isOpen }) {
    const { setTypeOfAuthForm } = useContext(DataContext);

    const handleRegisterButtonClick = () => {
        setTypeOfAuthForm("register");
        onClick();
    };

    const handleLoginButtonClick = () => {
        setTypeOfAuthForm("login");
        onClick();
    };

    return (
        <>
            {!isOpen && (
                <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    rowGap="30px"
                >
                    <Heading>¡Bienvenido a Christian's Store!</Heading>

                    <Text fontSize="2xl">
                        Para poder continuar, necesitas registrarte o iniciar
                        sesión
                    </Text>

                    <Flex columnGap={5}>
                        <Button
                            colorScheme="teal"
                            variant="outline"
                            onClick={handleRegisterButtonClick}
                        >
                            Registrarse
                        </Button>

                        <Button
                            colorScheme="teal"
                            variant="outline"
                            onClick={handleLoginButtonClick}
                        >
                            Iniciar Sesión
                        </Button>
                    </Flex>
                </Flex>
            )}
        </>
    );
}
