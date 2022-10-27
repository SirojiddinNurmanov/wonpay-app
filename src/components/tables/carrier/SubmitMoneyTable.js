import React, { memo } from "react"

import TableLayout from "../TableLayout"

const SubmitMoneyTable = () => {
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

export default memo(SubmitMoneyTable)