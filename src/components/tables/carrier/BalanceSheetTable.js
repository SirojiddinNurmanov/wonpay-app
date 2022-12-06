import React, { memo } from "react";

import TableLayout from "../TableLayout";
import NoData from "../../common/NoData";
import { formatAmount } from "../../../helpers";

const BalanceSheetTable = ({ transactions, carrierId }) => {

    const headers = [
        "Ism",
        "Umumiy Summa",
        "Dollar",
        "So'm",
        "Kurs"
        // "Turi"
    ];

    return (
        <TableLayout headers={headers}>
            {transactions?.length > 0 ? transactions.map((transaction) => {
                return (
                    <tr key={transaction.id}>
                        <td>{transaction.from_id === parseInt(carrierId) ? transaction.taker.first_name : transaction.giver.first_name}</td>
                        <td className={"text-bold" + (transaction.from_id === parseInt(carrierId) ? " red" : " green")}>{(transaction.from_id === parseInt(carrierId) ? "-" : "+") + "$" + formatAmount((transaction.amount_usd ? transaction.amount_usd : 0) + parseInt(transaction.amount_uzs ? transaction.amount_uzs / transaction.rate : 0))}</td>
                        <td>{transaction.amount_usd ? "$" + formatAmount(transaction.amount_usd) : ""}</td>
                        <td>{transaction.amount_uzs ? formatAmount(transaction.amount_uzs) : ""}</td>
                        <td>{transaction.rate ? formatAmount(transaction.rate) : ""}</td>
                        {/* <td>{ (transaction.from_id === parseInt(carrierId) ? "Berilgan" : "Olingan") }</td> */}
                    </tr>
                );
            }) : (
                <tr>
                    <td colSpan={6}>
                        <NoData row={true} />
                    </td>
                </tr>
            )}
        </TableLayout>
    );
};

export default memo(BalanceSheetTable);