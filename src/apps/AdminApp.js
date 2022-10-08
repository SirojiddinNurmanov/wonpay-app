import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../pages/admin/MainPage";
import NaverCoursePage from "../pages/admin/NaverCoursePage";
import UzbCoursePage from "../pages/admin/UzbCoursePage";
import CarriersPage from "../pages/admin/CarriersPage";
import DebtsPage from "../pages/admin/DebtsPage";
import CashFlowPage from "../pages/admin/CashFlowPage";
import ReportsPage from "../pages/admin/ReportsPage";
import OfferRequstPage from "../pages/admin/OfferRequestPage";
import OffersPage from "../pages/admin/OffersPage";
import SingleOfferPage from "../pages/admin/SingleOfferPage";
import RequestsPage from "../pages/admin/RequestsPage";
import SingleRequestPage from "../pages/admin/SingleRequestPage";
import ProfitPage from "../pages/admin/ProfitPage";
import NotificationsPage from "../pages/common/NotificationsPage"

function AdminApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/navercourse" element={<NaverCoursePage />} />
                <Route path="/uzbcourse" element={<UzbCoursePage />} />
                <Route path="/carriers" element={<CarriersPage />} />
                <Route path="/debts" element={<DebtsPage />} />
                <Route path="/cashflow" element={<CashFlowPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/offerrequest" element={<OfferRequstPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/singleoffer" element={<SingleOfferPage />} />
                <Route path="/requests" element={<RequestsPage />} />
                <Route path="/singlerequest" element={<SingleRequestPage />} />
                <Route path="/profit" element={<ProfitPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
            </Routes>
        </Router>
    );
}

export default AdminApp;
