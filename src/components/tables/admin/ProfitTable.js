import React, { memo, useState } from "react"
import { useSelector } from "react-redux"
import { formatAmount } from "../../../helpers"

import QueryProofModal from "../../modals/admin/QueryProofModal"

import TableLayout from "../TableLayout"

const ProfitTable = () => {
    const [queryInfoModal, showQueryProofModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()
    const { profits } = useSelector(state => state.app)

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
        "Jami"
    ]

    return (
        <TableLayout headers={headers}>
            <QueryProofModal show={queryInfoModal} onHide={() => showQueryProofModal(false)} {...modalInfo} />
            {profits && profits.map(({id, process, amount, total}) => (
                <tr key={id}>
                    <td></td>
                    <td>{"￦" + formatAmount(process.amount)}</td>
                    <td>{"Uzb>>Kor"}</td>
                    <td onClick={openInfoModal(process)}>Ko'rish</td>
                    <td className="green text-bold">{"+$" + formatAmount(amount)}</td>
                    <td>{"$" + formatAmount(total)}</td>
                </tr>
            ))}
        </TableLayout>
    )
}

export default memo(ProfitTable)