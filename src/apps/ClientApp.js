import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainPage from "../pages/client/MainPage"
import TransactionsPage from "../pages/client/TransactionsPage"
import TransactionPage from "../pages/client/TransactionPage"
import QueryPage from "../pages/client/QueryPage"
import OfferPage from "../pages/client/OfferPage"
import HistoryPage from "../pages/client/HistoryPage"
import ProfilePage from "../pages/common/ProfilePage"
import ProfileNextPage from "../pages/common/ProfileNextPage"
import NotificationsPage from "../pages/common/NotificationsPage"


function ClientApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route path="/transactions/:transactionId" element={<TransactionPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/message" element={<NotificationsPage />} />

                <Route path="/query" element={<QueryPage />} />
                <Route path="/offer" element={<OfferPage />} />

                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profilenext" element={<ProfileNextPage />} />
            </Routes>
        </Router>
    )
}

export default ClientApp