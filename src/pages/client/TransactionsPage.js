import React from "react"
import { Link } from "react-router-dom"

import { common } from "../../constants/bottomButtons"
import { groupedTransactions } from "../../constants/dummyData"

import Layout from "../../layout"

import { NoData } from "../../components/common/NoData"
import TransactionCard from "../../components/cards/TransactionCard"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTransactions } from "../../store/actions"

const TransactionsPage = () => {
    const { transactions } = useSelector(state => state.app)
    const dispatch = useDispatch()
    // const { pending, finished } = transactions
    common.middleButtons = false

    useEffect(() => {
        dispatch(getTransactions())
        //eslint-disable-next-line
    }, [])

    return (
        <Layout buttons={common} title={{ text: "O'tkazmalar Tarixi" }}>
            {/* {pending && (
                <div className="transaction-block">
                    <div className="title">Yakunlanmaganlar</div>
                    {(pending.length > 0) ? pending.map((transaction, index) => (
                        <Link key={index} to={"/transactions/" + transaction.type + "/" + transaction.id}>
                            <TransactionCard {...transaction} />
                        </Link>
                    )) : (<NoData />)}
                </div>
            )}
            {finished && (
                <div className="transaction-block">
                    <div className="title">Tarix</div>
                    {(finished.length > 0) ? finished.map((transaction, index) => (
                        <Link key={index} to={"/transactions/" + transaction.type + "/" + transaction.id}>
                            <TransactionCard {...transaction} />
                        </Link>
                    )) : (<NoData />)}
                </div>
            )} */}
            <div className="transaction-block">
                <div className="title">Tarix</div>
                {transactions && transactions.map(transaction => (
                    <Link key={transaction.id} to={"/transactions/" + (transaction.type === 1 ? "offer" : "query" ) + "/" + transaction.id}>
                        <TransactionCard {...transaction} />
                    </Link>
                ))
                }
            </div>
        </Layout>
    )
}

export default TransactionsPage
