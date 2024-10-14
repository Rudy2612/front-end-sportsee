import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Dashboard from "../pages/dashboard";

export default function Router() {
    return (
        <BrowserRouter basename="/">
            <Header />

            <Routes>
                <Route path="/" element={null} />
                <Route path="dashboard/:id" element={<Dashboard />} />
            </Routes>

        </BrowserRouter>
    )
}