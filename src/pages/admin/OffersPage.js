import React, { memo } from "react"
import { useSelector } from "react-redux"

import { common } from "../../constants/bottomButtons"
import { formatAmount, sumProcessAmount } from "../../helpers"

import Layout from "../../layout"

import OfferTable from "../../components/tables/admin/OfferTable"

const OffersPage = () => {
    const { offers } = useSelector(state => state.app)

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Takliflar:", amount: "W" + (offers ? formatAmount(sumProcessAmount(offers.filter(offer => offer.assigned_queries.length === 0).filter(offer => offer.status !== 1))) : "0") }}>
            <OfferTable />
        </Layout>
    )
}

export default memo(OffersPage)
