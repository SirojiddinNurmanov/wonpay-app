import React, { memo, useState } from "react"
import { useSelector } from "react-redux"

import { formatAmount } from '../../../helpers'
import QueryProofModal from "../../modals/admin/QueryProofModal"

import TableLayout from "../TableLayout"

const ReportsTable = () => {
    const [queryInfoModal, showQueryProofModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()
    const { queries } = useSelector(state => state.app)

    const openInfoModal = (process) => (e) => {
        if (process.status === 1) {
            showQueryProofModal(true)
            setModalInfo(process)
        }
    }

    const headers = [
        "Ism",
        "Summa",
        "Info",
        "Chek",
        "Foyda",
        "Holati"
    ]

    return (
        <TableLayout headers={headers}>
            <QueryProofModal show={queryInfoModal} onHide={() => showQueryProofModal(false)} {...modalInfo} />
            {queries && queries.map(query => (
                <tr key={query.id}>
                    <td>{query.client.first_name}</td>
                    <td>{"￦" + formatAmount(query.amount)}</td>
                    <td>{query.process_type === 1 ? "Kor>>Uzb" : "Uzb>>Kor"}</td>
                    <td onClick={openInfoModal(query)} className={"underlined" + (query.status !== 1 ? " red" : "")}>{query.status === 1 ? "Ko'rish" : "Kutilmoqda"}</td>
                    <td>
                        {
                            query.assigned_offer ? "+$" + (query.amount / query.assigned_offer.buy_rate - query.amount / query.exchange_rate).toLocaleString() : ""
                        }
                    </td>
                    <td>
                        {
                            query.status === 1 ? "Tasdiqlandi" : "----"
                        }
                    </td>
                </tr>
            ))}
        </TableLayout>
    )
}

export default memo(ReportsTable)