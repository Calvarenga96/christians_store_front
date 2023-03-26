import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "../src/context/DataContext";
import { WebhookProvider } from "./context/WebhookContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <WebhookProvider>
                <DataProvider>
                    <App />
                </DataProvider>
            </WebhookProvider>
        </ChakraProvider>
    </React.StrictMode>
);
