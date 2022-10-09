import React, { useState } from "react"

import { common } from "../../constants/bottomButtons"
import { formatAmount } from "../../helpers"

import Layout from "../../layout"

import ConfirmationModal from "../../components/modals/client/ConfirmationModal"

const OfferPage = () => {
    const [confirmationModal, showConfirmationModal] = useState(false)
    const [amount, setAmount] = useState(0)
    const [keyboard, setKeyboardStatus] = useState(false)

    common.middleButtons = [
        {
            text: "Tasdiqlash",
            callback: () => showConfirmationModal(true)
        }
    ]

    const showKeyboard = () => {
        setKeyboardStatus(true)
    }

    const hideKeyboard = () => {
        setKeyboardStatus(false)
    }

    const changeInput = (el) => {
        if (amount === 0) {
            if (el.target.innerText !== "0") {
                setAmount(el.target.innerText)
            }
        } else {
            setAmount(formatAmount(amount + el.target.innerText))
        }
    }

    const clearInput = () => {
        setAmount(0)
    }

    const backspace = (e) => {
        if (amount.length > 1) {
            setAmount(formatAmount(amount.substring(0, amount.length - 1)))
        } else {
            setAmount(0)
        }
    }

    return (
        <Layout buttons={common} title={{ text: "Korea >> O'zbekiston" }}>
            <ConfirmationModal show={confirmationModal} onHide={() => showConfirmationModal(false)} />
            <h5><strong>Mavjud Summani Kiriting:</strong></h5>

            <div className="amount-input" onClick={showKeyboard}>
                <span>￦ </span>
                <span className="amount" id="amount">{amount}</span>
            </div>
            {keyboard && (
                <div className="numbers">
                    <div onClick={changeInput} className="number">1</div>
                    <div onClick={changeInput} className="number">2</div>
                    <div onClick={changeInput} className="number">3</div>
                    <div onClick={backspace} className="number sm"><div>Qaytarish</div><span>←</span></div>
                    <div onClick={changeInput} className="number">5</div>
                    <div onClick={changeInput} className="number">6</div>
                    <div onClick={changeInput} className="number">7</div>
                    <div onClick={clearInput} className="number sm danger">Tozalash</div>
                    <div onClick={changeInput} className="number">8</div>
                    <div onClick={changeInput} className="number">9</div>
                    <div onClick={changeInput} className="number">0</div>
                    <div className="number confirm" onClick={hideKeyboard}>→</div>
                </div>
            )}
            <div className="money-types-block">

            </div>
            {/* <div className="put-money">
                <div className="black-line"></div>
                <div className="put-money-input">
                    <label htmlFor="put_money">Mavjud Summani Kiriting:</label>
                    <div className="input-group text-center">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input
                            type="number"
                            id="put_money"
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                        />
                    </div>
                    <span className="korean-won">
                        <img src="/assets/img/icons/won.png" alt="won" />
                    </span>
                </div>
                <div
                    className={
                        inputValue.length > 0 ? "put-money-radio active" : "put-money-radio"
                    }
                >
                    <div className="radio-group">
                        <input
                            onChange={() => setSelectedType("cash")}
                            type="radio"
                            id="radio-1"
                            name="type"
                        />
                        <label htmlFor="radio-1">Naqd</label>
                    </div>
                    <div className="radio-group">
                        <input
                            onChange={() => setSelectedType("card")}
                            type="radio"
                            id="radio-1"
                            name="type"
                        />
                        <label htmlFor="radio-1">Karta</label>
                    </div>
                </div>
                <div
                    className={
                        slectedType === "cash"
                            ? "put-money-details active"
                            : "put-money-details"
                    }
                >
                    <div className="state-details">
                        <h6>Koreyadagi manzilingizni kiriting:</h6>
                        <div className="detail-group">
                            <label className="col-3" htmlFor="address-1">
                                Shahar:
                            </label>
                            <input className="col-6" type="text" />
                        </div>
                        <div className="detail-group">
                            <label className="col-3" htmlFor="address-1">
                                Telefon:
                            </label>
                            <input className="col-6" type="number" />
                        </div>
                    </div>
                    <div className="state-details">
                        <h6>O'zbekistonda pulni oluvchi:</h6>
                        <div className="detail-group">
                            <label className="col-3" htmlFor="address-1">
                                Ism:
                            </label>
                            <input className="col-6" type="text" />
                        </div>
                        <div className="detail-group">
                            <label className="col-3" htmlFor="address-1">
                                Telefon:
                            </label>
                            <input className="col-6" type="number" />
                        </div>
                    </div>
                </div>
                <div
                    className={
                        slectedType === "card" ? "card-group active" : "card-group"
                    }
                >
                    <div className="state-details">
                        <h6>O'zbekistonda pulni oluvchi:</h6>
                        <div className="detail-group">
                            <label className="col-3" htmlFor="address-1">
                                Ism:
                            </label>
                            <input className="col-6" type="text" />
                        </div>
                        <div className="detail-group">
                            <label className="col-3" htmlFor="address-1">
                                Telefon:
                            </label>
                            <input className="col-6" type="number" />
                        </div>
                    </div>
                </div>
            </div> */}
        </Layout>
    )
}

export default OfferPage
