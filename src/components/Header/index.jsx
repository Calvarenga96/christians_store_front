import { Button, Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/config";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export function Header({ children }) {
    const navigate = useNavigate();
    const { user } = useContext(DataContext);

    const handleClick = async () => {
        await axios.post("/logout", { id: user.id });
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <>
            <Flex justify="flex-end" mt="10px" mx="40px">
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
