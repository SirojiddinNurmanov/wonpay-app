import React, { memo, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { getTransactions } from "../../store/actions"
import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import BalanceSheetTable from "../../components/tables/common/BalanceSheetTable"

const BalanceSheetPage = () => {
    const { transactions } = useSelector(state => state.app)
    const dispatch = useDispatch()

    common.middleButtons = false

    useEffect(() => {
        dispatch(getTransactions())
        // eslint-disable-next-line
    }, [])

    return (
        <Layout buttons={common} title={{ text: "Oldi Berdilar:" }}>
            <div className="processes-block">
                <BalanceSheetTable transactions={transactions} />
            </div>
        </Layout>
    )
}

export default memo(BalanceSheetPage)
