import React, { memo, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { common } from "../../constants/bottomButtons"
import { formatAmount } from "../../helpers"
import { getTransactions } from "../../store/actions"

import Layout from "../../layout"

import ConfirmReceiveModal from "../../components/modals/carrier/ConfirmReceiveModal"
import BalanceSheetTable from "../../components/tables/carrier/BalanceSheetTable"

const BalanceSheetPage = () => {
    const { transactions } = useSelector(state => state.app)
    const dispatch = useDispatch()

    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        dispatch(getTransactions())
        // eslint-disable-next-line
    }, [])

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Oldi-Berdilar:", amount: "$" + formatAmount(transactions ? transactions.map(transaction => transaction.amount_usd).reduce((sum, amount) => sum + amount) : 0) + " <br/>" + formatAmount(transactions ? transactions.map(transaction => transaction.amount_uzs).reduce((sum, amount) => sum + amount) : 0) + " so'm", small: true }}>
            <ConfirmReceiveModal show={modalShow} onHide={() => setModalShow(false)} />
            <BalanceSheetTable transactions={transactions}/>
        </Layout>
    )
}

export default memo(BalanceSheetPage)