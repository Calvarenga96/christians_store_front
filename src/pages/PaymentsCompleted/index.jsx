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
        const debts = await axios.get(
            "https://staging.adamspay.com/api/v1/debts?page=3",
            {
                headers: {
                    apikey: import.meta.env.VITE_ADAMS_API_KEY,
                },
                withCredentials: false,
            }
        );
        setDebts(debts?.data?.debts);
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
                            {debts.map((debt, index) => (
                                <Tr key={debt?.docId}>
                                    <Td>
                                        <Text>{index + 1}</Text>
                                    </Td>
                                    <Td>
                                        <Text>{debt?.docId}</Text>
                                    </Td>
                                    <Td>
                                        <Text>
                                            {debt?.label?.substr(0, 50)}...
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text>
                                            {debt?.amount?.value.split(".")[0]}{" "}
                                            Gs.
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text>{debt?.objStatus?.status}</Text>
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
