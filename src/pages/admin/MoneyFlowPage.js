import React from "react"
import MoneyFlowTable from "../../components/tables/MoneyFlowTable"

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

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
export default MoneyFlowPage
