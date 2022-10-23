import React, { memo } from "react"
import Table from "react-bootstrap/Table"

const MoneyFlowTable = () => {
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Foyda</th>
                    <th>Jami Foyda</th>
                    <th>Harajat</th>
                    <th>Mavjud Mablag'</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    )
}

export default memo(MoneyFlowTable)