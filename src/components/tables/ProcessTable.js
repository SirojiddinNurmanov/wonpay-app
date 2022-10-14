import React from "react"
import Table from "react-bootstrap/Table"
import { formatAmount } from "../../helpers"

const ProcessTable = ({ processes }) => {
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Info</th>
                    <th>Kurs</th>
                    <th>Turi</th>
                </tr>
            </thead>
            {processes && (
                <tbody>
                    {processes.map(({ user, amount, payment_type }) => {
                        console.log(user?.id, user?.first_name)
                        return (
                            <tr>
                                <td>{(user.first_name ? user.first_name : "") + " " + (user.last_name ? user.last_name : "")}</td>
                                <td>{formatAmount(amount)}</td>
                                <td></td>
                                <td></td>
                                <td>{payment_type === 1 ? "Karta" : "Naqd"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            )}
        </Table>
    )
}

export default ProcessTable