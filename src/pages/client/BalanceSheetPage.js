import React, { memo } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import BalanceSheetTable from "../../components/tables/BalanceSheetTable"

const BalanceSheetPage = () => {

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Oldi Berdilar:" }}>
            <div className="processes-block">
                <BalanceSheetTable />
            </div>
        </Layout>
    )
}

export default memo(BalanceSheetPage)
