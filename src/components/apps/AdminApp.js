import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../pages/admin/MainPage";
import NaverCourse from "../misc/NaverCourse";
import UzbCourse from "../misc/UzbCourse";
import Carriers from "../carrier/Carriers";
import Debts from "../debt/Debts";
import CashFlow from "../misc/CashFlow";
import Reports from "../misc/Reports";
import OfferRequst from "../misc/OfferRequest";
import Offers from "../misc/Offers";
import SingleOffers from "../misc/SingleOffer";
import Requests from "../request/Requests";
import SingleRequests from "../request/SingleRequest";
import Profit from "../misc/Profit";
import Notifications from "../misc/Notifications"

function AdminApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/navercourse" element={<NaverCourse />} />
                <Route path="/uzbcourse" element={<UzbCourse />} />
                <Route path="/carriers" element={<Carriers />} />
                <Route path="/debts" element={<Debts />} />
                <Route path="/cashflow" element={<CashFlow />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/offerrequest" element={<OfferRequst />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/singleoffers" element={<SingleOffers />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/singlerequests" element={<SingleRequests />} />
                <Route path="/profit" element={<Profit />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
        </Router>
    );
}

export default AdminApp;
