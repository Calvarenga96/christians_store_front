import { useEffect, useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Box,
    Text,
    Button,
} from "@chakra-ui/react";
import axios from "../../axios/config";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export function PaymentsCompleted() {
    const [debts, setDebts] = useState([]);
    const navigate = useNavigate();

    const getDebts = async () => {
        const userId = localStorage.getItem("userId");
        const debts = await axios.get(`/payments/${userId}`);
        console.log(debts);
        setDebts(debts?.data);
    };

    const handleClik = (urlPayment) => {
        window.open(urlPayment);
    };

    useEffect(() => {
        getDebts();
    }, []);

    return (
        <Header>
            <Box w="100%" p={10}>
                <Heading mb={5} display="flex" justifyContent="center">
                    Lista de pagos
                </Heading>

                <TableContainer w="100%">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Id</Th>
                                <Th>Producto</Th>
                                <Th>Precio</Th>
                                <Th>Estado</Th>
                                <Th>Acciones</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {debts?.map((debt, index) => (
                                <Tr key={debt?.doc_id}>
                                    <Td>
                                        <Text>{index + 1}</Text>
                                    </Td>
                                    <Td>
                                        <Text>{debt?.doc_id}</Text>
                                    </Td>
                                    <Td>
                                        <Text>
                                            {debt?.product?.substr(0, 50)}...
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text>{debt?.value} Gs.</Text>
                                    </Td>
                                    <Td>
                                        <Text>{debt?.status}</Text>
                                    </Td>
                                    <Td>
                                        {debt?.status === "pending" ? (
                                            <Button
                                                onClick={() =>
                                                    handleClik(debt?.urlPayment)
                                                }
                                            >
                                                Pagar
                                            </Button>
                                        ) : (
                                            <Text>Abonado</Text>
                                        )}
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Header>
    );
}
