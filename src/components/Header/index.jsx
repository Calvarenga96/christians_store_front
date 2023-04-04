import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/config";

export function Header({ children }) {
    const navigate = useNavigate();

    const route = window.location.pathname;

    const handleClick = async () => {
        const userId = localStorage.getItem("userId");
        await axios.post("/logout", { id: userId });
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <>
            <Flex justify="flex-end" columnGap={5} mt="10px" mx="40px">
                {route !== "/payments-completed" && (
                    <Button
                        colorScheme="teal"
                        onClick={() => navigate("/payments-completed")}
                    >
                        Ver Mis Deudas
                    </Button>
                )}

                {route !== "/store" && (
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        onClick={() => navigate("/store")}
                    >
                        Volver A La Store
                    </Button>
                )}

                <Button
                    colorScheme="teal"
                    variant="ghost"
                    onClick={handleClick}
                >
                    Cerrar Sesión
                </Button>
            </Flex>
            {children}
        </>
    );
}
