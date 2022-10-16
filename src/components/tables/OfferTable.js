import React, { useState } from "react"
import { useSelector } from "react-redux"
import Table from "react-bootstrap/Table"

import { formatAmount } from "../../helpers"

import OfferRateModal from "../modals/admin/OfferRateModal"

const OfferTable = () => {
    const [offerRateModal, showOfferRateModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()
    const { offers } = useSelector(state => state.app)
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <OfferRateModal show={offerRateModal} onHide={() => showOfferRateModal(false)} {...modalInfo}/>
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Turi</th>
                    <th>Sotish</th>
                    <th>Olish</th>
                    <th>Taqsim</th>
                </tr>
            </thead>
            {offers && (
                <tbody>
                    {offers.map((process) => (
                        <tr key={process.id}>
                            <td>{(process.user.first_name ? process.user.first_name : "") + " " + (process.user.last_name ? process.user.last_name : "")}</td>
                            <td>{formatAmount(process.amount)}</td>
                            <td >{process.payment_type === 1 ? "Karta" : "Naqd"}</td>
                            <td onClick={() => { showOfferRateModal(true); setModalInfo(process) }}>{process.buy_rate > 0 ? process.buy_rate : "Kiritish"}</td>
                            <td onClick={() => { showOfferRateModal(true); setModalInfo(process) }}>{process.sell_rate > 0 ? process.sell_rate : "Kiritish"}</td>
                            <td>Taqsimlash</td>
                        </tr>
                    ))}
                </tbody>
            )}
        </Table>
    )
}

export default OfferTable