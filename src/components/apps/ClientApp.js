import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainPage from "../pages/client/MainPage"
import Transactions from "../profile/Transactions"
import TransactionPage from "../transaction/TransactionPage"
import QueryPage from "../pages/client/QueryPage"
import OfferPage from "../pages/client/OfferPage"

import Profilenext from "../profile/ProfileNext"
import Profile2 from "../profile/Profile-2"
import History from "../misc/History"
import Notifications from "../misc/Notifications"

function ClientApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/transactions/:transactionId" element={<TransactionPage />} />
                <Route path="/history" element={<History />} />

                <Route path="/query" element={<QueryPage />} />
                <Route path="/offer" element={<OfferPage />} />

                <Route path="/profile-2" element={<Profile2 />} />
                <Route path="/profilenext" element={<Profilenext />} />
                <Route path="/message" element={<Notifications />} />
            </Routes>
        </Router>
    )
}

export default ClientApp