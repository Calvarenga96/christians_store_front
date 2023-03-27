import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Payment } from "./pages/Payment";
import { PaymentsCompleted } from "./pages/PaymentsCompleted";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/store" element={<Store />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route
                        path="/payments-completed"
                        element={<PaymentsCompleted />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
