import React, { memo, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faCheckSquare, faTimesCircle, faTimesSquare } from "@fortawesome/free-solid-svg-icons"

import { getQueries, saveProofImage, unsetProofImage } from "../../store/actions"
import { formatAmount } from "../../helpers"
import { BACKEND_URL } from "../../constants"

import EmptyBox from "../common/EmptyBox"
import LoadingButton from "../common/LoadingButton"

const AssignedQueryCard = ({ i, id, status, client: { first_name }, amount, proof_image = false, card_info_type, card_info_image, card_info_sms }) => {
    const [cardInfo, showCardInfo] = useState(false)
    const [loading, showLoading] = useState(false)
    const [proofImage, setProofImage] = useState(proof_image)
    const dispatch = useDispatch()

    const toggleCardBlock = () => {
        showCardInfo(!cardInfo)
    }

    useEffect(() => {
        dispatch(getQueries())
        // eslint-disable-next-line
    }, [])

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
                dispatch(saveProofImage(id, data))
            }
            showLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProofImage = () => {
        setProofImage(false)
        dispatch(unsetProofImage(id))
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
                {proofImage ? (
                    status === 2 ? (
                        <FontAwesomeIcon icon={faTimesSquare} color="red" />
                    ) : (
                        <FontAwesomeIcon icon={faCheckSquare} />
                    )
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
                            {status !== 1 && (
                                <div className="delete-image-button">
                                    <FontAwesomeIcon icon={faTimesCircle} className="red" onClick={deleteProofImage} />
                                </div>
                            )}
                        </div>
                    )}
                    {!proofImage && (
                        <button className="upload-button" onClick={(e) => e.target.previousSibling.click()}>Chekni yuklash</button>
                    )}
                </div>
            )}
        </div>
    )
}

export default memo(AssignedQueryCard)