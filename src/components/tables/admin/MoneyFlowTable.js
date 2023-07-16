import React, { Fragment, memo, useEffect, useState } from "react";
import NoData from "../../common/NoData";

import TableLayout from "../TableLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions } from "../../../store/actions";
import { formatAmount, groupByDate } from "../../../helpers";
import TransactionInfoModal from "../../modals/common/TransactionInfoModal";
import Role from "../../../constants/statuses/Role";

const MoneyFlowTable = ({ selectedDate }) => {
    const [givenMoneyModal, showGivenMoneyModal] = useState(false);
    const [modalInfo, setModalInfo] = useState();
    const { transactions } = useSelector(state => state.app);
    const dispatch = useDispatch();

    const filterOnlyClients = (transaction) => {
        return (transaction.giver?.role === Role.CLIENT && transaction.taker?.role !== Role.CLIENT)
            || (transaction.taker?.role === Role.CLIENT && transaction.giver?.role !== Role.CLIENT);
    };

    const filterBySelectedMonth = (transaction) => {
        return ((new Date(transaction.created_at)).getMonth() === selectedDate.getMonth())
            && ((new Date(transaction.created_at)).getFullYear() === selectedDate.getFullYear());
    };

    let groupedTransactions = groupByDate(transactions?.filter(filterOnlyClients).filter(filterBySelectedMonth)) ?? [];

    useEffect(() => {
        dispatch(getAllTransactions());

        // eslint-disable-next-line
    }, []);

    const openGivenMoneyModal = (transaction) => (e) => {
        showGivenMoneyModal(true);
        setModalInfo(transaction);
    };

    const getTotal = (transaction) => {
        let amount = transaction.amount_usd;

        if (transaction.amount_uzs > 0) {
            amount += transaction.amount_uzs / transaction.rate;
        }

        return amount;
    };

    const getPrefix = (transaction) => {
        return transaction.giver.role === Role.CLIENT ? "+" : "-";
    };

    const getTransactionTotal = (transactions) => {
        return formatAmount(transactions.reduce((cum, transaction) => cum + (getPrefix(transaction) === "+" ? 1 : -1) * getTotal(transaction), 0), true, true);
    };

    const headers = [
        "Mijoz",
        "Umumiy",
        "So'm",
        "Kurs",
        "Mas'ul"
    ];

    return (
        <TableLayout headers={headers}>
            <TransactionInfoModal show={givenMoneyModal} onHide={() => showGivenMoneyModal(false)} {...modalInfo} />
            {groupedTransactions ? (Object.entries(groupedTransactions).map(transactions => (
                <Fragment key={transactions[0]}>
                    <tr>
                        <td colSpan="5" className="text-center text-bold">{transactions[0]}</td>
                    </tr>
                    {transactions[1].map(row => (
                        <tr key={row.id} onClick={openGivenMoneyModal(row)} style={{ fontSize: "12px" }}>
                            <td>{row.giver.role === Role.CLIENT ? row.giver.first_name : row.taker.first_name}</td>
                            <td className={"text-bold " + (getPrefix(row) === "+" ? "text-success" : "text-danger")}>
                                {getPrefix(row)}<strong>$</strong>{formatAmount(getTotal(row), true, true)}
                            </td>
                            <td>{formatAmount(row.amount_uzs ?? 0)} so'm</td>
                            <td>{formatAmount(row.rate ?? 0)}</td>
                            <td>{row.giver.role === Role.CLIENT ? row.taker.first_name : row.giver.first_name}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>Jami:</td>
                        <td colSpan="4" className="text-bold">${getTransactionTotal(transactions[1])}</td>
                    </tr>
                </Fragment>
            ))) : (
                <tr>
                    <td colSpan={6}>
                        <NoData row={true} />
                    </td>
                </tr>
            )}
        </TableLayout>
    );
};

export default memo(MoneyFlowTable);