import { useState } from "react";
import {
    Fade,
    Container,
    Input,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Box,
    Button,
    Flex,
} from "@chakra-ui/react";

export function RegisterForm({ isOpen, onClick }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameHasError, setNameHasError] = useState(false);
    const [emailHasError, setEmailHasError] = useState(false);
    const [passwordHasError, setPasswordHasError] = useState(false);

    const checkFields = () => {
        let fieldsAreOk = true;

        if (!name.trim().length) {
            setNameHasError(true);
            fieldsAreOk = false;
        } else if (nameHasError) {
            setNameHasError(false);
        }

        if (!email.trim().length) {
            setEmailHasError(true);
            fieldsAreOk = false;
        } else if (emailHasError) {
            setEmailHasError(false);
        }

        if (password.length < 8 || !password.trim().length) {
            setPasswordHasError(true);
            fieldsAreOk = false;
        } else if (passwordHasError) {
            setPasswordHasError(false);
        }

        return fieldsAreOk;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fieldsAreOk = checkFields();
        console.log({ fieldsAreOk });
    };

    return (
        <>
            {isOpen && (
                <Fade in={isOpen}>
                    <Text fontSize="2xl" mb={5}>
                        Por favor, llena el formulario con tus datos
                    </Text>

                    <Container>
                        <form onSubmit={handleSubmit}>
                            <FormControl
                                isRequired
                                mb={3}
                                isInvalid={nameHasError}
                            >
                                <FormLabel>Nombre</FormLabel>
                                <Input
                                    value={name}
                                    name="name"
                                    type="text"
                                    _placeholder={{ color: "teal" }}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {nameHasError && (
                                    <FormErrorMessage>
                                        El nombre es requerido
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl
                                isRequired
                                mb={3}
                                isInvalid={emailHasError}
                            >
                                <FormLabel>Correo electrónico</FormLabel>
                                <Input
                                    value={email}
                                    name="email"
                                    type="email"
                                    _placeholder={{ color: "teal" }}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailHasError && (
                                    <FormErrorMessage>
                                        El correo electrónico es requerido
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl
                                isRequired
                                mb={3}
                                isInvalid={passwordHasError}
                            >
                                <FormLabel>Contraseña</FormLabel>
                                <Input
                                    value={password}
                                    name="password"
                                    type="password"
                                    _placeholder={{ color: "teal" }}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {passwordHasError && (
                                    <FormErrorMessage>
                                        La contraseña es requerida y debe tener
                                        al menos 8 caracteres
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <Flex justify="space-between">
                                <Button type="button" onClick={onClick}>
                                    Volver atrás
                                </Button>
                                <Button type="submit" colorScheme="teal">
                                    Enviar
                                </Button>
                            </Flex>
                        </form>
                    </Container>
                </Fade>
            )}
        </>
    );
}
