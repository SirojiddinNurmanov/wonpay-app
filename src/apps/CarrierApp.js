import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainPage from "../pages/carrier/MainPage"
import ReceivePage from "../pages/carrier/ReceivePage"
import DeliverPage from "../pages/carrier/DeliverPage"
import SubmitPage from "../pages/carrier/SubmitPage"

function CarrierApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/receive" element={<ReceivePage />} />
                <Route path="/deliver" element={<DeliverPage />} />
                <Route path="/submit" element={<SubmitPage />} />
                <Route path="/history" element={<SubmitPage />} />
                <Route path="/notifications" element={<SubmitPage />} />
            </Routes>
        </Router>
    )
}

export default CarrierApp
