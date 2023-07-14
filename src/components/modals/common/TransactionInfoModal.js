import React, { memo } from "react";
import ModalLayout from "../ModalLayout";
import { formatAmount } from "../../../helpers";
import { useSelector } from "react-redux";

const TransactionInfoModal = (props) => {
    const { allUsers } = useSelector(state => state.app);
    const receiver = allUsers?.filter(user => parseInt(user.id) === parseInt(props.to_id))[0]

    const buttons = [
        {
            title: "Yopish",
            eventHandler: props.onHide
        }
    ];

    return (
        <ModalLayout buttons={buttons} {...props}>
            {props.amount_usd > 0 && (
                <div className="mb-1 fs-4">
                    <strong>Dollar:</strong> {formatAmount(props.amount_usd ?? 0)}$
                </div>
            )}
            {props.amount_uzs > 0 && (
                <div className="mb-1 fs-4">
                    <strong>So'm:</strong> {formatAmount(props.amount_uzs ?? 0)} so'm
                </div>
            )}
            {props.rate > 0 && (
                <div className="mb-1 fs-4">
                    <strong>Kurs:</strong> {formatAmount(props.rate ?? 0)} so'm
                </div>
            )}
            {receiver && (
                <div className="mb-1 fs-4">
                    <strong>Qabul qiluvchi:</strong> {(receiver?.first_name ?? '') + ' ' + (receiver?.last_name ?? '')}
                </div>
            )}
            {props.giver && (
                <div className="mb-1 fs-4">
                    <strong>Beruvchi:</strong> {(props.giver?.first_name ?? '') + ' ' + (props.giver?.last_name ?? '')}
                </div>
            )}
            {props.taker && (
                <div className="mb-1 fs-4">
                    <strong>Qabul qiluvchi:</strong> {(props.taker?.first_name ?? '') + ' ' + (props.taker?.last_name ?? '')}
                </div>
            )}
            {props.comment && (
                <div className="mb-2">
                    <strong className="mb-1 fs-4">Izoh:</strong> {props.comment}
                </div>
            )}
            {props.image && (
                <div>
                    <img src={props.image} alt="Comment" style={{ width: "100%" }} />
                </div>
            )}
        </ModalLayout>
    );
};

export default memo(TransactionInfoModal);
