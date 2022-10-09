import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainPage from "../pages/client/MainPage"
import TransactionsPage from "../pages/client/TransactionsPage"
import QueryPage from "../pages/client/QueryPage"
import OfferPage from "../pages/client/OfferPage"
import BalanceSheetPage from "../pages/client/BalanceSheetPage"
import ProfilePage from "../pages/common/ProfilePage"
import QueryTransactionDetailsPage from "../pages/client/QueryTransactionDetailsPage"
import OfferTransactionDetailsPage from "../pages/client/OfferTransactionDetailsPage"
import NotificationsPage from "../pages/common/NotificationsPage"


const ClientApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route path="/transactions/query/:transactionId" element={<QueryTransactionDetailsPage />} />
                <Route path="/transactions/offer/:transactionId" element={<OfferTransactionDetailsPage />} />
                <Route path="/balancesheet" element={<BalanceSheetPage />} />
                <Route path="/message" element={<NotificationsPage />} />

                <Route path="/query" element={<QueryPage />} />
                <Route path="/offer" element={<OfferPage />} />

                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    )
}

export default ClientApp