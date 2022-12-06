import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { common } from "../../constants/bottomButtons";
import { getQueries, getUserProcesses } from "../../store/actions";

import { groupByDate } from "../../helpers";

import Layout from "../../layout";

import NoData from "../../components/common/NoData";
import TransactionCard from "../../components/cards/TransactionCard";
import NotificationCard from "../../components/cards/NotificationCard";

const TransactionsPage = () => {
    const { processes } = useSelector(state => state.app);
    const dispatch = useDispatch();
    let groupedProcesses = groupByDate(processes) ?? [];


    common.middleButtons = false;

    useEffect(() => {
        dispatch(getUserProcesses());
        dispatch(getQueries());
        //eslint-disable-next-line
    }, []);

    return (
        <Layout buttons={common} title={{ text: "O'tkazmalar Tarixi" }}>
            <div className="transaction-block">
                <div className="title">Tarix</div>
                {Object.keys(groupedProcesses).length > 0 ? Object.entries(groupedProcesses).map(transactionGroup => (
                    <div key={transactionGroup[0]}>
                        <br/>
                        <div className="notification-date text-center">{transactionGroup[0]}</div>
                        {transactionGroup[1].map(transaction => (
                            <Link key={transaction.id}
                                  to={(transaction.process_type === 1 ? "/offers" : "/queries") + "/" + transaction.id}>
                                <TransactionCard {...transaction} />
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

export default memo(TransactionsPage);
