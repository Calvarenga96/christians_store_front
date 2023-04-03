import { useContext, useState } from "react";
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
    useToast,
} from "@chakra-ui/react";
import axios from "../../axios/config";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

export function AuthForm({ isOpen, onClick }) {
    const { typeOfAuthForm, setUser } = useContext(DataContext);
    const toast = useToast();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameHasError, setNameHasError] = useState(false);
    const [emailHasError, setEmailHasError] = useState(false);
    const [passwordHasError, setPasswordHasError] = useState(false);

    const checkFields = () => {
        let fieldsAreOk = true;

        if (typeOfAuthForm !== "login") {
            if (!name.trim().length) {
                setNameHasError(true);
                fieldsAreOk = false;
            } else if (nameHasError) {
                setNameHasError(false);
            }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fieldsAreOk = checkFields();

        if (fieldsAreOk) {
            const data = {
                name: typeOfAuthForm === "register" ? name : undefined,
                email,
                password,
            };

            try {
                const response =
                    typeOfAuthForm === "register"
                        ? await axios.post("/register", data)
                        : await axios.post("/login", data);

                const dataUser = response?.data?.user;
                const userId = dataUser?.id;
                const token = dataUser?.token;

                setUser(dataUser);
                localStorage.setItem("userId", userId);
                localStorage.setItem("token", token);

                if (typeOfAuthForm === "register") {
                    toast({
                        title: "Se ha creado correctamente tu usuario",
                        status: "success",
                        isClosable: true,
                    });
                } else {
                    navigate("/store");
                }

                setName("");
                setEmail("");
                setPassword("");
            } catch (error) {
                console.log(error);
                toast({
                    title:
                        error?.response?.data?.message ||
                        typeOfAuthForm === "register"
                            ? "Ha habido un problema para crear tu cuenta"
                            : "Ha habido un problema para ingresar a tu cuenta",
                    status: "error",
                    isClosable: true,
                });
            }
        }
    };

    const handleClick = () => {
        setName("");
        setEmail("");
        setPassword("");
        onClick();
    };

    return (
        <>
            {isOpen && (
                <Fade in={isOpen}>
                    <Text fontSize="2xl" mb={5} textAlign="center">
                        Por favor, llena el formulario con tus datos para{" "}
                        {typeOfAuthForm === "register"
                            ? "registrarte"
                            : "iniciar sesión"}
                    </Text>

                    <Container>
                        <form onSubmit={handleSubmit}>
                            {typeOfAuthForm === "register" && (
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
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    {nameHasError && (
                                        <FormErrorMessage>
                                            El nombre es requerido
                                        </FormErrorMessage>
                                    )}
                                </FormControl>
                            )}

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

                            <Flex justify="space-between" columnGap={5}>
                                <Button type="button" onClick={handleClick}>
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
