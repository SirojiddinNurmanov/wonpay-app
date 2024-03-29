import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "../pages/admin/MainPage";
import NaverRatePage from "../pages/admin/NaverRatePage";
import CarriersPage from "../pages/admin/CarriersPage";
import UsersPage from "../pages/admin/UsersPage";
import DebtsPage from "../pages/admin/DebtsPage";
import MoneyFlowPage from "../pages/admin/MoneyFlowPage";
import ReportsPage from "../pages/admin/ReportsPage";
import ProcessesPage from "../pages/admin/ProcessesPage";
import OffersPage from "../pages/admin/OffersPage";
import SingleOfferPage from "../pages/admin/SingleOfferPage";
import QueriesPage from "../pages/admin/QueriesPage";
import SingleQueryPage from "../pages/admin/SingleQueryPage";
import ProfitPage from "../pages/admin/ProfitPage";
import NotificationsPage from "../pages/admin/NotificationsPage";
import ProfilePage from "../pages/common/ProfilePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOffers, getQueries } from "../store/actions";

const AdminApp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOffers());
        dispatch(getQueries());

        // eslint-disable-next-line
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/navercourse" element={<NaverRatePage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/carriers" element={<CarriersPage />} />
                <Route path="/debts" element={<DebtsPage />} />
                <Route path="/moneyflow" element={<MoneyFlowPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/processes" element={<ProcessesPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/offers/:offerId" element={<SingleOfferPage />} />
                <Route path="/queries" element={<QueriesPage />} />
                <Route path="/queries/:queryId" element={<SingleQueryPage />} />
                <Route path="/profit" element={<ProfitPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/profile/:userId" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
};

export default AdminApp;
