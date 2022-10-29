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
    const { offers, queries } = useSelector(state => state.app)
    let { offerId } = useParams()
    const offer = offers.find(offer => offer.id === parseInt(offerId))

    const { amount, buy_rate, assigned_queries } = offer

    common.middleButtons = false

    const getQueryById = (queryId) => {
        return queries.find(query => query.id === queryId)
    }

    return (
        <Layout buttons={common}>
            <div className="offer-header text-center">
                {buy_rate ? ("￦" + formatAmount(amount) + " = $" + formatAmount(amount / buy_rate, true)) : ("￦" + formatAmount(amount))}
            </div>
            <WhiteLine color="black" />
            <div className="assigned-queries-block">
                <div className="block-title">Koreada pulni qabul qiluvchilar:</div>
                {assigned_queries.length > 0 ? assigned_queries.map((query, i) =>
                    <AssignedQueryCard key={query.id} i={i} {...(getQueryById(query.id))} {...query}/>
                ) : (
                    <NoData />
                )}
            </div>
            <WhiteLine color="black" />
            <div className="total-block">
                <div className="block-title">Jami:</div>
                <div className="total-amount">{"￦" + formatAmount(sumProcessAmount(assigned_queries.map(query => getQueryById(query.id))))}</div>
            </div>
            <div className="spacer"></div>`
        </Layout>
    )
}

export default memo(OfferTransactionDetailsPage)