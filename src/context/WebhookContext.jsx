import { createContext } from "react";
import Echo from "laravel-echo";

export const WebhookContext = createContext();

window.Echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
});

export function WebhookProvider({ children }) {
    const listenToWebsocket = () => {
        window.Echo.connector
            .channel("payments-status-update")
            .listen(".payment-updated", (e) => {
                console.log(JSON.stringify(e));
            });
    };

    const value = { listenToWebsocket };

    return (
        <WebhookContext.Provider value={value}>
            {children}
        </WebhookContext.Provider>
    );
}
