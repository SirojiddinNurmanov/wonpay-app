import React, { memo, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { common } from "../../constants/bottomButtons"
import { formatAmount } from "../../helpers"
import { closeOffer, getCarriers, getOffers, getUserProcesses, sendOfferQueries, setProcessCarrier } from "../../store/actions"

import Layout from "../../layout"

import WhiteLine from "../../components/common/WhiteLine"
import OfferRateModal from "../../components/modals/admin/OfferRateModal"
import OfferDollarModal from "../../components/modals/admin/OfferDollarModal"
import ConfirmationModal from "../../components/modals/admin/ConfirmationModal"
import OfferQueryTable from "../../components/tables/admin/OfferQueryTable"
import OfferQueryProofTable from "../../components/tables/admin/OfferQueryProofTable"
import CloseOfferModal from "../../components/modals/admin/CloseOfferModal"

const SingleOfferPage = () => {
    const [rateModal, showRateModal] = useState(false)
    const [dollarModal, showDollarModal] = useState(false)
    const [confirmationModal, showConfirmationModal] = useState(false)
    const [closeOfferModal, showCloseOfferModal] = useState(false)
    const [selectedIds, setSelectedIds] = useState([])
    const [carrierId, setCarrierId] = useState(0)
    const { offers, carriers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    let { offerId } = useParams()
    let offer = offers?.find(offer => offer?.id === parseInt(offerId))

    let setCarrierIdForProcess = () => {
        offer = offers?.find(offer => offer?.id === parseInt(offerId))
        console.log(offers);
        if (offer?.carrier_id) {
            setCarrierId(offer.carrier_id)
        }
    }

    useEffect(() => {
        dispatch(getCarriers())
        // dispatch(getOffers(setCarrierIdForProcess))
        // eslint-disable-next-line
    }, [])

    const selectQueryIds = (ids) => {
        setSelectedIds(ids)
    }

    const openModal = (e) => {
        if (offer.assigned_queries.length === 0) {
            showRateModal(true)
        }
    }

    const openDollarModal = (e) => {
        if (offer.assigned_queries.length === 0) {
            showDollarModal(true)
        }
    }

    const closeOfferHandler = (e) => {
        dispatch(closeOffer(offer.id))
    }

    common.middleButtons = [
        {
            text: "Jo'natish",
            eventHandler: () => {
                if (offer?.assigned_queries.length === 0) {
                    dispatch(sendOfferQueries(offerId, selectedIds, showConfirmationModal))
                }
            },
            disabled: offer?.assigned_queries.length > 0 || offer?.sell_rate === 0 || selectedIds?.length === 0 || offer?.carrier_id === null
        }
    ]

    if (offer?.assigned_queries.length > 0 && offer?.status === 0) {
        common.middleButtons = [
            {
                text: "Tugatish",
                eventHandler: () => showCloseOfferModal(true),
                disabled: offer?.carrier_id === null
            }
        ]
    }

    if (offer?.status !== 0) {
        common.middleButtons = false
    }

    const selectCarrier = ({ target: { value } }) => {
        setCarrierId(value)
        dispatch(setProcessCarrier(offerId, value))
    }

    return (
        <Layout buttons={common}>
            {offer && (
                <>
                    <OfferRateModal show={rateModal} onHide={() => showRateModal(false)} {...offer} />
                    <OfferDollarModal show={dollarModal} onHide={() => showDollarModal(false)} {...offer} />
                    <ConfirmationModal show={confirmationModal} onHide={() => showConfirmationModal(false)} />
                    <CloseOfferModal show={closeOfferModal} onHide={() => showCloseOfferModal(false)} closeOfferHandler={closeOfferHandler} />
                    <div className="offer-owner-block">
                        <div className="process-owner">
                            <div className="process-owner-name">{offer.client.first_name + (offer.client.last_name ? " " + offer.client.last_name : "")}</div>
                            <div className="process-amount">{"￦ " + formatAmount(offer.amount)}</div>
                        </div>
                        <div className="process-rate-block">
                            <div className="process-rate-item">Olish</div>
                            <div className="process-rate underlined" onClick={openModal}>{offer.buy_rate > 0 ? offer.buy_rate : offer.rate_status === 1 ? "Kutilmoqda" : "Kiritish"}</div>
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
                            <select onChange={selectCarrier} className="underlined text-center" value={offer?.carrier_id}>
                                {carriers ? carriers.length > 1 ? (
                                    <>
                                        <option value="0">Tanlash</option>
                                        {carriers.map(({ id, first_name, last_name }) => (
                                            <option key={id} value={id}>{first_name + (last_name ? " " + last_name : "")}</option>
                                        ))}
                                    </>
                                ) : (
                                    <option value={carriers[0].id}>{carriers[0].first_name + (carriers[0].last_name ? " " + carriers[0].last_name : "")}</option>
                                ) : ""}
                            </select>
                        </div>
                        {offer?.carrier_id ? "" : (
                            <div className="error-message small text-center red">Iltimos kuryerni tanlang</div>
                        )}
                    </div>
                    <WhiteLine />

                    {offer.assigned_queries.length === 0 && (
                        <div className="process-queries-block">
                            <div className="process-title">Mos Keluvchi So'rovlar:</div>
                            <OfferQueryTable  {...offer} selectQueryIds={selectQueryIds} />
                        </div>
                    )}

                    {offer.assigned_queries.length > 0 && (
                        <div className="process-queries-block">
                            <div className="process-title">Taqsimlangan So'rovlar:</div>
                            <OfferQueryProofTable  {...offer} selectedQueries={offer.assigned_queries} />
                        </div>
                    )}
                </>
            )}
        </Layout>
    )
}

export default memo(SingleOfferPage)
