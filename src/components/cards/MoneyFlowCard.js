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
                           rate
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
                    __html:
                        (amount_krw ? "￦" + formatAmount(amount_krw) : "")
                        + (amount_krw && amount_usd ? "<br />" : "") +
                        (amount_usd ? "$" + formatAmount(amount_usd) : "")
                        + (amount_usd && amount_uzs ? "<br />" : "") +
                        (amount_uzs ? (formatAmount(amount_uzs) + " so'm") : "")
                }} />
                <div className="bar"></div>
                <div
                    className="moneyflow-amounts d-flex flex-column align-items-center justify-content-center text-bold ">
                    <div>
                        {
                            rate !== 0 ?
                                ("$1 = " + rate)
                                :
                                (to_id === id ?
                                        ("$1 = ￦" + sell_rate)
                                        :
                                        ("$1 = ￦" + buy_rate)
                                )
                        }
                    </div>
                    <div>
                        {
                            "Jami: $" + (amount_krw ?
                                (to_id === id ?
                                        formatAmount(amount_krw / (sell_rate), true, true)
                                        :
                                        formatAmount(amount_krw / (buy_rate), true, true)
                                )
                                :
                                formatAmount(amount_usd + (amount_uzs !== 0 ? amount_uzs / rate : 0), true))
                        }
                    </div>
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