import { useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";

const devMode = import.meta.env.VITE_DEV_MODE;
const uri =
    "devMode" === "dev"
        ? "http://127.0.0.1:6001"
        : "https://christiansstoreback-production.up.railway.app";

export function PaymentCompleted() {
    const { docId } = useContext(DataContext);

    useEffect(() => {
        Echo.channer("payment-status-update").listen(
            "PaymentStatusUpdated",
            (e) => {
                console.log(e);
            }
        );
    }, []);

    return <div>PaymentCompleted</div>;
}
