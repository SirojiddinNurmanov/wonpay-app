import React, { memo, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { formatAmount } from "../../helpers"
import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import WhiteLine from "../../components/common/WhiteLine"

const QueryTransactionDetailsPage = () => {
    const [startDate, setStartDate] = useState(new Date())
    const { transactions, user } = useSelector(state => state.app)
    let { transactionId } = useParams()
    const { exchange_rate, amount, receiver } = transactions.find(transaction => transaction.id === parseInt(transactionId))

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
            <div className="query-top-block">
                <div className="query-title text-center">
                    Taklif qilingan valyuta kursi:
                </div>
                {exchange_rate > 0 && (
                    <>
                        <div className="exchange-rate">{"$ 1 = ￦ " + exchange_rate}</div>
                        <div className="exchange-rate-total">{"￦ " + formatAmount(amount) + " = $ " + formatAmount(amount / exchange_rate, true)}</div>
                    </>
                )}
            </div>
            <WhiteLine />
            <div className="query-receiver-block">
                <div className="query-title">
                    Koreada pulni qabul qiluvchi:
                </div>
                <div className="receiver-details-block">
                    <h4 className="text-center">{receiver.name}</h4>
                </div>
            </div>
            <WhiteLine />
            <div className="query-receiver-block">
                <div className="query-title">
                    O'zbekistonda pulni yetkazuvchi:
                </div>
                <div className="receiver-details-block text-center">
                    <h4>{receiver.name}</h4>
                    <p>{receiver.phone_number}</p>
                </div>
                <div className="query-title">
                    O'zbekistonda pulni qachon yetkazib berasiz?
                </div>
                <DatePicker
                    minDate={new Date()}
                    selected={startDate}
                    timeCaption="Vaqt"
                    timeFormat="HH:mm"
                    showTimeSelect
                    dateFormat="yyyy-MM-dd  HH:mm"
                    onChange={(date) => setStartDate(date)}
                />
            </div>
        </Layout>
    )
}

export default memo(QueryTransactionDetailsPage)