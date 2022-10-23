import React, { memo } from "react"
import ProfitTable from "../../components/tables/ProfitTable"

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

const ProfitPage = () => {
    common.middleButtons = [
        {
            text: "Pul Yechish"
        }
    ]

    return (
        <Layout buttons={common} title={{ text: "Umumiy Foyda:", amount: "$73.256" }}>
            <ProfitTable />
        </Layout>
    )
}

export default memo(ProfitPage)
