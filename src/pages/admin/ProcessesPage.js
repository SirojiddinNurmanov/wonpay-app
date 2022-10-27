import React, { memo, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { common } from '../../constants/bottomButtons'
import { getOffers, getQueries } from "../../store/actions"
import { formatAmount, sumProcessAmount } from "../../helpers"

import Layout from "../../layout"

import Title from '../../components/common/Title'
import OfferTable from "../../components/tables/admin/OfferTable"
import QueryTable from "../../components/tables/admin/QueryTable"

const ProcessesPage = () => {
    const { queries, offers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getQueries())
        dispatch(getOffers())
        //eslint-disable-next-line
    }, [])

    common.middleButtons = false

    return (
        <Layout buttons={common}>
            <Link to="/queries">
                <Title text="So'rovlar:" amount={"₩" + (queries ? formatAmount(sumProcessAmount(queries.filter(query => query.assigned_offer === null))) : "0")} inContent={true} />
            </Link>
            <div className="processes-block">
                <QueryTable processes={queries} />
            </div>

            <Link to="/offers">
                <Title text="Takliflar:" amount={"₩" + (offers ? formatAmount(sumProcessAmount(offers)) : "0")} inContent={true} />
            </Link>
            <div className="processes-block">
                <OfferTable />
            </div>
        </Layout>
    )
}

export default memo(ProcessesPage)
