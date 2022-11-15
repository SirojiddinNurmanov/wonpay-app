import React, { memo } from "react"
import { useNavigate } from "react-router-dom"

import { formatAmount } from '../../../helpers'

import TableLayout from "../TableLayout"

const DebtsTable = ({ users }) => {
    const navigate = useNavigate()
    const headers = [
        "Ism",
        // "Summa",
        // "Info",
        // "Kurs",
        "Qarz"
    ]

    return (
        <TableLayout headers={headers}>
            {users && users.map(user => (
                <tr key={user.id} onClick={() => navigate('/profile/' + user.id)}>
                    <td>{user.first_name + (user.last_name ? " " + user.last_name : "")}</td>
                    <td>{"$" + formatAmount(user.balance).toString().replace('-', '')}</td>
                </tr>
            ))}
        </TableLayout >
    )
}

export default memo(DebtsTable)