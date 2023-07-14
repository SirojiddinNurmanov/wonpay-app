import React, { memo, useEffect, useState } from "react";
import NoData from "../../common/NoData";

import TableLayout from "../TableLayout";
import { useDispatch, useSelector } from "react-redux";
import { getUserMoneyFlow } from "../../../store/actions";
import { formatAmount } from "../../../helpers";
import TransactionInfoModal from "../../modals/common/TransactionInfoModal";

const MoneyFlowTable = () => {
    const [givenMoneyModal, showGivenMoneyModal] = useState(false);
    const [modalInfo, setModalInfo] = useState();
    const { moneyflow } = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserMoneyFlow());

        // eslint-disable-next-line
    }, []);

    const openGivenMoneyModal = (transaction) => (e) => {
        showGivenMoneyModal(true);
        setModalInfo(transaction);
    };

    const headers = [
        "Beruvchi",
        "Umumiy",
        "So'm",
        "Kurs",
        "Oluvchi"
    ];

    return (
        <TableLayout headers={headers}>
            <TransactionInfoModal show={givenMoneyModal} onHide={() => showGivenMoneyModal(false)} {...modalInfo} />
            {moneyflow.length > 0 ? moneyflow.map(row => (
                <tr key={row.id} onClick={openGivenMoneyModal(row)} style={{ fontSize: '12px' }}>
                    <td>{row.giver?.first_name}</td>
                    <td><strong>$</strong>{formatAmount(row.amount_usd)}</td>
                    <td>{formatAmount(row.amount_uzs ?? 0)} so'm</td>
                    <td>{formatAmount(row.rate)}</td>
                    <td>{row.taker?.first_name}</td>
                </tr>
            )) : (
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