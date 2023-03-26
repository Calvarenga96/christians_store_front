import { useEffect, useContext, useState } from "react";
import axios from "../../axios/config";
import { WebhookContext } from "../../context/WebhookContext";

export function PaymentsCompleted() {
    const [debts, setDebts] = useState([]);
    const { listenToWebsocket } = useContext(WebhookContext);

    const getDebts = async () => {
        const debts = await axios.get(
            "https://staging.adamspay.com/api/v1/debts",
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
        listenToWebsocket();
    }, []);

    return (
        <>
            {debts.map((debt, index) => (
                <div key={index}>
                    <>{index}</>
                    <>{debt?.value}</>
                    <br />
                    <>{debt?.objStatus?.status}</>
                    <br />
                    <>{debt?.label}</>
                    <br />
                    <>{debt?.payUrl}</>
                    <br />
                    <br />
                </div>
            ))}
        </>
    );
}
