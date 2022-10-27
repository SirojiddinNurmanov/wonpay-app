import React, { memo } from "react"

import TableLayout from "../TableLayout"

const BalanceSheetTable = () => {
    const headers = [
        "Sana",
        "Olingan Pul",
        "Kurs",
        "Qarz $",
        "Berilgan Pul",
        "Qoldiq"
    ]

    return (
        <TableLayout headers={headers}>
            <></>
        </TableLayout>
    )
}

export default memo(BalanceSheetTable)