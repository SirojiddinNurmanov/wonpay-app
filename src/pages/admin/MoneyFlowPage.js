import React, { memo } from "react"

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

import MoneyFlowTable from "../../components/tables/MoneyFlowTable"

const MoneyFlowPage = () => {
    common.middleButtons = [
        {
            text: "Pul Yechish"
        }
    ]
    return (
        <Layout buttons={common} title={{ text: "Mavjud mablag':", amount: "$73.256 12.000.000 so'm", small: true }}>
            <MoneyFlowTable />
        </Layout>
    )
}

export default memo(MoneyFlowPage)
