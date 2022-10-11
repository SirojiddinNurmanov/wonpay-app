import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux"

import { common } from "../../constants/bottomButtons"
import { formatAmount } from "../../helpers"

import Layout from "../../layout"

import ConfirmationModal from "../../components/modals/client/ConfirmationModal"
import LoadingButton from "../../components/common/LoadingButton"

const QueryPage = () => {
    const [confirmationModal, showConfirmationModal] = useState(false)
    const [amount, setAmount] = useState(0)
    const [keyboard, setKeyboardStatus] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const [moneyTypeOptions, showMoneyTypeOptions] = useState(false)
    const [moneyType, setMoneyType] = useState()
    const [koreanAddressName, setKoreanAddressName] = useState("")
    const [koreanAddressNumber, setKoreanAddressNumber] = useState("")
    const [uzbekAddressName, setUzbekAddressName] = useState("")
    const [uzbekAddressNumber, setUzbekAddressNumber] = useState("")
    const [accountInfoSMS, setAccountInfoSMS] = useState(false)
    const [accountInfoImage, setAccountInfoImage] = useState(false)
    const [loading, showLoading] = useState(false)
    const [clipboard, showClipboard] = useState(true)
    const [pastedClipboard, setPastedClipboard] = useState(false)


    useEffect(() => {
        toggleConfirmButton()
    }, [moneyType, accountInfoSMS, accountInfoImage, uzbekAddressName, uzbekAddressNumber])

    common.middleButtons = [
        {
            text: "Tasdiqlash",
            disabled: !enabled,
            callback: () => showConfirmationModal(true)
        }
    ]

    const removePastedInfo = () => {
        setPastedClipboard(false)
        showClipboard(true)
    }

    const toggleConfirmButton = () => {
        if (amount !== 0) {
            if (moneyType === "Karta") {
                if ((accountInfoSMS || accountInfoImage) && (uzbekAddressName !== "") && (uzbekAddressNumber !== "")) {
                    setEnabled(true)
                } else {
                    setEnabled(false)
                }
            }

            if (moneyType === "Naqd") {
                if ((uzbekAddressName !== "") && (uzbekAddressNumber !== "")) {
                    setEnabled(true)
                } else {
                    setEnabled(false)
                }
            }
        } else {
            setEnabled(false)
        }
    }

    const uploadImageToServer = ({ target }) => {
        showLoading(true)
        const body = new FormData()
        body.append("image", target.files[0])
        fetch("https://wonpay.thesmart.uz/api/save-photo", {
            method: "POST",
            body: body
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    setAccountInfoImage(data.data)
                    toggleConfirmButton()
                }
                showLoading(false)
            }).catch(err => console.log(err))
    }

    const openFileUploader = ({ target }) => {
        target.nextSibling.click()
    }

    const pasteFromClipboard = async () => {
        let text = await navigator.clipboard.readText()
        if (text.length > 200) {
            text = text.substring(0, 200)
        }
        setPastedClipboard(text)
        setAccountInfoSMS(text)
        toggleConfirmButton()
        showClipboard(false)
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
        if (amount !== 0) {
            showMoneyTypeOptions(true)
        } else {
            showMoneyTypeOptions(false)
        }
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
        showMoneyTypeOptions(false)
        setEnabled(false)
        setMoneyType(false)
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
        <Layout buttons={common} title={{ text: "O'zbekiston >> Korea" }}>
            <ConfirmationModal show={confirmationModal} onHide={() => showConfirmationModal(false)} />
            <div className="address-title">Kerakli Summani Kiriting:</div>

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

            {moneyTypeOptions && (
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
            )}

            {moneyTypeOptions && (moneyType === "Karta") && (
                <div className="address-block">
                    <div className="address-block-item">
                        <div className="address-title">Bank Ma'lumotlarini Kiriting:</div>
                        <div className="account-sms">
                            <div className="account-title">SMS:</div>
                            <div className="account-sms-field">
                                {clipboard && (
                                    <div className="account-paste-clipboard" onClick={pasteFromClipboard}>
                                        <img src="/assets/img/icons/clipboard.png" alt="Paste clipboard" />
                                        Joylashtirish
                                    </div>
                                )}
                                {pastedClipboard && (
                                    <div>
                                        <div className="clear-clipboard" onClick={removePastedInfo}>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </div>
                                        <pre className="pasted-clipboard">{pastedClipboard}</pre>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="or-text">yoki</div>
                        <div className="account-image">
                            <div className="account-title">Rasm:</div>
                            <div className="account-image-block">
                                <button className="upload-account-button" onClick={openFileUploader}>{loading ? (<LoadingButton />) : "Rasm yuklash"}</button>
                                <input className="upload-input" type="file" onChange={uploadImageToServer} accept=".png,.jpg,.jpeg" />
                                {accountInfoImage && (
                                    <div className="preview">
                                        <img src={accountInfoImage} alt="Account Info" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="address-title">O'zbekistonda pulni yetkazuvchi:</div>
                        <div className="address-details">
                            <div className="address-label">Ism:</div>
                            <input onChange={changeUzbekAddressNameState} type="text" className="address-value" value={uzbekAddressName} />
                            <div className="address-label">Telefon:</div>
                            <input onChange={changeUzbekAddressNumberState} type="number" className="address-value" value={uzbekAddressNumber} />
                        </div>
                    </div>
                </div>
            )}

            {moneyTypeOptions && (moneyType === "Naqd") && (
                <div className="address-block">
                    <div className="address-block-item">
                        <div className="address-title">Koreada pulni oluvchi:</div>
                        <div className="address-details">
                            <div className="address-label">Ism:</div>
                            <input onChange={changeKoreanAddressNameState} type="text" className="address-value" value={koreanAddressName} />
                            <div className="address-label">Telefon:</div>
                            <input onChange={changeKoreanAddressNumberState} type="number" className="address-value" value={koreanAddressNumber} />
                        </div>
                    </div>
                    <div className="address-block-item">
                        <div className="address-title">O'zbekistonda pulni yetkazuvchi:</div>
                        <div className="address-details">
                            <div className="address-label">Ism:</div>
                            <input onChange={changeUzbekAddressNameState} type="text" className="address-value" value={uzbekAddressName} />
                            <div className="address-label">Telefon:</div>
                            <input onChange={changeUzbekAddressNumberState} type="number" className="address-value" value={uzbekAddressNumber} />
                        </div>
                    </div>
                </div>
            )}

            <div className="spacer"></div>
        </Layout>
    )
}

export default QueryPage
