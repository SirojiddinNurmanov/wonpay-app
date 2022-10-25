import React, { memo, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import { formatAmount } from "../../helpers"
import { BACKEND_URL } from "../../constants"

import EmptyBox from "../common/EmptyBox"

const AssignedQueryCard = ({ i, status, client: { first_name }, amount, proof_image = false, card_info_type, card_info_image, card_info_sms }) => {
    const [done, setDone] = useState(status === 1)
    const [cardInfo, showCardInfo] = useState(false)
    const [ proofImage, setProofImage ] = useState(proof_image)


    const toggleCardBlock = () => {
        showCardInfo(!cardInfo)
    }

    const uploadImageToServer = ({ target }) => {
        const body = new FormData()
        body.append("image", target.files[0])
        fetch(`${BACKEND_URL}/save-photo`, {
            method: "POST",
            body: body
        }).then(res => res.json())
            .then(({ success, data }) => {
                if (success) {
                    setProofImage(data)
                    setDone(true)
                }
            }).catch(err => console.log(err))
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