import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clientGiveMoney, getAllUsers } from "../../../store/actions";

import ModalLayout from "../ModalLayout";
import LoadingButton from "../../common/LoadingButton";
import { BACKEND_URL } from "../../../constants";

const GiveMoneyModal = (props) => {
    const [amount_usd, setAmountUSD] = useState();
    const [amount_uzs, setAmountUZS] = useState();
    const [rate, setRate] = useState();
    const [accountInfoSMS, setAccountInfoSMS] = useState("");
    const [accountInfoImage, setAccountInfoImage] = useState("");
    const [loading, showLoading] = useState(false);
    const { allUsers } = useSelector(state => state.app);
    const [receiverId, setReceiverId] = useState(allUsers?.length === 1 ? parseInt(allUsers[0].id) : 0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
        //eslint-disable-next-line
    }, []);

    const clearFields = () => {
        setAmountUSD("");
        setAmountUZS("");
        setReceiverId(0);
        setAccountInfoSMS("");
        setAccountInfoImage(false);
    };

    const handleAccountInfoSMS = ({ target: { value } }) => {
        setAccountInfoSMS(value);
    };

    const uploadImageToServer = ({ target }) => {
        showLoading(true);
        const body = new FormData();
        body.append("image", target.files[0]);
        fetch(`${BACKEND_URL}/save-photo`, {
            method: "POST",
            body: body
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data);
                    setAccountInfoImage(data.data);
                }
                showLoading(false);
            }).catch(err => console.log(err));
    };

    const openFileUploader = ({ target }) => {
        target.nextSibling.click();
    };

    const buttons = [
        {
            title: "Tasdiqlash",
            eventHandler: () => {
                if (
                    (
                        (amount_usd && !amount_uzs && !rate)
                        || (amount_usd && amount_uzs && rate)
                        || (!amount_usd && amount_uzs && rate)
                    )
                    && receiverId !== 0
                ) {
                    dispatch(clientGiveMoney(receiverId, amount_usd, amount_uzs, rate, accountInfoSMS, accountInfoImage));
                    clearFields();
                    props.onHide();
                }
            },
            disabled: !(
                (
                    (amount_usd && !amount_uzs && !rate)
                    || (amount_usd && amount_uzs && rate)
                    || (!amount_usd && amount_uzs && rate)
                )
                && receiverId !== 0
            )
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
                <div className="address-block">
                    <div className="address-block-item">
                        <div className="address-title">Izohni kiriting:</div>
                        <div className="account-sms">
                            <div className="account-sms-field">
                                <textarea className="account-paste-clipboard" onChange={handleAccountInfoSMS}
                                          value={accountInfoSMS} cols="30" rows="3" />
                            </div>
                        </div>
                        <div className="or-text">yoki</div>
                        <div className="account-image">
                            <div className="account-image-block">
                                <button className="upload-account-button" onClick={openFileUploader}>{loading ? (
                                    <LoadingButton />) : "Rasm yuklash"}</button>
                                <input className="upload-input" type="file" onChange={uploadImageToServer}
                                       accept=".png,.jpg,.jpeg" />
                                {accountInfoImage && (
                                    <div className="preview">
                                        <img src={accountInfoImage} alt="Account Info" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Pul qabul qiluvchi:</h3>
                <select defaultValue={receiverId} onChange={({ target }) => setReceiverId(parseInt(target.value))}>
                    <option value="0">Tanlang</option>
                    {allUsers && allUsers.filter(user => ["admin", "superadmin", "carrier"].includes(user.role) && user.is_visible).map(carrier => (
                        <option key={carrier.id} value={carrier.id}>{carrier.first_name}</option>
                    ))}
                </select>
            </div>
        </ModalLayout>
    );
};

export default memo(GiveMoneyModal);
