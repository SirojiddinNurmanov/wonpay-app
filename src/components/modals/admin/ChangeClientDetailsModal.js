import React, { memo, useState } from "react";

import ModalLayout from "../ModalLayout";
import { useDispatch } from "react-redux";
import { changeClientDetails } from "../../../store/actions";

const ChangeClientDetailsModal = (props) => {
    const [newName, setNewName] = useState(props.user?.first_name);
    const [balance, setBalance] = useState(props.user?.balance ?? 0);
    const [partnershipRate, setPartnershipRate] = useState(props.user?.partnership_rate ?? 0);
    const dispatch = useDispatch();

    const buttons = [
        {
            title: "O'zgartirish",
            eventHandler: () => {
                if (newName) {
                    dispatch(changeClientDetails(props.user?.id, {
                        new_name: newName,
                        balance: balance ?? 0,
                        partnership_rate: partnershipRate ?? 0
                    }));
                }
                props.onHide();
            }
        },
        {
            title: "Bekor Qilish",
            eventHandler: props.onHide,
            secondary: true
        }
    ];

    const changeName = (e) => setNewName(e.target.value);
    const changeBalance = (e) => setBalance(e.target.value);
    const changePartnerShipRate = (e) => setPartnershipRate(e.target.value);

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="text-center">
                <h1>{(props.user?.first_name ?? "") + " " + (props.user?.last_name ?? "")}</h1>
                <div className="form-group">
                    <label className="legend float-start mt-3 ms-3">Ism:</label>
                    <input type="text" className="name-input text-center" value={newName}
                           onChange={changeName} />
                </div>
                <div className="form-group">
                    <label className="legend float-start mt-3 ms-3">Balans $:</label>
                    <input type="number" placeholder={"0"} className="name-input text-center" value={balance}
                           onChange={changeBalance} />
                </div>
                <div className="form-group">
                    <label className="legend float-start mt-3 ms-3">Sheriklik foizi %:</label>
                    <input type="number" placeholder={"%"} className="name-input text-center"
                           value={partnershipRate}
                           onChange={changePartnerShipRate} />
                </div>
            </div>
        </ModalLayout>
    );
};

export default memo(ChangeClientDetailsModal);