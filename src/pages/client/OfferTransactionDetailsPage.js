import React, { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { common } from "../../constants/bottomButtons"
import { getOffers, getQueries } from "../../store/actions"
import { formatAmount, sumProcessAmount } from "../../helpers"

import Layout from "../../layout"

import NoData from "../../components/common/NoData"
import WhiteLine from "../../components/common/WhiteLine"
import AssignedQueryCard from "../../components/cards/AssignedQueryCard"

const OfferTransactionDetailsPage = () => {
    const { offers, queries } = useSelector(state => state.app)
    let { offerId } = useParams()
    const offer = offers?.find(offer => offer.id === parseInt(offerId))
    const dispatch = useDispatch()

    common.middleButtons = false

    useEffect(() => {
        dispatch(getQueries())
        dispatch(getOffers())
        // eslint-disable-next-line
    }, [])

    const getQueryById = (queryId) => {
        return queries.find(query => query.id === queryId)
    }

    return (
        <Layout buttons={common}>
            {offer && (
                <>
                    <div className="offer-header text-center">
                        {offer.buy_rate ? ("￦" + formatAmount(offer.amount) + " = $" + formatAmount(offer.amount / offer.buy_rate, true)) : ("￦" + formatAmount(offer.amount))}
                    </div>
                    <WhiteLine color="black" />
                    <div className="assigned-queries-block">
                        <div className="block-title">Koreada pulni qabul qiluvchilar:</div>
                        {offer.assigned_queries.length > 0 ? offer.assigned_queries.filter(query => (query.exchange_rate !== 0)).map((query, i) =>
                            <AssignedQueryCard key={query.id} i={i} {...(getQueryById(query.id))} {...query}/>
                        ) : (
                            <NoData />
                        )}
                    </div>
                    <WhiteLine color="black" />
                    <div className="total-block">
                        <div className="block-title">Jami:</div>
                        <div className="total-amount">{"￦" + formatAmount(sumProcessAmount(offer.assigned_queries.map(query => getQueryById(query.id))))}</div>
                    </div>
                    <div className="spacer"></div>`
                </>
            )}
        </Layout>
    )
}

export default memo(OfferTransactionDetailsPage)