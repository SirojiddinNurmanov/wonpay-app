import React, { memo, useState } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import ConfirmReceiveModal from "../../components/modals/carrier/ConfirmReceiveModal"
import BalanceSheetTable from "../../components/tables/carrier/BalanceSheetTable"
const BalanceSheetPage = () => {
    const [modalShow, setModalShow] = useState(false)

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Oldi Berdilar:", amount: "$0" }}>
            <ConfirmReceiveModal show={modalShow} onHide={() => setModalShow(false)} />
            <BalanceSheetTable />
        </Layout>
    )
}

export default memo(BalanceSheetPage)