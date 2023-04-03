import { useContext, useEffect } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { RegisterMessage } from "../../components/RegisterMessage";
import { AuthForm } from "../../components/AuthForm";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

export function Home() {
    const { isOpen, onToggle } = useDisclosure();
    const { setDocId } = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const docId = urlParams.get("doc_id");

        if (docId !== null) {
            setDocId(docId);
            navigate("/payments-completed");
        }
    }, []);

    return (
        <Flex
            align="center"
            justify="center"
            p={10}
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
