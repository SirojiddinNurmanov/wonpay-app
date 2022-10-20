import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Table, Form } from "react-bootstrap"
import { useSelector } from "react-redux"

import { formatAmount, sumProcessAmount } from "../../helpers"

import QueryInfoModal from "../modals/admin/QueryInfoModal"
import QueryRateModal from "../modals/admin/QueryRateModal"
import { useEffect } from "react"
import AlertModal from "../modals/admin/AlertModal"

const OfferQueryTable = ({ amount }) => {
    const [queryInfoModal, showQueryInfoModal] = useState(false)
    const [queryRateModal, showQueryRateModal] = useState(false)
    const [alertModal, showAlertModal] = useState(false)
    const [selectedQueries, setSelectedQueries] = useState(false)
    const [selected, setSelected] = useState([])
    const [modalInfo, setModalInfo] = useState()
    const { queries } = useSelector(state => state.app)

    const openInfoModal = (process) => (e) => {
        showQueryInfoModal(true)
        setModalInfo(process)
    }

    const openRateModal = (process) => (e) => {
        showQueryRateModal(true)
        setModalInfo(process)
    }

    const addToList = (e, id) => {
        if (e.target.checked) {
            let summ = sumProcessAmount([...queries.filter(query => selected.includes(query.id)), queries.find(query => query.id === id)])
            if (summ > amount) {
                showAlertModal(true)
                e.target.checked = false
                return false
            }
            setSelectedQueries([...queries.filter(query => selected.includes(query.id)), queries.find(query => query.id === id)])
            setSelected([...selected, id])
        } else {
            setSelectedQueries(queries.filter(query => selected.filter(selected_id => selected_id !== id).includes(query.id)))
            setSelected(selected.filter(selected_id => selected_id !== id))
        }
    }

    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <QueryInfoModal show={queryInfoModal} onHide={() => showQueryInfoModal(false)} {...modalInfo} />
            <QueryRateModal show={queryRateModal} onHide={() => showQueryRateModal(false)} {...modalInfo} />
            <AlertModal show={alertModal} onHide={() => showAlertModal(false)} />
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Turi</th>
                    <th>Kurs</th>
                    <th>Tanlash</th>
                </tr>
            </thead>
            {queries && (
                <tbody>
                    {queries.map((process) => (
                        <tr key={process.id}>
                            <td>
                                <Link to={"/queries/" + process.id}>
                                    {(process.client.first_name ? process.client.first_name : "No name") + " " + (process.client.last_name ? process.client.last_name : " ")}
                                </Link>
                            </td>
                            <td>{formatAmount(process.amount)}</td>
                            <td>{process.payment_type === 1 ? "Karta" : "Naqd"}</td>
                            <td className={"text-center" + (process.exchange_rate > 0 ? " red" : "")}>{process.exchange_rate ? process.exchange_rate : "---"}</td>
                            <td className="checkbox-block">
                                <Form.Check className="checkbox" onChange={(e) => addToList(e, process.id)}/>
                            </td>
                        </tr>
                    ))}
                    <tr className="text-bold">
                        <td>Jami:</td>
                        <td>{formatAmount(sumProcessAmount(selectedQueries))}</td>
                    </tr>
                </tbody>
            )}
        </Table>
    )
}

export default OfferQueryTable