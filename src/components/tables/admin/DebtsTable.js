import React, { memo } from "react"

import { formatAmount } from '../../../helpers'

import TableLayout from "../TableLayout"

const DebtsTable = ({ users }) => {
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
                <tr key={user.id}>
                    <td>{user.first_name + (user.last_name ? " " + user.last_name : "")}</td>
                    {/* <td></td> */}
                    <td>{"$" + formatAmount(user.balance).toString().replace('-', '')}</td>
                </tr>
            ))}
        </TableLayout >
    )
}

export default memo(DebtsTable)