import React, { useState } from "react"
import Table from "react-bootstrap/Table"

const ProfitTable = () => {
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Info</th>
                    <th>Chek</th>
                    <th>Foyda</th>
                    <th>Jami</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    )
}

export default ProfitTable