import React, { memo, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { common } from "../../constants/bottomButtons"
import { getQueries, getTransactions } from "../../store/actions"

import Layout from "../../layout"

import NoData from "../../components/common/NoData"
import TransactionCard from "../../components/cards/TransactionCard"

const TransactionsPage = () => {
    const { transactions } = useSelector(state => state.app)
    const dispatch = useDispatch()

    common.middleButtons = false

    useEffect(() => {
        dispatch(getTransactions())
        dispatch(getQueries())
        //eslint-disable-next-line
    }, [])

    return (
        <Layout buttons={common} title={{ text: "O'tkazmalar Tarixi" }}>
            <div className="transaction-block">
                <div className="title">Tarix</div>
                {transactions ? transactions.map(transaction => (
                    <Link key={transaction.id} to={"/transactions/" + (transaction.process_type === 1 ? "offer" : "query") + "/" + transaction.id}>
                        <TransactionCard {...transaction} />
                    </Link>
                )) : (
                    <NoData />
                )}
            </div>
        </Layout>
    )
}

export default memo(TransactionsPage)
