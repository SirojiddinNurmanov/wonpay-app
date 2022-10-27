import React, { memo, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { formatAmount, sumProcessAmount } from "../../helpers"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"
import WhiteLine from "../../components/common/WhiteLine"
import NoData from "../../components/common/NoData"
import AssignedQueryCard from "../../components/cards/AssignedQueryCard"

const OfferTransactionDetailsPage = () => {
    const { transactions, queries } = useSelector(state => state.app)
    let { transactionId } = useParams()
    const transaction = transactions.find(transaction => transaction.id === parseInt(transactionId))

    const { amount, buy_rate, assigned_queries } = transaction

    common.middleButtons = [
        {
            text: "Bekor Qilish",
            secondary: true
        },
        {
            text: "Davom Etish"
        }
    ]

    const getQueryById = (queryId) => {
        return queries.find(query => query.id === queryId)
    }

    return (
        <Layout buttons={common}>
            <div className="offer-header text-center">
                {"￦" + formatAmount(amount) + " = $" + formatAmount(amount / buy_rate, true)}
            </div>
            <WhiteLine color="black" />
            <div className="assigned-queries-block">
                <div className="block-title">Koreada pulni qabul qiluvchilar:</div>
                {assigned_queries.length > 0 ? assigned_queries.map((query, i) =>
                    <AssignedQueryCard key={query.id} i={i} {...(getQueryById(query.query_id))} {...query} transactionId={transactionId}/>
                ) : (
                    <NoData />
                )}
            </div>
            <WhiteLine color="black" />
            <div className="total-block">
                <div className="block-title">Jami:</div>
                <div className="total-amount">{"￦" + formatAmount(sumProcessAmount(assigned_queries.map(query => getQueryById(query.query_id))))}</div>
            </div>
        </Layout>
    )
}

export default memo(OfferTransactionDetailsPage)