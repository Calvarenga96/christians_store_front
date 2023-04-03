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
} from "@chakra-ui/react";
import axios from "../../axios/config";
import { Header } from "../../components/Header";

export function PaymentsCompleted() {
    const [debts, setDebts] = useState([]);

    const getDebts = async () => {
        const userId = localStorage.getItem("userId");
        const debts = await axios.get(`/payments/${userId}`);
        setDebts(debts?.data);
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
                                        <Text>
                                            {debt?.amount?.value.split(".")[0]}{" "}
                                            Gs.
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text>{debt?.status}</Text>
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
