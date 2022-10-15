import React, { useState } from "react"
import Table from "react-bootstrap/Table"

import { formatAmount } from "../../helpers"

import QueryInfoModal from "../modals/admin/QueryInfoModal"

const QueryTable = ({ processes }) => {
    const [queryInfoModal, showQueryInfoModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()

    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <QueryInfoModal show={queryInfoModal} onHide={() => showQueryInfoModal(false)} {...modalInfo} />
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Info</th>
                    <th>Kurs</th>
                    <th>Turi</th>
                </tr>
            </thead>
            {processes && (
                <tbody>
                    {processes.map((process) => (
                        <tr key={process.id}>
                            <td>{(process.user.first_name ? process.user.first_name : "") + " " + (process.user.last_name ? process.user.last_name : "")}</td>
                            <td>{formatAmount(process.amount)}</td>
                            <td onClick={() => { showQueryInfoModal(true); setModalInfo(process) }}>Ko'rish</td>
                            <td>{process.exchange_rate ? process.exchange_rate : "Kiritish"}</td>
                            <td>{process.payment_type === 1 ? "Karta" : "Naqd"}</td>
                        </tr>
                    ))}
                </tbody>
            )}
        </Table>
    )
}

export default QueryTable