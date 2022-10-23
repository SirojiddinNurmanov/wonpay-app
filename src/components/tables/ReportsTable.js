import React, { memo } from "react"
import Table from "react-bootstrap/Table"

const ReportsTable = () => {
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Info</th>
                    <th>Chek</th>
                    <th>Foyda</th>
                    <th>Holati</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    )
}

export default memo(ReportsTable)