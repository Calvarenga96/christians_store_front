import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "../src/context/DataContext";
import { WebsocketProvider } from "../src/context/WebsocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <WebsocketProvider>
                <DataProvider>
                    <App />
                </DataProvider>
            </WebsocketProvider>
        </ChakraProvider>
    </React.StrictMode>
);
