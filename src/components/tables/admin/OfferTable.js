import React, { memo, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { formatAmount } from "../../../helpers"

import OfferRateModal from "../../modals/admin/OfferRateModal"
import TableLayout from "../TableLayout"

const OfferTable = () => {
    const [offerRateModal, showOfferRateModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()
    const { offers } = useSelector(state => state.app)

    const openRateModal = (process) => () => {
        if (process.assigned_queries.length === 0) {
            showOfferRateModal(true)
            setModalInfo(process)
        }
    }

    const headers = [
        "Ism",
        "Summa",
        "Turi",
        "Sotish",
        "Olish",
        "Taqsim"
    ]

    return (
        <TableLayout headers={headers}>
            <OfferRateModal show={offerRateModal} onHide={() => showOfferRateModal(false)} {...modalInfo} />
            {offers && (
                <>
                    {offers.map((process) => (
                        <tr key={process.id}>
                            <td>
                                <Link to={"/offers/" + process.id}>
                                    {(process.client.first_name ? process.client.first_name : "") + " " + (process.client.last_name ? process.client.last_name : "")}
                                </Link>
                            </td>
                            <td>{formatAmount(process.amount)}</td>
                            <td >{process.payment_type === 1 ? "Karta" : "Naqd"}</td>
                            <td onClick={openRateModal(process)}>{process.buy_rate > 0 ? process.buy_rate : "Kiritish"}</td>
                            <td onClick={openRateModal(process)}>{process.sell_rate > 0 ? process.sell_rate : "Kiritish"}</td>
                            <td>
                                <Link to={"/offers/" + process.id}>
                                    Taqsimlash
                                </Link>
                            </td>
                        </tr>
                    ))}
                </>
            )}
        </TableLayout>
    )
}

export default memo(OfferTable)