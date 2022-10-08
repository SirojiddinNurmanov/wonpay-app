import React from "react"
import { useParams } from "react-router-dom"

import { fetchTransaction } from "../../helpers"

import { transactions } from "../../constants/dummyData"
import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

const TransactionPage = () => {
    let { transactionId } = useParams()
    const transaction = fetchTransaction(transactions, transactionId)
    console.log(transaction)

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

export default TransactionPage