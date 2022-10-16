import React from "react"
import { useSelector } from "react-redux"

import { common } from "../../constants/bottomButtons"
import { formatAmount, sumProcessAmount } from "../../helpers"

import Layout from "../../layout"

import OfferTable from "../../components/tables/OfferTable"

const OffersPage = () => {
    const { offers } = useSelector(state => state.app)

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Takliflar:", amount: "W" + formatAmount(sumProcessAmount(offers)) }}>
           <OfferTable />
        </Layout>
    )
}
export default OffersPage
