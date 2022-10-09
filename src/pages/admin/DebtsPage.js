import React, { useState } from "react"

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

import QueryDebtModal from "../../components/modals/admin/QueryDebtModal"
import OfferDebtModal from "../../components/modals/admin/OfferDebtModal"
import Title from "../../components/common/Title"

const DebtsPage = () => {
    const [queryDebtModal, showQueryDebtModal] = useState(false)
    const [offerDebtModal, showOfferDebtModal] = useState(false)

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Qarzlar:", amount: "+$20.000.000" }}>
            <QueryDebtModal show={queryDebtModal} onHide={() => showQueryDebtModal(false)} />
            <OfferDebtModal show={offerDebtModal} onHide={() => showOfferDebtModal(false)} />
            <div className="request-body-title">
                <div className="container">
                    <div className="row">
                        <div className="col-4">Ism</div>
                        <div className="col-2">Summa</div>
                        <div className="col-2">Info</div>
                        <div className="col-2">Kurs</div>
                        <div className="col-2">Qarz</div>
                    </div>
                </div>
            </div>
            <div className="request-body-item">
                <div className="request-time">22.08.2022</div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">Farruh Soipov</div>
                            <div className="col-2">$5.000</div>
                            <div
                                className="col-2"
                                onClick={() => showQueryDebtModal(true)}
                            >
                                Ko'rish
                            </div>
                            <div className="col-2">1250</div>
                            <div className="col-2">$1000</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">Farruh Soipov</div>
                            <div className="col-2">$5.000</div>
                            <div
                                className="col-2"
                                onClick={() => showQueryDebtModal(true)}
                            >
                                Ko'rish
                            </div>
                            <div className="col-2">1250</div>
                            <div className="col-2">$1000</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">Farruh Soipov</div>
                            <div className="col-2">$5.000</div>
                            <div
                                className="col-2"
                                onClick={() => showQueryDebtModal(true)}
                            >
                                Ko'rish
                            </div>
                            <div className="col-2">1250</div>
                            <div className="col-2">$1000</div>
                        </div>
                    </div>
                </div>
            </div>
            <Title text="Bizning qarzlar:" amount="+$20.000.000" inContent={true} />
            <div className="request-body-title">
                <div className="container">
                    <div className="row">
                        <div className="col-4">Ism</div>
                        <div className="col-2">Summa</div>
                        <div className="col-2">Info</div>
                        <div className="col-2">Kurs</div>
                        <div className="col-2">Qarz</div>
                    </div>
                </div>
            </div>
            <div className="request-body-item">
                <div className="request-time">22.08.2022</div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">Farruh Soipov</div>
                            <div className="col-2">$5.000</div>
                            <div
                                className="col-2"
                                onClick={() => showOfferDebtModal(true)}
                            >
                                Ko'rish
                            </div>
                            <div className="col-2">1250</div>
                            <div className="col-2">$1000</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">Farruh Soipov</div>
                            <div className="col-2">$5.000</div>
                            <div
                                className="col-2"
                                onClick={() => showOfferDebtModal(true)}
                            >
                                Ko'rish
                            </div>
                            <div className="col-2">1250</div>
                            <div className="col-2">$1000</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">Farruh Soipov</div>
                            <div className="col-2">$5.000</div>
                            <div
                                className="col-2"
                                onClick={() => showOfferDebtModal(true)}
                            >
                                Ko'rish
                            </div>
                            <div className="col-2">1250</div>
                            <div className="col-2">$1000</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default DebtsPage
