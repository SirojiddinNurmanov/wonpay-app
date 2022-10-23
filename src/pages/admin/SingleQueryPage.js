import React, { memo, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { common } from "../../constants/bottomButtons"
import { formatAmount } from "../../helpers"
import { getCarriers, setProcessCarrier } from "../../store/actions"

import Layout from "../../layout"

import WhiteLine from "../../components/common/WhiteLine"
import QueryRateModal from "../../components/modals/admin/QueryRateModal"
import QueryDollarModal from "../../components/modals/admin/QueryDollarModal"

const SingleQueryPage = () => {
    const [rateModal, showRateModal] = useState(false)
    const [dollarModal, showDollarModal] = useState(false)
    const [carrierId, setCarrierId] = useState()
    const { queries, carriers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    let { queryId } = useParams()
    let query = queries.find(query => query.id === parseInt(queryId))

    useEffect(() => {
        dispatch(getCarriers())
        if (query.carrier_id) {
            setCarrierId(query.carrier_id)
        }
        // eslint-disable-next-line
    }, [])

    const openModal = (e) => {
        showRateModal(true)
    }

    const openDollarModal = (e) => {
        showDollarModal(true)
    }

    common.middleButtons = [
        {
            text: "Tasdiqlash",
            callback: () => {
                console.log("");
            }
        }
    ]

    const selectCarrier = ({ target: { value } }) => {
        setCarrierId(value)
        dispatch(setProcessCarrier(queryId, value))
    }

    return (
        <Layout buttons={common}>
            <QueryRateModal show={rateModal} onHide={() => showRateModal(false)} {...query} />
            <QueryDollarModal show={dollarModal} onHide={() => showDollarModal(false)} {...query} />
            <div className="process-owner-block">
                <div className="process-owner">
                    <div className="process-owner-name">{(query.client.first_name ? query.client.first_name : "No name") + " " + (query.client.last_name ? query.client.last_name : " ")}</div>
                    <div className="process-amount">{"￦ " + formatAmount(query.amount)}</div>
                </div>
                <div className="process-rate-block">
                    <div className="process-rate-item">Sotish</div>
                    <div className="process-rate underlined" onClick={openModal}>{query.exchange_rate > 0 ? query.exchange_rate : "Kiritish"}</div>
                </div>
            </div>
            <WhiteLine />
            <div className="process-dollar-block">
                <div className="process-title">Olinadigan Dollar:</div>
                <div className="process-dollar-amount underlined" onClick={openDollarModal}>{query.exchange_rate > 0 ? "$ " + formatAmount(query.amount / query.exchange_rate, true) : "Kiritish"}</div>
            </div>
            <div className="process-receiver-block">
                {query.payment_type === 1 && (
                    <>
                        <WhiteLine />
                        <div className="process-title">Koreadan Pul Oluvchi:</div>
                        <div className="card-info-block">
                            {query.card_info_type === 0 ? (
                                <pre>
                                    {query.card_info_sms}
                                </pre>
                            ) : (
                                <img src={query.card_info_image} alt="Card Info" />
                            )}
                        </div>
                    </>
                )}
            </div>
            {/* <WhiteLine />
            <div className="process-receiver-block">
                <div className="process-title">O'zbekistonda Pul Beruvchi:</div>
                <div className="process-deliverer-block">
                    <div className="process-deliverer-name">{query.receiver.name}</div>
                    <div className="process-deliverer-number">{query.receiver.phone_number}</div>
                    {query.delivery_date && (
                        <div className="process-delivery-block">{query.delivery_date}</div>
                    )}
                </div>
            </div> */}
            <WhiteLine />
            <div className="process-carrier-block">
                <div className="process-title">Pulni Oluvchi Kuryer:</div>
                <div className="process-carrier-list">
                    <select onChange={selectCarrier} className="underlined" value={carrierId}>
                        {carriers ? carriers.length > 1 ? (
                            <>
                                <option value="1">Tanlash</option>
                                {carriers.map(({ id, first_name, last_name }) => (
                                    <option key={id} value={id}>{first_name + (last_name ? " " + last_name : "")}</option>
                                ))}
                            </>
                        ) : (
                            <option value={carriers[0].id}>{carriers[0].first_name + (carriers[0].last_name ? " " + carriers[0].last_name : "")}</option>
                        ) : ""}
                    </select>
                </div>
            </div>
        </Layout>
    )
}

export default memo(SingleQueryPage)
