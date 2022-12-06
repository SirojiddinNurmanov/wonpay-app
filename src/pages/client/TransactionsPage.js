import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { common } from "../../constants/bottomButtons";
import { getQueries, getUserProcesses } from "../../store/actions";

import Layout from "../../layout";

import NoData from "../../components/common/NoData";
import TransactionCard from "../../components/cards/TransactionCard";

const TransactionsPage = () => {
    const { processes } = useSelector(state => state.app);
    const dispatch = useDispatch();

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
                {processes.length > 0 ? processes.map(transaction => (
                    <Link key={transaction.id}
                          to={(transaction.process_type === 1 ? "/offers" : "/queries") + "/" + transaction.id}>
                        <TransactionCard {...transaction} />
                    </Link>
                )) : (
                    <NoData />
                )}
            </div>
        </Layout>
    );
};

export default memo(TransactionsPage);
