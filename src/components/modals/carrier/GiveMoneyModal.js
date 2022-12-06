import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { giverGiveMoney } from "../../../store/actions";
import { formatAmount } from "../../../helpers";

import ModalLayout from "../ModalLayout";

const GiveMoneyModal = (props) => {
    const [amount_usd, setAmountUSD] = useState();
    const [amount_uzs, setAmountUZS] = useState();
    const [rate, setRate] = useState();
    const { user } = useSelector(state => state.app.user);
    const dispatch = useDispatch();

    const clearFields = () => {
        setAmountUSD("");
        setAmountUZS("");
        setRate("");
    };
    let usedAmount = props.assigned_queries?.length > 0 ? props.assigned_queries.map(query => query.amount).reduce((sum, amount) => sum + amount) : 0;

    let canPay = (usedAmount ? (usedAmount / props.buy_rate) : 0) <= user?.balance;

    let buttons = [
        {
            title: "Bekor Qilish",
            eventHandler: () => {
                clearFields();
                props.onHide();
            },
            secondary: true
        }
    ];

    if (canPay) {
        buttons = [{
            title: "Berdim",
            eventHandler: () => {
                if ((amount_usd && !amount_uzs && !rate) || (amount_usd && amount_uzs && rate) || (!amount_usd && amount_uzs && rate)) {
                    dispatch(giverGiveMoney(props.user_id, props.id, amount_usd, amount_uzs, rate));
                    clearFields();
                    props.onHide();
                }
            },
            disabled: !((amount_usd && !amount_uzs && !rate) || (amount_usd && amount_uzs && rate) || (!amount_usd && amount_uzs && rate))
        }, ...buttons];
    }

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="give-money-modal text-center">
                <h1><strong>-${formatAmount(usedAmount ? (usedAmount / props.buy_rate) : 0, true, true)}</strong></h1>
                {canPay ? (
                    <>
                        <h3>Miqdorni kiriting:</h3>
                        <div className="input-field">
                            <span>$</span>
                            <input className="amount-input" type="number" defaultValue={amount_usd}
                                   onChange={({ target }) => setAmountUSD(target.value)} />
                        </div>
                        <div className="input-field">
                            <span>So'm</span>
                            <input className="amount-input" type="number" defaultValue={amount_uzs}
                                   onChange={({ target }) => setAmountUZS(target.value)} />
                        </div>
                        <div className="input-field">
                            <span>Kurs</span>
                            <input className="amount-input" type="number" defaultValue={rate}
                                   onChange={({ target }) => setRate(target.value)} />
                        </div>
                    </>
                ) : (
                    <>
                        <h6>Sizning balansingizdagi pul: ${formatAmount(user?.balance)}</h6>
                        <h3 className="red">Sizda mablag' yetarli emas</h3>
                    </>
                )}
            </div>
        </ModalLayout>
    );
};

export default memo(GiveMoneyModal);
