import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatAmount } from "../../helpers";

const Header = ({ toAmount = false, balance = false, fromAmount = false }) => {
    const { avatar, role } = useSelector(state => state.app.user.user);
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="logo">
                <img src="/assets/img/icons/logo.png" alt="logo" />
            </div>
            <div className="home-profile">
                {toAmount && (
                    <>
                        <span className={"balance-item" + (toAmount > 0 ? " green" : " red")}>{toAmount}</span>
                        <div className="line">|</div>
                    </>
                )}
                {balance && (
                    <>
                        <span className={"balance-item" + (balance > 0 ? " green" : " red")}>{(balance ? '$' : '') + formatAmount(balance, true, true)}</span>
                        {/* <div className="line">|</div> */}
                    </>
                )}
                {fromAmount && (
                    <span className={"balance-item" + (fromAmount > 0 ? " green" : " red")}>{fromAmount}</span>
                )}
                <img className="avatar" src={avatar ?? "/assets/img/icons/profile.png"} alt="Avatar" onClick={() => role === 'client' ? navigate('/profile') : ""}/>
            </div>
        </div>
    );
};

export default memo(Header);