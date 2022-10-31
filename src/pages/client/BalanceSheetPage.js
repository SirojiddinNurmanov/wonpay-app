import React, { memo, useState, useEffect } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import BalanceSheetTable from "../../components/tables/common/BalanceSheetTable"
import GiveMoneyModal from "../../components/modals/client/GiveMoneyModal"
import { useDispatch } from "react-redux"
import { getCarriers } from "../../store/actions"

const BalanceSheetPage = () => {
    const [giveMoneyModal, showGiveMoneyModal] = useState(false)
    const dispatch = useDispatch()

    common.middleButtons = [
        {
            text: "Pul Berish",
            callback: () => {
                showGiveMoneyModal(true)
            }
        }
    ]

    useEffect(() => {
        dispatch(getCarriers())
    }, [])

    return (
        <Layout buttons={common} title={{ text: "Oldi Berdilar:" }}>
            <GiveMoneyModal show={giveMoneyModal} onHide={() => showGiveMoneyModal(false)} />    
            <div className="processes-block">
                <BalanceSheetTable />
            </div>
        </Layout>
    )
}

export default memo(BalanceSheetPage)
