import React, { memo, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { common } from "../../constants/bottomButtons"
import { formatAmount } from "../../helpers"
import { getCarriers, sendOfferQueries, setProcessCarrier } from "../../store/actions"

import Layout from "../../layout"

import WhiteLine from "../../components/common/WhiteLine"
import OfferRateModal from "../../components/modals/admin/OfferRateModal"
import OfferDollarModal from "../../components/modals/admin/OfferDollarModal"
import OfferQueryTable from "../../components/tables/OfferQueryTable"
import ConfirmationModal from "../../components/modals/admin/ConfirmationModal"

const SingleOfferPage = () => {
    const [rateModal, showRateModal] = useState(false)
    const [dollarModal, showDollarModal] = useState(false)
    const [confirmationModal, showConfirmationModal] = useState(false)
    const [selectedIds, setSelectedIds] = useState([])
    const [carrierId, setCarrierId] = useState()
    const { offers, carriers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    let { offerId } = useParams()
    let offer = offers.find(offer => offer.id === parseInt(offerId))

    useEffect(() => {
        dispatch(getCarriers())
        if (offer.carrier_id) {
            setCarrierId(offer.carrier_id)
        }
        // eslint-disable-next-line
    }, [])

    const selectQueryIds = (ids) => {
        setSelectedIds(ids)
    }

    const openModal = (e) => {
        showRateModal(true)
    }

    const openDollarModal = (e) => {
        showDollarModal(true)
    }

    common.middleButtons = [
        {
            text: "Jo'natish",
            callback: () => {
                if (offer.assigned_queries.length === 0) {
                    dispatch(sendOfferQueries(offerId, selectedIds, showConfirmationModal))
                }
            },
            disabled: offer.assigned_queries.length > 0 || offer.sell_rate === 0
        }
    ]

    const selectCarrier = ({ target: { value } }) => {
        setCarrierId(value)
        dispatch(setProcessCarrier(offerId, value))
    }

    return (
        <Layout buttons={common}>
            <OfferRateModal show={rateModal} onHide={() => showRateModal(false)} {...offer} />
            <OfferDollarModal show={dollarModal} onHide={() => showDollarModal(false)} {...offer} />
            <ConfirmationModal show={confirmationModal} onHide={() => showConfirmationModal(false)} />
            <div className="offer-owner-block">
                <div className="process-owner">
                    <div className="process-owner-name">{offer.client.first_name + (offer.client.last_name ? " " + offer.client.last_name : "")}</div>
                    <div className="process-amount">{"￦ " + formatAmount(offer.amount)}</div>
                </div>
                <div className="process-rate-block">
                    <div className="process-rate-item">Olish</div>
                    <div className="process-rate underlined" onClick={openModal}>{offer.buy_rate > 0 ? offer.buy_rate : "Kiritish"}</div>
                </div>
                <div className="process-rate-block">
                    <div className="process-rate-item">Sotish</div>
                    <div className="process-rate underlined" onClick={openModal}>{offer.sell_rate > 0 ? offer.sell_rate : "Kiritish"}</div>
                </div>
            </div>
            <WhiteLine />
            <div className="process-dollar-block">
                <div className="process-title">Beriladigan Dollar:</div>
                <div className="process-dollar-amount underlined" onClick={openDollarModal}>{offer.buy_rate > 0 ? "$ " + formatAmount(offer.amount / offer.buy_rate, true) : "Kiritish"}</div>
            </div>
            {/* <WhiteLine />
            <div className="process-receiver-block">
                <div className="process-title">O'zbekistonda Pul Beruvchi:</div>
                <div className="process-deliverer-block">
                    <div className="process-deliverer-name">{offer.receiver.name}</div>
                    <div className="process-deliverer-number">{offer.receiver.phone_number}</div>
                    {offer.delivery_date && (
                        <div className="process-delivery-block">{offer.delivery_date}</div>
                    )}
                </div>
            </div> */}
            <WhiteLine />
            <div className="process-carrier-block">
                <div className="process-title">Pulni Beruvchi Kuryer:</div>
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
            <WhiteLine />

            {offer.assigned_queries.length === 0 && (
                <div className="process-queries-block">
                    <div className="process-title">Mos Keluvchi So'rovlar:</div>
                    <OfferQueryTable  {...offer} selectQueryIds={selectQueryIds} />
                </div>
            )}
        </Layout>
    )
}

export default memo(SingleOfferPage)
