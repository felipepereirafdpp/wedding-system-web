import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/home";
import PresenteScreen from "../Pages/Home/presenteScreen";
import EfetuarPagemnto from "../Pages/Home/efetuarCompra";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presenteScreen" element={<PresenteScreen />} />
            <Route path="/presente/:id" element={<EfetuarPagemnto />} />
        </Routes>
    );
}