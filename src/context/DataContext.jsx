import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [typeOfAuthForm, setTypeOfAuthForm] = useState("");
    const [messageModal, setMessageModal] = useState("");
    const [user, setUser] = useState({});
    const [productToBuy, setProductToBuy] = useState([]);

    const value = {
        typeOfAuthForm,
        setTypeOfAuthForm,
        user,
        setUser,
        isOpen,
        onOpen,
        onClose,
        messageModal,
        setMessageModal,
        productToBuy,
        setProductToBuy,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
