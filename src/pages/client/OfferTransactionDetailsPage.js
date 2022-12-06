import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { common } from "../../constants/bottomButtons";
import { getOffers, getQueries } from "../../store/actions";
import { formatAmount, sumProcessAmount } from "../../helpers";

import Layout from "../../layout";

import NoData from "../../components/common/NoData";
import WhiteLine from "../../components/common/WhiteLine";
import AssignedQueryCard from "../../components/cards/AssignedQueryCard";
import { useState } from "react";

const OfferTransactionDetailsPage = () => {
    const [cancelled, setCancelled] = useState(false);
    const { offers, queries } = useSelector(state => state.app);
    let { offerId } = useParams();
    const offer = offers?.find(offer => offer.id === parseInt(offerId));
    const dispatch = useDispatch();

    const reAnnounce = () => {

        setCancelled(true);
    };

    const cancelAnnounce = () => {

        setCancelled(true);
    };

    common.middleButtons = !cancelled ? offer?.assigned_queries.length > 0 ? offer?.assigned_queries.map(query => query.amount).reduce((sum, query) => sum + query.amount) < offer?.amount ? [
        {
            text: "Bekor Qilish",
            eventHandler: () => cancelAnnounce()
        },
        {
            text: "Chop Etish",
            eventHandler: () => reAnnounce()
        }
    ] : false : false : false;

    let remainder = offer?.amount - (offer?.assigned_queries.length > 0 ? offer?.assigned_queries.map(query => query.amount).reduce((sum, query) => sum + query.amount) : 0);

    useEffect(() => {
        dispatch(getQueries());
        dispatch(getOffers());
        if (!cancelled) {
            setCancelled(offer?.status === 1);
        }
        // eslint-disable-next-line
    }, []);

    const getQueryById = (queryId) => {
        return queries?.find(query => query.id === queryId);
    };

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
                            <AssignedQueryCard key={query.id} i={i} {...(getQueryById(query.id))} {...query} />
                        ) : (
                            <NoData />
                        )}
                    </div>
                    <WhiteLine color="black" />
                    <div className="total-block">
                        <div className="block-title">Jami:</div>
                        <div
                            className="total-amount">{"￦" + formatAmount(sumProcessAmount(offer.assigned_queries.map(query => getQueryById(query.id))))}</div>
                    </div>
                    {common.middleButtons && (
                        <div className="remained-reminder">
                            <div className="amount">{"￦" + formatAmount(remainder) + " qoldi"}</div>
                            <div className="reminder-text text-center">Taklifingizning qolgan qismini qaytadan
                                chop etilishini xoxlaysizmi?
                            </div>
                        </div>
                    )}
                    <div className="spacer"></div>
                    `
                </>
            )}
        </Layout>
    );
};

export default memo(OfferTransactionDetailsPage);