import React, { memo } from "react";

import { formatAmount } from "../../helpers";

const TransactionCard = ({ process_type, assigned_queries, amount, exchange_rate, buy_rate, receiver, status }) => {
    let usedAmount = assigned_queries?.length > 0 ? assigned_queries.map(query => query.amount).reduce((sum, amount) => sum + amount) : 0;
    return (
        <div className="transaction-item">
            <div className="transaction-status">{status === 0 ? "Ko'rib chiqilmoqda" : "Yakunlangan"}</div>
            <div className="transaction-card">
                <div className="transaction-type">{process_type === 0 ? "Uzb>>Kor" : "Kor>>Uzb"}</div>
                <div className="bar"></div>
                <div className="transaction-amounts">
                    {process_type === 1 && (
                        <>
                            {usedAmount !== 0 && (usedAmount < amount) && (
                                <div className="transaction-amount"><strike>￦ {formatAmount(amount)}</strike></div>
                            )}
                            <div
                                className="transaction-amount">￦ {status === 1 ? usedAmount === amount ? formatAmount(amount) : formatAmount(usedAmount) : formatAmount(amount)}</div>
                        </>
                    )}
                    {process_type === 0 && (
                        <div className="transaction-amount">￦ {formatAmount(amount)}</div>
                    )}
                    {process_type === 0 ? (
                        <div className="transaction-amount">$ {formatAmount((amount / exchange_rate), true, true)}</div>
                    ) : (
                        <div className="transaction-amount">$ {formatAmount((usedAmount / buy_rate), true, true)}</div>
                    )}
                </div>
                <div className="bar"></div>
                <div className="transaction-details">
                    {process_type === 0 ? exchange_rate != 0 && (
                        <div className="transaction-details-item">{exchange_rate}</div>
                    ) : process_type === 1 && buy_rate !== 0 && (
                        <div className="transaction-details-item">{buy_rate}</div>
                    )}
                    {receiver && (
                        <div className="transaction-details-item">{receiver.name}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

TransactionCard.defaultProps = {
    amount_krw: false,
    amount_usd: false,
    rate: false,
    carrier: false
};

export default memo(TransactionCard);