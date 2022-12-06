import React, { memo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../store/actions";
import { common } from "../../constants/bottomButtons";

import Layout from "../../layout";

import { groupByDate } from "../../helpers";
import { Link } from "react-router-dom";
import MoneyFlowCard from "../../components/cards/MoneyFlowCard";
import NoData from "../../components/common/NoData";

const BalanceSheetPage = () => {
    const { transactions } = useSelector(state => state.app);
    const dispatch = useDispatch();
    let groupedTransactions = groupByDate(transactions) ?? [];

    common.middleButtons = false;

    useEffect(() => {
        dispatch(getTransactions());
        // eslint-disable-next-line
    }, []);

    return (
        <Layout buttons={common} title={{ text: "Oldi Berdilar:" }}>
            <div className="transaction-block">
                {Object.keys(groupedTransactions).length > 0 ? Object.entries(groupedTransactions).map(transactionGroup => (
                    <div key={transactionGroup[0]}>
                        <br/>
                        <div className="notification-date text-center">{transactionGroup[0]}</div>
                        {transactionGroup[1].map(transaction => (
                            <Link key={transaction.id}
                                  to={(transaction.process_type === 1 ? "/offers" : "/queries") + "/" + transaction.id}>
                                <MoneyFlowCard {...transaction} />
                            </Link>
                        ))}
                    </div>
                )) : (
                    <NoData />
                )}
            </div>
        </Layout>
    );
};

export default memo(BalanceSheetPage);
