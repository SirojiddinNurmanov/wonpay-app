import React, { memo, useState } from "react"
import { Link } from "react-router-dom"
import { Form } from "react-bootstrap"
import { useSelector } from "react-redux"

import { formatAmount, sumProcessAmount } from "../../../helpers"

import QueryInfoModal from "../../modals/admin/QueryInfoModal"
import QueryRateModal from "../../modals/admin/QueryRateModal"
import AlertModal from "../../modals/admin/AlertModal"
import TableLayout from "../TableLayout"

const OfferQueryTable = ({ amount, selectQueryIds }) => {
    const [queryInfoModal, showQueryInfoModal] = useState(false)
    const [queryRateModal, showQueryRateModal] = useState(false)
    const [alertModal, showAlertModal] = useState(false)
    const [selectedQueries, setSelectedQueries] = useState(false)
    const [selected, setSelected] = useState([])
    const [modalInfo, setModalInfo] = useState()
    const { queries } = useSelector(state => state.app)

    const addToList = (e, id) => {
        if (e.target.checked) {
            let summ = sumProcessAmount([...queries.filter(query => selected.includes(query.id)), queries.find(query => query.id === id)])
            if (summ > amount) {
                showAlertModal(true)
                e.target.checked = false
                return false
            }
            setSelectedQueries([...queries.filter(query => selected.includes(query.id)), queries.find(query => query.id === id)])
            selectQueryIds([...selected, id])
            setSelected([...selected, id])

        } else {
            setSelectedQueries(queries.filter(query => selected.filter(selected_id => selected_id !== id).includes(query.id)))
            selectQueryIds(selected.filter(selected_id => selected_id !== id))
            setSelected(selected.filter(selected_id => selected_id !== id))
        }
    }

    const headers = [
        "Ism",
        "Summa",
        "Turi",
        "Kurs",
        "Tanlash"
    ]

    return (
        <TableLayout headers={headers}>
            <QueryInfoModal show={queryInfoModal} onHide={() => showQueryInfoModal(false)} {...modalInfo} />
            <QueryRateModal show={queryRateModal} onHide={() => showQueryRateModal(false)} {...modalInfo} />
            <AlertModal show={alertModal} onHide={() => showAlertModal(false)} />
            {queries && (
                <>
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
                                <td>{process.payment_type === 1 ? "Karta" : "Naqd"}</td>
                                <td className={"text-center" + (process.exchange_rate > 0 ? " red" : "")}>{process.exchange_rate ? process.exchange_rate : "---"}</td>
                                <td className="checkbox-block">
                                    <Form.Check className="checkbox" onChange={(e) => addToList(e, process.id)} />
                                </td>
                            </tr>
                        )
                    })}
                    <tr className="text-bold">
                        <td>Jami:</td>
                        <td>{formatAmount(sumProcessAmount(selectedQueries))}</td>
                    </tr>
                </>
            )}
        </TableLayout>
    )
}

export default memo(OfferQueryTable)