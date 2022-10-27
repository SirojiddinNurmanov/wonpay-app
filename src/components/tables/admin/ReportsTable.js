import React, { memo } from "react"

import TableLayout from "../TableLayout"

const ReportsTable = () => {
    const headers = [
        "Ism",
        "Summa",
        "Info",
        "Chek",
        "Foyda",
        "Holati"
    ]

    return (
        <TableLayout headers={headers}>
            <></>
        </TableLayout>
    )
}

export default memo(ReportsTable)