import React, { memo, useState } from "react"

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

import QueryDebtModal from "../../components/modals/admin/QueryDebtModal"
import OfferDebtModal from "../../components/modals/admin/OfferDebtModal"
import Title from "../../components/common/Title"
import DebtsTable from "../../components/tables/DebtsTable"

const DebtsPage = () => {
    const [queryDebtModal, showQueryDebtModal] = useState(false)
    const [offerDebtModal, showOfferDebtModal] = useState(false)

    common.middleButtons = false

    return (
        <Layout buttons={common}>
            <QueryDebtModal show={queryDebtModal} onHide={() => showQueryDebtModal(false)} />
            <OfferDebtModal show={offerDebtModal} onHide={() => showOfferDebtModal(false)} />
            <Title text="Qarzlar:" amount="" inContent={true} />
            <div className="processes-block">
                <DebtsTable />
            </div>
            <Title text="Bizning Qarzlar:" amount="" inContent={true} />
            <div className="processes-block">
                <DebtsTable />
            </div>
        </Layout>
    )
}

export default memo(DebtsPage)
