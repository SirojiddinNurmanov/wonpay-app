import React, { memo, useState } from "react"
import Table from "react-bootstrap/Table"


const BalanceSheetTable = () => {
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <thead>
                <tr>
                    <th>Sana</th>
                    <th>Olingan Pul</th>
                    <th>Kurs</th>
                    <th>Qarz $</th>
                    <th>Berilgan Pul</th>
                    <th>Qoldiq</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    )
}

export default memo(BalanceSheetTable)