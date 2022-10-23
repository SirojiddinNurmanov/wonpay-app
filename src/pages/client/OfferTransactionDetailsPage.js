import React, { memo } from "react"
import { useParams } from "react-router-dom"

import { fetchTransaction } from "../../helpers"

import { transactions } from "../../constants/dummyData"
import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

const QueryTransactionDetailsPage = () => {
    let { transactionId } = useParams()
    const transaction = fetchTransaction(transactions, transactionId)

    common.middleButtons = [
        {
            text: "Bekor Qilish",
            secondary: true
        },
        {
            text: "Davom Etish"
        }
    ]

    return (
        <Layout buttons={common}>

        </Layout>
    )
}

export default memo(QueryTransactionDetailsPage)