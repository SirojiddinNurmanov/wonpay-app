import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { common } from '../../constants/bottomButtons'
import { getOffers, getQueries } from "../../store/actions"

import Layout from "../../layout"

import QueryInfoModal from "../../components/modals/admin/QueryInfoModal"
import Title from '../../components/common/Title'
import OfferTable from "../../components/tables/OfferTable"
import QueryTable from "../../components/tables/QueryTable"
import { NoData } from "../../components/common/NoData"
import { formatAmount, sumProcessAmount } from "../../helpers"

const ProcessesPage = () => {
    const { queries, offers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    console.log(offers);
    
    useEffect(() => {
        dispatch(getQueries())
        dispatch(getOffers())
        //es-lint-disable-next-line
    }, [])

    common.middleButtons = false

    return (
        <Layout buttons={common} >
             <Link to="/queries">
                <Title text="So'rovlar:" amount={"₩" + (queries ? formatAmount(sumProcessAmount(queries)) : "0" )} inContent={true} />
            </Link>
            <div className="processes-block">
                {queries ? (
                    <QueryTable processes={queries}/>
                ) : (
                    <NoData />
                )}
            </div>
           
            <Link to="/queries">
                <Title text="Takliflar:" amount={"₩" + (offers ? formatAmount(sumProcessAmount(offers)) : "0" )} inContent={true} />
            </Link>
            <div className="processes-block">
                {offers ? (
                    <OfferTable processes={offers}/>
                ) : (
                    <NoData />
                )}
            </div>
        </Layout>
    )
}

export default ProcessesPage
