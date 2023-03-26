import { useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
});

const devMode = import.meta.env.VITE_DEV_MODE;

const uri =
    devMode === "dev"
        ? "http://127.0.0.1:6001"
        : "https://christiansstoreback-production.up.railway.app";

export function PaymentCompleted() {
    const { docId } = useContext(DataContext);

    useEffect(() => {
        echo.channel(`payment-status-update`).listen(
            "PaymentStatusUpdated",
            (e) => {
                console.log(e.event);
            }
        );
    }, []);

    return <div>PaymentCompleted</div>;
}
