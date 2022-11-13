import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { getOffers, getQueries } from "../store/actions"

import MainPage from "../pages/client/MainPage"
import QueryPage from "../pages/client/QueryPage"
import OfferPage from "../pages/client/OfferPage"
import ProfilePage from "../pages/common/ProfilePage"
import TransactionsPage from "../pages/client/TransactionsPage"
import BalanceSheetPage from "../pages/client/BalanceSheetPage"
import NotificationsPage from "../pages/client/NotificationsPage"
import QueryTransactionDetailsPage from "../pages/client/QueryTransactionDetailsPage"
import OfferTransactionDetailsPage from "../pages/client/OfferTransactionDetailsPage"

const ClientApp = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOffers())
        dispatch(getQueries())
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route path="/transactions/query/:queryId" element={<QueryTransactionDetailsPage />} />
                <Route path="/transactions/offer/:offerId" element={<OfferTransactionDetailsPage />} />
                <Route path="/balancesheet" element={<BalanceSheetPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />

                <Route path="/query" element={<QueryPage />} />
                <Route path="/offer" element={<OfferPage />} />

                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    )
}

export default ClientApp