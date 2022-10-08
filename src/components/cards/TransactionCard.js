import React from "react"

const TransactionCard = ({ type, amount_krw, amount_usd, rate, carrier, status }) => (
    <div className="transaction-item">
        <div className="transaction-status">{status === "pending" ? "Ko'rib chiqilmoqda" : "Yakunlangan"}</div>
        <div className="transaction-card">
            <div className="transaction-type">{type === "query" ? "Uzb>>Kor" : "Kor>>Uzb"}</div>
            <div className="bar"></div>
            <div className="transaction-amounts">
                {amount_krw && (
                    <div className="transaction-amount">{amount_krw}</div>
                )}
                {amount_usd && (
                    <div className="transaction-amount">{amount_usd}</div>
                )}
            </div>
            <div className="bar"></div>
            <div className="transaction-details">
                {rate && (
                    <div className="transaction-details-item">{rate}</div>
                )}
                {carrier && (
                    <div className="transaction-details-item">{carrier}</div>
                )}
            </div>
        </div>
    </div>
)

TransactionCard.defaultProps = {
    amount_krw: false,
    amount_usd: false,
    rate: false,
    carrier: false
}

export default TransactionCard