import React from "react"
import { Link } from "react-router-dom"

import { common } from "../../constants/bottomButtons"
import { groupedTransactions } from "../../constants/dummyData"

import Layout from "../../layout"

import { NoData } from "../../components/common/NoData"
import TransactionCard from "../../components/cards/TransactionCard"

const TransactionsPage = () => {
    const { pending, finished } = groupedTransactions
    common.middleButtons = false
    return (
        <Layout buttons={common} title={{ text: "O'tkazmalar Tarixi" }}>
            {pending && (
                <div className="transaction-block">
                    <div className="title">Yakunlanmaganlar</div>
                    {(pending.length > 0) ? pending.map((transaction, index) => (
                        <Link key={index} to={"/transactions/" + transaction.id}>
                            <TransactionCard {...transaction} />
                        </Link>
                    )) : (<NoData />)}
                </div>
            )}
            {finished && (
                <div className="transaction-block">
                    <div className="title">Tarix</div>
                    {(finished.length > 0) ? finished.map((transaction, index) => (
                        <Link key={index} to={"/transactions/" + transaction.id}>
                            <TransactionCard {...transaction} />
                        </Link>
                    )) : (<NoData />)}
                </div>
            )}
        </Layout>
    )
}

export default TransactionsPage
