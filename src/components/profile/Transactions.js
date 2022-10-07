import React from "react";
import { Link } from "react-router-dom"

import { common } from "../../data/bottomButtons";
import { groupedTransactions } from "../../data/dummyData";

import Layout from "../layouts/Layout";

import { NoData } from "../common/NoData";
import TransactionItem from "../transaction/TransactionItem"

const Profile = () => {
    const { pending, finished } = groupedTransactions
    common.middleButtons = false
    return (
        <Layout buttons={common} title={{ text: "O'tkazmalar Tarixi" }}>
            {pending && (
                <div className="transaction-block">
                    <div className="title">Yakunlanmaganlar</div>
                    {(pending.length > 0) ? pending.map(transaction => (
                        <Link to={"/transactions/" + transaction.id}>
                            <TransactionItem {...transaction} />
                        </Link>
                    )) : (<NoData />)}
                </div>
            )}
            {finished && (
                <div className="transaction-block">
                    <div className="title">Tarix</div>
                    {(finished.length > 0) ? finished.map(transaction => (
                        <Link to={"/transactions/" + transaction.id}>
                            <TransactionItem {...transaction} />
                        </Link>
                    )) : (<NoData />)}
                </div>
            )}
        </Layout>
    );
};

export default Profile;
