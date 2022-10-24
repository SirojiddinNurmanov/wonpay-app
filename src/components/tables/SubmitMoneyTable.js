import React, { memo } from "react"
import Table from "react-bootstrap/Table"


const SubmitMoneyTable = () => {
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Umumiy Summa</th>
                    <th>Dollar</th>
                    <th>So'm</th>
                    <th>Kurs</th>
                    <th>Mavjud Pul</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    )
}

export default memo(SubmitMoneyTable)