import React, { memo } from "react"

import TableLayout from "../TableLayout"

const BalanceSheetTable = () => {
    const headers = [
        "Ism",
        "Umumiy Summa",
        "Dollar",
        "So'm",
        "Kurs",
        "Mavjud Pul"
    ]

    return (
        <TableLayout headers={headers}>
            <></>
        </TableLayout>
    )
}

export default memo(BalanceSheetTable)