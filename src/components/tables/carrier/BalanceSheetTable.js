import React, { memo } from "react"

import TableLayout from "../TableLayout"
import NoData from "../../common/NoData"

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
            <tr>
                <td colSpan={6}>
                    <NoData row={true} />
                </td>
            </tr>
        </TableLayout>
    )
}

export default memo(BalanceSheetTable)