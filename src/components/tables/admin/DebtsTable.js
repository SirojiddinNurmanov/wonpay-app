import React, { memo, useState } from "react"

import QueryDebtModal from "../../modals/admin/QueryDebtModal"
import TableLayout from "../TableLayout"

const DebtsTable = () => {
    const [queryDebtModal, showQueryDebtModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()

    const headers = [
        "Ism",
        "Summa",
        "Info",
        "Kurs",
        "Qarz"
    ]

    return (
        <TableLayout headers={headers}>
            <QueryDebtModal show={queryDebtModal} onHide={() => showQueryDebtModal(false)} {...modalInfo} />
        </TableLayout >
    )
}

export default memo(DebtsTable)