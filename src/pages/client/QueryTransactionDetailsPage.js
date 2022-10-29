import React, { memo, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
// import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { formatAmount } from "../../helpers"
import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import WhiteLine from "../../components/common/WhiteLine"

const QueryTransactionDetailsPage = () => {
    // const [startDate, setStartDate] = useState(new Date())
    const { queries } = useSelector(state => state.app)
    let { queryId } = useParams()
    const { exchange_rate, amount, card_info_type, card_info_sms, card_info_image, proof_image, status } = queries.find(query => query.id === parseInt(queryId))

    common.middleButtons = false

    return (
        <Layout buttons={common}>
            <div className="query-top-block text-center">
                <div className="query-title">
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
                <div className="receiver-details-block text-center">
                    {/* <h4 className="text-center">{}</h4> */}
                    {card_info_type === 1 ? (
                        <img src={card_info_image} alt="Card info" />
                    ) : (
                        <pre className="card-info-sms">{card_info_sms}</pre>
                    )}
                </div>
            </div>
            {/*<WhiteLine />
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
                    open
                    minDate={new Date()}
                    selected={startDate}
                    timeCaption="Vaqt"
                    timeFormat="HH:mm"
                    showTimeSelect
                    dateFormat="yyyy-MM-dd  HH:mm"
                    onChange={(date) => setStartDate(date)}
                />
            </div> */}
            <WhiteLine />
            <div className="query-status-block">
                {status === 1 ? (
                    <>
                        <div className="process-title text-center green">To'langan</div>
                        <img src={proof_image} alt="Proof" />
                    </>
                ) : (
                    <div className="process-title text-center waiting">Kutilmoqda</div>
                )}
            </div>
            {status === 1 && (
                <div className="spacer"></div>
            )}
        </Layout>
    )
}

export default memo(QueryTransactionDetailsPage)