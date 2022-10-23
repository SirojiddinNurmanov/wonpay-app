import React, { memo, useState } from "react"
import Table from "react-bootstrap/Table"

import QueryDebtModal from "../modals/admin/QueryDebtModal"

const DebtsTable = () => {
    const [queryDebtModal, showQueryDebtModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <QueryDebtModal show={queryDebtModal} onHide={() => showQueryDebtModal(false)} {...modalInfo} />
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Info</th>
                    <th>Kurs</th>
                    <th>Qarz</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    )
}

export default memo(DebtsTable)