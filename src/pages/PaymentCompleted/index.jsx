import { useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import io from "socket.io-client";

const devMode = import.meta.env.VITE_DEV_MODE;
const uri =
    "devMode" === "dev"
        ? "http://localhost:6001"
        : "https://christiansstoreback-production.up.railway.app";

export function PaymentCompleted() {
    const { docId } = useContext(DataContext);

    useEffect(() => {
        const socket = io(uri, {
            withCredentials: false,
        });

        socket.emit("subscribe", "chat");

        socket.on("message", (data) => {
            console.log(data.message);
        });
    }, []);

    return <div>PaymentCompleted</div>;
}
