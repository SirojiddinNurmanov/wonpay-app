import React, { memo, useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getTransactions } from "../../store/actions"
import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import BalanceSheetTable from "../../components/tables/common/BalanceSheetTable"
import GiveMoneyModal from "../../components/modals/client/GiveMoneyModal"

const BalanceSheetPage = () => {
    const [giveMoneyModal, showGiveMoneyModal] = useState(false)
    const { transactions } = useSelector(state => state.app)
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
        dispatch(getAllUsers())
        dispatch(getTransactions())
        // eslint-disable-next-line
    }, [])

    return (
        <Layout buttons={common} title={{ text: "Oldi Berdilar:" }}>
            <GiveMoneyModal show={giveMoneyModal} onHide={() => showGiveMoneyModal(false)} />
            <div className="processes-block">
                <BalanceSheetTable transactions={transactions} />
            </div>
        </Layout>
    )
}

export default memo(BalanceSheetPage)
