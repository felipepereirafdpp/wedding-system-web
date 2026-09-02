import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/home";
import PresenteScreen from "../Pages/Home/presenteScreen";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presenteScreen" element={<PresenteScreen />} />
        </Routes>
    );
}