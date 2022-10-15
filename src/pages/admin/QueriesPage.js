import React from "react"

import Layout from "../../layout"

import { common } from "../../constants/bottomButtons"
import QueryTable from "../../components/tables/QueryTable"
import { useSelector } from "react-redux"
import { formatAmount, sumProcessAmount } from "../../helpers"


const QueriesPage = () => {
    const { queries } = useSelector(state => state.app)


    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "So'rovlar:", amount: "W" + formatAmount(sumProcessAmount(queries)) }}>
            <QueryTable />
        </Layout>
    )
}
export default QueriesPage
