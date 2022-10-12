import React from "react"
import { formatAmount } from "../../helpers"

const TransactionCard = ({ type, amount, amount_krw, amount_usd, rate, receiver, status }) => (
    <div className="transaction-item">
        <div className="transaction-status">{status === "pending" ? "Ko'rib chiqilmoqda" : "Yakunlangan"}</div>
        <div className="transaction-card">
            <div className="transaction-type">{type === "query" ? "Uzb>>Kor" : "Kor>>Uzb"}</div>
            <div className="bar"></div>
            <div className="transaction-amounts">
                {amount && (
                    <div className="transaction-amount">￦ {formatAmount(amount)}</div>
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
                {receiver && (
                    <div className="transaction-details-item">{receiver.name}</div>
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