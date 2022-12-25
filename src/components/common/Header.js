import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({ toAmount = false, balance = false, fromAmount = false }) => {
    const { avatar, role } = useSelector(state => state.app.user.user);
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className="logo">
                <img src="/assets/img/icons/logo.png" alt="logo" />
            </div>
            <div className="home-profile">
                {toAmount && (
                    <>
                        <span className="balance-item">{toAmount}</span>
                        <div className="line">|</div>
                    </>
                )}
                {balance && (
                    <>
                        <span className="balance-item">{balance}</span>
                        {/* <div className="line">|</div> */}
                    </>
                )}
                {fromAmount && (
                    <span className="balance-item">{fromAmount}</span>
                )}
                <img className="avatar" src={avatar ?? "/assets/img/icons/profile.png"} alt="Avatar" onClick={() => role === 'client' ? navigate('/profile') : ""}/>
            </div>
        </div>
    );
};

export default memo(Header);