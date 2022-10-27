import React, { memo } from "react"

import TableLayout from "../TableLayout"

const MoneyFlowTable = () => {
    const headers = [
        "Ism",
        "Summa",
        "Foyda",
        "Jami Foyda",
        "Harajat",
        "Mavjud Mablag'"
    ]

    return (
        <TableLayout headers={headers}>
            <></>
        </TableLayout>
    )
}

export default memo(MoneyFlowTable)