import React, { memo } from "react"

import { formatAmount } from "../../helpers"

const TransactionCard = ({ process_type, amount, exchange_rate, buy_rate, receiver, status }) => {
    return (
        <div className="transaction-item">
            <div className="transaction-status">{status === 0 ? "Ko'rib chiqilmoqda" : "Yakunlangan"}</div>
            <div className="transaction-card">
                <div className="transaction-type">{process_type === 0 ? "Uzb>>Kor" : "Kor>>Uzb"}</div>
                <div className="bar"></div>
                <div className="transaction-amounts">
                    {amount && (
                        <div className="transaction-amount">￦ {formatAmount(amount)}</div>
                    )}
                    {process_type === 0 ? exchange_rate != 0 && (
                        <div className="transaction-amount">$ {formatAmount((amount / exchange_rate), true)}</div>
                    ) : process_type === 1 && (
                        <div className="transaction-amount">$ {formatAmount((amount / buy_rate), true)}</div>
                    )}
                </div>
                <div className="bar"></div>
                <div className="transaction-details">
                    {process_type === 0 ? exchange_rate != 0 && (
                        <div className="transaction-details-item">{exchange_rate}</div>
                    ) : process_type === 1 && (
                        <div className="transaction-details-item">{buy_rate}</div>
                    )}
                    {receiver && (
                        <div className="transaction-details-item">{receiver.name}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

TransactionCard.defaultProps = {
    amount_krw: false,
    amount_usd: false,
    rate: false,
    carrier: false
}

export default memo(TransactionCard)