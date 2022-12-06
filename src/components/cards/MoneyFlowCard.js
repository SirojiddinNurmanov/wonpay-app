import React, { memo } from "react";

import { formatAmount } from "../../helpers";
import { useSelector } from "react-redux";

const MoneyFlowCard = ({
                           from_id,
                           to_id,
                           amount_krw,
                           amount_usd,
                           amount_uzs,
                           buy_rate,
                           sell_rate,
                           rate,
                           status,
                           created_at
                       }) => {
    const { id } = useSelector(state => state.app.user.user);
    let isFrom = (id === from_id);
    return (
        <div className="moneyflow-item">
            <div className="moneyflow-status">
                {isFrom ? "Berildi" : "Olindi"}
            </div>
            <div className="moneyflow-card">
                <div className="moneyflow-type text-center" dangerouslySetInnerHTML={{
                    __html: (to_id === id) ? (amount_krw ? "￦" + formatAmount(amount_krw) : "")
                        + (amount_krw && amount_usd ? "<br />" : "") +
                        (amount_usd ? "$" + formatAmount(amount_usd) : "")
                        + (amount_usd && amount_uzs ? "<br />" : "") +
                        (amount_uzs ? (formatAmount(amount_uzs) + " so'm") : "")
                        : (amount_krw ? "￦" + formatAmount(amount_krw) : "")
                        + (amount_krw && amount_usd ? "<br />" : "") +
                        (amount_usd ? "$" + formatAmount(amount_usd) : "")
                        + (amount_usd && amount_uzs ? "<br />" : "") +
                        (amount_uzs ? (formatAmount(amount_uzs) + " so'm") : "")
                }} />
                <div className="bar"></div>
                <div className="moneyflow-amounts text-center text-bold">
                    {rate > 0 ? ("$1 = " + rate) : buy_rate ? ("$1 = ￦" + buy_rate) : ("$1 = ￦" + sell_rate)}
                    {rate || buy_rate || sell_rate ? (<br />) : ""}
                    {"Jami: $" + (amount_krw ? formatAmount(amount_krw / (buy_rate ?? sell_rate), true, true) : formatAmount(amount_usd + (amount_uzs / rate)))}
                </div>
            </div>
        </div>
    );
};

MoneyFlowCard.defaultProps = {
    amount_krw: false,
    amount_usd: false,
    rate: false,
    carrier: false
};

export default memo(MoneyFlowCard);