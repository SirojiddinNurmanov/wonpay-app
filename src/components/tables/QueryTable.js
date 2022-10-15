import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import { useSelector } from "react-redux"

import { formatAmount } from "../../helpers"

import QueryInfoModal from "../modals/admin/QueryInfoModal"
import QueryRateModal from "../modals/admin/QueryRateModal"

const QueryTable = () => {
    const [queryInfoModal, showQueryInfoModal] = useState(false)
    const [queryRateModal, showQueryRateModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()
    const { queries } = useSelector(state => state.app)

    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <QueryInfoModal show={queryInfoModal} onHide={() => showQueryInfoModal(false)} {...modalInfo} />
            <QueryRateModal show={queryRateModal} onHide={() => showQueryRateModal(false)} {...modalInfo} />
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Info</th>
                    <th>Kurs</th>
                    <th>Turi</th>
                </tr>
            </thead>
            {queries && (
                <tbody>
                    {queries.map((process) => (
                        <tr key={process.id}>
                            <td>{(process.user.first_name ? process.user.first_name : "") + " " + (process.user.last_name ? process.user.last_name : "")}</td>
                            <td>{formatAmount(process.amount)}</td>
                            <td onClick={() => { showQueryInfoModal(true); setModalInfo(process) }}>Ko'rish</td>
                            <td onClick={() => { showQueryRateModal(true); setModalInfo(process) }}>{process.exchange_rate ? process.exchange_rate : "Kiritish"}</td>
                            <td>{process.payment_type === 1 ? "Karta" : "Naqd"}</td>
                        </tr>
                    ))}
                </tbody>
            )}
        </Table>
    )
}

export default QueryTable