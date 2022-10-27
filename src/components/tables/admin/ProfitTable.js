import React, { memo } from "react"

import TableLayout from "../TableLayout"

const ProfitTable = () => {
    const headers = [
        "Ism",
        "Summa",
        "Info",
        "Chek",
        "Foyda",
        "Jami"
    ]

    return (
        <TableLayout headers={headers}>
            <></>
        </TableLayout>
    )
}

export default memo(ProfitTable)