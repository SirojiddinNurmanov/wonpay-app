import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainPage from "../pages/carrier/MainPage"
import ReceivePage from "../pages/carrier/ReceivePage"
import DeliverPage from "../pages/carrier/DeliverPage"
// import SubmitPage from "../pages/carrier/SubmitPage"
import BalanceSheetPage from "../pages/carrier/BalanceSheetPage"
import NotificationsPage from "../pages/carrier/NotificationsPage"
import ProfilePage from "../pages/common/ProfilePage"

const CarrierApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/receive" element={<ReceivePage />} />
                <Route path="/deliver" element={<DeliverPage />} />
                {/* <Route path="/submit" element={<SubmitPage />} /> */}
                <Route path="/balancesheet" element={<BalanceSheetPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    )
}

export default CarrierApp
