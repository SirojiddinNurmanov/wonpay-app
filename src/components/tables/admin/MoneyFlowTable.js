import React, { memo } from "react"
import NoData from "../../common/NoData"

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
            <tr>
                <td colSpan={6}>
                    <NoData row={true} />
                </td>
            </tr>
        </TableLayout>
    )
}

export default memo(MoneyFlowTable)