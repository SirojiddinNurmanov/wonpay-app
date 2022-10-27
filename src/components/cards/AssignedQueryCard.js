import React, { memo, useState } from "react"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import { saveProofImage } from "../../store/actions"
import { formatAmount } from "../../helpers"
import { BACKEND_URL } from "../../constants"

import EmptyBox from "../common/EmptyBox"
import LoadingButton from "../common/LoadingButton"

const AssignedQueryCard = ({ i, transactionId, status, client: { first_name }, amount, proof_image = false, card_info_type, card_info_image, card_info_sms }) => {
    const [done, setDone] = useState(status === 1)
    const [cardInfo, showCardInfo] = useState(false)
    const [loading, showLoading] = useState(false)
    const [proofImage, setProofImage] = useState(proof_image)
    const dispatch = useDispatch()

    const toggleCardBlock = () => {
        showCardInfo(!cardInfo)
    }

    const uploadImageToServer = async ({ target }) => {
        showLoading(true)
        const body = new FormData()
        body.append("image", target.files[0])

        try {
            let res = await fetch(`${BACKEND_URL}/save-photo`, {
                method: "POST",
                body: body
            })

            const { success, data } = await res.json()
            if (success) {
                setProofImage(data)
                setDone(true)
                dispatch(saveProofImage(transactionId, data))
            }
            showLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="block-item">
            <div className="block-left">
                <div className="query-owner">
                    {i + 1 + ". " + first_name}
                </div>
            </div>
            <div className="block-right">
                <div className="query-amount">
                    {"￦" + formatAmount(amount)}
                </div>
                {done ? (
                    <FontAwesomeIcon icon={faCheckSquare} />
                ) : (
                    <EmptyBox />
                )}
                <FontAwesomeIcon icon={faAngleDown} onClick={toggleCardBlock} />
            </div>
            {cardInfo && (
                <div className="query-card-info-block text-center">
                    <div className="card-info-item">
                        {card_info_type === 0 ? (
                            <pre>
                                {card_info_sms}
                            </pre>
                        ) : (
                            <img src={card_info_image} alt="Card Info" />
                        )}
                    </div>
                    <input type="file" accept="image/jpeg, image/png" onChange={uploadImageToServer} className="hide" />
                    {loading && (
                        <LoadingButton />
                    )}
                    {proofImage && (
                        <div className="payment-proof-image-block">
                            <img src={proofImage} alt="Payment Proof" />
                        </div>
                    )}
                    <button className="upload-button" onClick={(e) => e.target.previousSibling.click()}>Chekni yuklash</button>
                </div>
            )}
        </div>
    )
}

export default memo(AssignedQueryCard)