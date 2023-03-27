import { createContext, useEffect } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
});

export const WebSocketContext = createContext();

export const WebsocketProvider = ({ children }) => {
    const connectToWebsocket = () => {
        const channel = window.Echo.channel("websocket");
        channel.listen("PaymentStatusUpdated", (data) => {
            console.log(data);
        });
    };

    useEffect(() => {
        connectToWebsocket();
    }, []);

    const value = {};

    return (
        <WebSocketContext.Provider value={value}>
            {children}
        </WebSocketContext.Provider>
    );
};
