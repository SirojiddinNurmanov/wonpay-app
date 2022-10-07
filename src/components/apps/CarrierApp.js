import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../pages/carrier/MainPage";
import CarrierSale from "../carrier/CarrierSale";
import GetMoney from "../misc/GetMoney";
import GiveMoney from "../misc/GiveMoney";

function CarrierApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/givemoney" element={<GiveMoney />} />
                <Route path="/getmoney" element={<GetMoney />} />
                <Route path="/submitmoney" element={<CarrierSale />} />
                <Route path="/history" element={<CarrierSale />} />
                <Route path="/notifications" element={<CarrierSale />} />
            </Routes>
        </Router>
    );
}

export default CarrierApp;
