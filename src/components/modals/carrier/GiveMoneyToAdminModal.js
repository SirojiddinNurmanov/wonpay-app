import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { carrierGiveMoney, carrierGiveToAdminMoney } from "../../../store/actions";
import { formatAmount } from "../../../helpers";

import ModalLayout from "../ModalLayout";

const GiveMoneyToAdminModal = (props) => {
    const [amount_usd, setAmountUSD] = useState();
    const [amount_uzs, setAmountUZS] = useState();
    const [rate, setRate] = useState();
    const [totalAmount, setTotalAmount] = useState(0);
    const { user } = useSelector(state => state.app.user);
    const dispatch = useDispatch();

    useEffect(() => {
        calculateMoneyAmount();
    }, [amount_usd, amount_uzs, rate]);

    const clearFields = () => {
        setAmountUSD("");
        setAmountUZS("");
        setRate("");
    };

    const calculateMoneyAmount = () => {
        let amount = 0;
        if (amount_usd) {
            amount += parseInt(amount_usd);
        }

        if (amount_uzs && rate) {
            amount += parseInt(amount_uzs) / parseInt(rate);
        }

        setTotalAmount(amount);
    };

    const changeAmountUSD = ({ target }) => {
        setAmountUSD(target.value);
    };

    const changeAmountUZS = ({ target }) => {
        setAmountUZS(target.value);
    };

    const changeRate = ({ target }) => {
        setRate(target.value);
    };

    let buttons = [
        {
            title: "Berdim",
            eventHandler: () => {
                if (((amount_usd && !amount_uzs && !rate) || (amount_usd && amount_uzs && rate) || (!amount_usd && amount_uzs && rate)) && totalAmount <= props.balance) {
                    dispatch(carrierGiveToAdminMoney(amount_usd, amount_uzs, rate));
                    clearFields();
                    props.onHide();
                }
            },
            disabled: !(((amount_usd && !amount_uzs && !rate) || (amount_usd && amount_uzs && rate) || (!amount_usd && amount_uzs && rate)) && (totalAmount <= props.balance))
        },
        {
            title: "Bekor Qilish",
            eventHandler: () => {
                clearFields();
                props.onHide();
            },
            secondary: true
        }
    ];

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="give-money-modal text-center">
                <h1><strong>${formatAmount(props.balance, true, true)}</strong></h1>
                <span className={`red ${(totalAmount > props.balance ? "d-inline" : "d-none")}`}>Pul miqdori balansdan oshib ketdi</span>
                <h3>Miqdorni kiriting:</h3>
                <div className="input-field">
                    <span>$</span>
                    <input className="amount-input" type="number" defaultValue={amount_usd}
                           onChange={changeAmountUSD} />
                </div>
                <div className="input-field">
                    <span>So'm</span>
                    <input className="amount-input" type="number" defaultValue={amount_uzs}
                           onChange={changeAmountUZS} />
                </div>
                <div className="input-field">
                    <span>Kurs</span>
                    <input className="amount-input" type="number" defaultValue={rate}
                           onChange={changeRate} />
                </div>
                <h3>Jami: ${formatAmount(totalAmount, true, true)}</h3>
            </div>
        </ModalLayout>
    );
};

export default memo(GiveMoneyToAdminModal);
