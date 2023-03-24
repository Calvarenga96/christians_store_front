import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { RegisterMessage } from "../../components/RegisterMessage";
import { AuthForm } from "../../components/AuthForm";

export function Home() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex
            align="center"
            justify="center"
            w="100%"
            h="100%"
            mt={isOpen ? "10%" : "20%"}
            direction="column"
            rowGap="30px"
        >
            <RegisterMessage onClick={onToggle} isOpen={isOpen} />
            <AuthForm onClick={onToggle} isOpen={isOpen} />
        </Flex>
    );
}
