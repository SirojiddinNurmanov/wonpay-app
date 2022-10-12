import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainPage from "../pages/admin/MainPage"
import NaverRatePage from "../pages/admin/NaverRatePage"
import UZSRatePage from "../pages/admin/UZSRatePage"
import CarriersPage from "../pages/admin/CarriersPage"
import DebtsPage from "../pages/admin/DebtsPage"
import CashFlowPage from "../pages/admin/CashFlowPage"
import ReportsPage from "../pages/admin/ReportsPage"
import ProcessesPage from "../pages/admin/ProcessesPage"
import OffersPage from "../pages/admin/OffersPage"
import SingleOfferPage from "../pages/admin/SingleOfferPage"
import QueriesPage from "../pages/admin/QueriesPage"
import SingleQueryPage from "../pages/admin/SingleQueryPage"
import ProfitPage from "../pages/admin/ProfitPage"
import NotificationsPage from "../pages/admin/NotificationsPage"
import ProfilePage from "../pages/common/ProfilePage"

const AdminApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/navercourse" element={<NaverRatePage />} />
                <Route path="/uzbcourse" element={<UZSRatePage />} />
                <Route path="/carriers" element={<CarriersPage />} />
                <Route path="/debts" element={<DebtsPage />} />
                <Route path="/cashflow" element={<CashFlowPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/processes" element={<ProcessesPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/singleoffer" element={<SingleOfferPage />} />
                <Route path="/queries" element={<QueriesPage />} />
                <Route path="/singlequery" element={<SingleQueryPage />} />
                <Route path="/profit" element={<ProfitPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    )
}

export default AdminApp
