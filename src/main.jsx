import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "../src/context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <DataProvider>
                <App />
            </DataProvider>
        </ChakraProvider>
    </React.StrictMode>
);
