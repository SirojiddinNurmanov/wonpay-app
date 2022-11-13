import React, { memo, useState } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import ConfirmReceiveModal from "../../components/modals/carrier/ConfirmReceiveModal"
// import MoneyCard from "../../components/cards/MoneyCard"

const DeliverPage = () => {
    const [modalShow, setModalShow] = useState(false)

    common.middleButtons = [
        {
            text: "Pul Topshirish",
            callback: () => {
                setModalShow(true)
            }
        }
    ]

    return (
        <Layout buttons={common} title={{ text: "Pul Berish:", amount: "$0" }}>
            <ConfirmReceiveModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="carrier-body">
                {/* <MoneyCard /> */}
            </div>
        </Layout>
    )
}

export default memo(DeliverPage)
