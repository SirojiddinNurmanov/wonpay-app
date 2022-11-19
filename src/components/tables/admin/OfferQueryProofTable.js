import React, { memo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { formatAmount, sumProcessAmount } from "../../../helpers"
import { changeQueryStatus } from "../../../store/actions"

import ProofInfoModal from "../../modals/admin/ProofInfoModal"
import TableLayout from "../TableLayout"

const OfferQueryProofTable = ({ amount, buy_rate, status, selectedQueries }) => {
    const [queryInfoModal, showQueryInfoModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()
    const [queryStatus, setQueryStatus] = useState()
    const { queries } = useSelector(state => state.app)
    const dispatch = useDispatch()

    const headers = [
        "Ism",
        "Summa",
        "Info",
        "Isbot",
        "Kurs",
        "Status"
    ]

    const handleInfoModalClick = (process) => (e) => {
        setModalInfo(process)
        showQueryInfoModal(true)
    }

    const selectQueryStatus = ({ id }) => ({ target: { value } }) => {
        setQueryStatus(value)
        dispatch(changeQueryStatus(id, value))
    }

    return (
        <TableLayout headers={headers}>
            <ProofInfoModal show={queryInfoModal} onHide={() => showQueryInfoModal(false)} {...modalInfo} />
            {selectedQueries && (
                <>
                    {selectedQueries.map((selectedQuery) => {
                        const process = queries?.find(query => query.id === selectedQuery.id)

                        return (
                            <tr key={process.id}>
                                <td>
                                    <Link to={"/queries/" + process.id}>
                                        {(process.client.first_name ? process.client.first_name : "Ism yo'q")}
                                        <br />
                                        {(process.client.last_name ? process.client.last_name : " ")}
                                    </Link>
                                </td>
                                <td>{formatAmount(process.amount)}</td>
                                <td onClick={handleInfoModalClick(process)}>Ko'rish</td>
                                {process.proof_image ? (
                                    <td onClick={handleInfoModalClick(process)}>Ko'rish</td>
                                ) : (
                                    <td>Kutilmoqda</td>
                                )}
                                <td className="text-center">{process.exchange_rate ? process.exchange_rate : "---"}</td>
                                <td className="select-block">
                                    {process.proof_image ? (
                                        <select className="underlined text-center" onChange={selectQueryStatus(process)} value={process.status} disabled={(status === 1)}>
                                            <option value="0">Tanlang</option>
                                            <option value="1">Tasdiqlash</option>
                                            <option value="2">Bekor Qilish</option>
                                        </select>
                                    ) : (
                                        "------"
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                    <tr className="text-bold">
                        <td>Jami:</td>
                        <td>{formatAmount(sumProcessAmount(selectedQueries))}</td>
                        <td></td>
                        <td></td>
                        <td>{buy_rate}</td>
                        <td></td>
                    </tr>
                </>
            )}
        </TableLayout>
    )
}

export default memo(OfferQueryProofTable)