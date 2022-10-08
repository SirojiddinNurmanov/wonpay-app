import React from "react"
import { Link } from "react-router-dom"

const Header = ({ avatar, toAmount = false, balance = false, fromAmount = false }) => {
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
                        <div className="line">|</div>
                    </>
                )}
                {fromAmount && (
                    <span className="balance-item">{fromAmount}</span>
                )}
                <Link to="/profile">
                    <img className="avatar" src={avatar} alt="Avatar" />
                </Link>
            </div>
        </div>
    )
}

export default Header