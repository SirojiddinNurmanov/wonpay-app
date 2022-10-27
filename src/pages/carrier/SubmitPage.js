import React, { memo, useState } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import ConfirmReceiveModal from "../../components/modals/carrier/ConfirmReceiveModal"
import SubmitMoneyTable from "../../components/tables/carrier/SubmitMoneyTable"

const SubmitPage = () => {
    const [modalShow, setModalShow] = useState(false)

    common.middleButtons = [
        {
            text: "Pul Topshirish"
        }
    ]

    return (
        <Layout buttons={common} title={{ text: "Oldi Berdilar:", amount: "$20 000 + 34 200 000 s", small: true }}>
            <ConfirmReceiveModal show={modalShow} onHide={() => setModalShow(false)} />
            <SubmitMoneyTable />
        </Layout>
    )
}

export default memo(SubmitPage)
