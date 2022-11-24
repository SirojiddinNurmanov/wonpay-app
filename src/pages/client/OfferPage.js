import React, { memo, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faDeleteLeft } from "@fortawesome/free-solid-svg-icons"

import { common } from "../../constants/bottomButtons"
import { formatAmount, trimAmount } from "../../helpers"
import { BACKEND_URL } from "../../constants"

import Layout from "../../layout"

import ConfirmationModal from "../../components/modals/client/ConfirmationModal"

const OfferPage = () => {
    const { token } = useSelector(state => state.app.user)
    const [confirmationModal, showConfirmationModal] = useState(false)
    const [amount, setAmount] = useState(0)
    const [keyboard, setKeyboardStatus] = useState(true)
    const [enabled, setEnabled] = useState(false)
    const [moneyTypeOptions, showMoneyTypeOptions] = useState(false)
    const [moneyType, setMoneyType] = useState("Karta")
    const [koreanAddressName, setKoreanAddressName] = useState("")
    const [koreanAddressNumber, setKoreanAddressNumber] = useState("")
    const [uzbekAddressName, setUzbekAddressName] = useState("")
    const [uzbekAddressNumber, setUzbekAddressNumber] = useState("")

    useEffect(() => {
        toggleConfirmButton()
    }, [moneyType, uzbekAddressName, uzbekAddressNumber, amount])

    common.middleButtons = [
        {
            text: "Tasdiqlash",
            disabled: !enabled,
            eventHandler: () => sendProcessToServer()
        }
    ]

    const sendProcessToServer = () => {
        setEnabled(false)
        const data = {
            process_type: "1",
            amount: trimAmount(amount),
            payment_type: (moneyType === "Naqd" ? "0" : "1"),
            // receiver_name: uzbekAddressName,
            // receiver_number: uzbekAddressNumber
        }

        fetch(`${BACKEND_URL}/processes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    showConfirmationModal(true)
                }
            }).catch(err => console.log(err))
    }

    const toggleConfirmButton = () => {
        if (amount !== 0) {
            if (trimAmount(amount) >= 300000) {
                setEnabled(true)
                // if (moneyType === "Karta") {
                //     if ((uzbekAddressName !== "") && (uzbekAddressNumber !== "")) {
                //         setEnabled(true)
                //     } else {
                //         setEnabled(false)
                //     }
                // }

                // if (moneyType === "Naqd") {
                //     if ((uzbekAddressName !== "") && (uzbekAddressNumber !== "")) {
                //         setEnabled(true)
                //     } else {
                //         setEnabled(false)
                //     }
                // }
            } else {
                setEnabled(false)
            }
        } else {
            setEnabled(false)
        }
    }

    const changeKoreanAddressNameState = ({ target: { value } }) => {
        setKoreanAddressName(value)
    }

    const changeKoreanAddressNumberState = ({ target: { value } }) => {
        setKoreanAddressNumber(value)
    }

    const changeUzbekAddressNameState = ({ target: { value } }) => {
        setUzbekAddressName(value)
        toggleConfirmButton()
    }

    const changeUzbekAddressNumberState = ({ target: { value } }) => {
        setUzbekAddressNumber(value)
        toggleConfirmButton()
    }

    const moneyTypeSelected = ({ target: { value } }) => {
        setMoneyType(value)
        toggleConfirmButton()
    }

    const showKeyboard = () => {
        setKeyboardStatus(true)
    }

    const hideKeyboard = () => {
        setKeyboardStatus(false)
        // if (amount !== 0) {
        //     showMoneyTypeOptions(true)
        // } else {
        //     showMoneyTypeOptions(false)
        // }
    }

    const changeInput = ({ target : { innerText } }) => {
        if (amount === 0) {
            if (innerText !== "0") {
                setAmount(innerText)
            }
        } else {
            if (amount.length < 11) {
                setAmount(formatAmount(amount + innerText))
            }
        }
    }

    const backspace = (e) => {
        if (amount.length > 1) {
            setAmount(formatAmount(amount.substring(0, amount.length - 1)))
        } else {
            setAmount(0)
            showMoneyTypeOptions(false)
            setEnabled(false)
            setMoneyType(false)
        }
    }

    return (
        <Layout buttons={common} title={{ text: "Korea >> O'zbekiston" }}>
            <ConfirmationModal show={confirmationModal} onHide={() => showConfirmationModal(false)} />
            <div className="address-title">Mavjud Summani Kiriting:</div>

            <div className="amount-input" onClick={showKeyboard}>
                <span>￦ </span>
                <span className="amount" id="amount">{amount}</span>
            </div>
            {keyboard && (
                <div className="numbers">
                    <div onClick={changeInput} className="number">1</div>
                    <div onClick={changeInput} className="number">2</div>
                    <div onClick={changeInput} className="number">3</div>
                    <div onClick={changeInput} className="number">4</div>
                    <div onClick={changeInput} className="number">5</div>
                    <div onClick={changeInput} className="number">6</div>
                    <div onClick={changeInput} className="number">7</div>
                    <div onClick={changeInput} className="number">8</div>
                    <div onClick={changeInput} className="number">9</div>
                    <div onClick={backspace} className="number lg"><FontAwesomeIcon icon={faDeleteLeft} /></div>
                    <div onClick={changeInput} className="number">0</div>
                    <div className="number confirm lg" onClick={hideKeyboard}><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
            )}

            {/* {moneyTypeOptions && (
                <div className="money-types-block">
                    <label className="radio-label">
                        <input onChange={moneyTypeSelected} type="radio" name="radio" value="Karta" />
                        <div className="text">Karta</div>
                    </label>
                    <label className="radio-label">
                        <input onChange={moneyTypeSelected} type="radio" name="radio" value="Naqd" />
                        <div className="text">Naqd</div>
                    </label>
                </div>
            )} */}

            {/* {moneyTypeOptions && (moneyType === "Karta") && (
                <div className="address-block">
                    <div className="address-block-item">
                        <div className="address-title">O'zbekistonda pulni oluvchi:</div>
                        <div className="address-details">
                            <div className="address-label">Ism:</div>
                            <input onChange={changeUzbekAddressNameState} type="text" className="address-value" value={uzbekAddressName} />
                            <div className="address-label">Telefon:</div>
                            <input onChange={changeUzbekAddressNumberState} type="number" pattern="\d*" className="address-value" value={uzbekAddressNumber} />
                        </div>
                    </div>
                </div>
            )} */}

            {/* {moneyTypeOptions && (moneyType === "Naqd") && (
                <div className="address-block">
                    <div className="address-block-item">
                        <div className="address-title">Koreada manzilingizni kiriting:</div>
                        <div className="address-details">
                            <div className="address-label">Shahar:</div>
                            <input onChange={changeKoreanAddressNameState} type="text" className="address-value" value={koreanAddressName} />
                            <div className="address-label">Telefon:</div>
                            <input onChange={changeKoreanAddressNumberState} type="number" className="address-value" value={koreanAddressNumber} />
                        </div>
                    </div>
                    <div className="address-block-item">
                        <div className="address-title">O'zbekistonda pulni oluvchi:</div>
                        <div className="address-details">
                            <div className="address-label">Ism:</div>
                            <input onChange={changeUzbekAddressNameState} type="text" className="address-value" value={uzbekAddressName} />
                            <div className="address-label">Telefon:</div>
                            <input onChange={changeUzbekAddressNumberState} type="number" className="address-value" value={uzbekAddressNumber} />
                        </div>
                    </div>
                </div>
            )} */}

            {/* <div className="spacer"></div> */}
        </Layout>
    )
}

export default memo(OfferPage)
