import { Navigate, Outlet } from "react-router-dom";
import cookies from "cookie-handler";

export function ProtectedRoute() {
    const checkIfTokenExist = () => {
        const token = localStorage.getItem("token");
        let tokenExist = true;
        if (!token) tokenExist = false;
        return tokenExist;
    };

    const tokenExist = checkIfTokenExist();

    if (!tokenExist) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}
