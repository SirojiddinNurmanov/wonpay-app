import React, { useState } from "react"
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
            <tbody>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td onClick={() => showQueryDebtModal(true)}>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
                <tr>
                    <td>Palonchi Pistonchiyev</td>
                    <td>￦5.000.000</td>
                    <td>Ko'rish</td>
                    <td>1.250</td>
                    <td>$4.000</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default DebtsTable