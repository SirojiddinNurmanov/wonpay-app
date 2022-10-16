import React from "react"

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

const ReportsPage = () => {

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "O'tkazmalar Tarixi:" }}>
            
        </Layout>
    )
}
export default ReportsPage
