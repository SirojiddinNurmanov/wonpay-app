import React from "react"
import Table from "react-bootstrap/Table"
import { useSelector } from "react-redux"
import { formatAmount } from "../../helpers"

const OfferTable = () => {

    const { offers } = useSelector(state => state.app)
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Summa</th>
                    <th>Turi</th>
                    <th>Sotish</th>
                    <th>Olish</th>
                    <th>Taqsim</th>
                </tr>
            </thead>
            {offers && (
                <tbody>
                    {offers.map(({ id, user, amount, payment_type, exchange_rate }) => (
                        <tr key={id}>
                            <td>{(user.first_name ? user.first_name : "") + " " + (user.last_name ? user.last_name : "")}</td>
                            <td>{formatAmount(amount)}</td>
                            <td>{payment_type === 1 ? "Karta" : "Naqd"}</td>
                            <td>{exchange_rate ? exchange_rate : "Kiritish"}</td>
                            <td>Kiritish</td>
                            <td>Taqsimlash</td>
                        </tr>
                    ))}
                </tbody>
            )}
        </Table>
    )
}

export default OfferTable