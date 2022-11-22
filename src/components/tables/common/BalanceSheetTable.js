import React, { memo } from "react"
import { useSelector } from "react-redux"

import { formatAmount } from "../../../helpers"

import TableLayout from "../TableLayout"
import NoData from "../../common/NoData"

const BalanceSheetTable = ({ transactions }) => {
    const { id } = useSelector(state => state.app.user.user)
    const headers = [
        "Sana",
        "Olingan Pul",
        "Kurs",
        // "Qarz $",
        "Berilgan Pul",
        "Qoldiq"
    ]

    return (
        <TableLayout headers={headers}>
            {transactions.length > 0 ? transactions.map(
                ({ from_id, to_id, amount_krw, amount_usd, amount_uzs, buy_rate, sell_rate, rate, status, created_at }) => (
                    status === 1 ? (
                        <tr key={created_at.toString()}>
                            <td>{(new Date(created_at)).getDate() + "-" + (new Date(created_at)).getMonth()}</td>
                            <td
                                dangerouslySetInnerHTML={{
                                    __html: (to_id === id) ? (amount_krw ? "￦" + formatAmount(amount_krw) : "")
                                        + (amount_krw && amount_usd ? "<br />" : "") +
                                        (amount_usd ? "$" + formatAmount(amount_usd) : "")
                                        + (amount_usd && amount_uzs ? "<br />" : "") +
                                        (amount_uzs ? (formatAmount(amount_uzs) + " so'm") : "")
                                        : ""
                                }}
                            />
                            <td>{rate > 0 ? rate : from_id === id ? buy_rate : sell_rate}</td>
                            <td
                                dangerouslySetInnerHTML={{
                                    __html: (from_id === id) ? (amount_krw ? "￦" + formatAmount(amount_krw) : "")
                                        + (amount_krw && amount_usd ? "<br />" : "") +
                                        (amount_usd ? "$" + formatAmount(amount_usd) : "")
                                        + (amount_usd && amount_uzs ? "<br />" : "") +
                                        (amount_uzs ? (formatAmount(amount_uzs) + " so'm") : "")
                                        : ""
                                }}
                            />
                            <td></td>
                        </tr>
                    ) : ""
                )
            ) : (
                <tr>
                    <td colSpan={5}>
                        <NoData row={true}/>
                    </td>
                </tr>
            )}
        </TableLayout>
    )
}

export default memo(BalanceSheetTable)