import React, { memo } from "react"

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

import ReportsTable from "../../components/tables/ReportsTable"

const ReportsPage = () => {

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "O'tkazmalar Tarixi:" }}>
            <ReportsTable />
        </Layout>
    )
}

export default memo(ReportsPage)
