import React, { memo, useState } from "react"
import { Link } from "react-router-dom"
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

    const openInfoModal = (process) => (e) => {
        showQueryInfoModal(true)
        setModalInfo(process)
    }

    const openRateModal = (process) => (e) => {
        if ((process.exchange_rate !== 0) || (process.exchange_rate === 0 && process.temp_rate === 0)) {
            showQueryRateModal(true)
            setModalInfo(process)
        }
    }

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
                    {queries.map((process) => {
                        if (process.assigned_offer) {
                            return ""
                        }

                        return (
                            <tr key={process.id}>
                                <td>
                                    <Link to={"/queries/" + process.id}>
                                        {(process.client.first_name ? process.client.first_name : "No name") + " " + (process.client.last_name ? process.client.last_name : " ")}
                                    </Link>
                                </td>
                                <td>{formatAmount(process.amount)}</td>
                                <td onClick={openInfoModal(process)} className="underlined">Ko'rish</td>
                                <td onClick={openRateModal(process)} className="underlined">{process.rate_status === 3 ? "Rad etilgan" :  process.exchange_rate ? process.exchange_rate : process.temp_rate ? "Kutilmoqda" : "Kiritish"}</td>
                                <td>{process.payment_type === 1 ? "Karta" : "Naqd"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            )}
        </Table>
    )
}

export default memo(QueryTable)