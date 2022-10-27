import React, { memo } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import BalanceSheetTable from "../../components/tables/common/BalanceSheetTable"

const BalanceSheetPage = () => {

    common.middleButtons = false

    return (
        <Layout buttons={common}>
            <BalanceSheetTable />
        </Layout>
    )
}

export default memo(BalanceSheetPage)