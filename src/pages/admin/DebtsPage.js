import React, { useState } from "react"

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

import DebtModal from "../../components/modals/DebtModal"
import DebtModal2 from "../../components/modals/DebtModal2"
import Title from "../../components/common/Title"

const DebtsPage = () => {
    const [modalShow, setModalShow] = useState(false)
    const [modalShow2, setModalShow2] = useState(false)

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Qarzlar:", amount: "+$20.000.000" }}>
            <DebtModal show={modalShow} onHide={() => setModalShow(false)} />
            <DebtModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
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
                                onClick={() => setModalShow(true)}
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
                                onClick={() => setModalShow(true)}
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
                                onClick={() => setModalShow(true)}
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
                                onClick={() => setModalShow2(true)}
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
                                onClick={() => setModalShow2(true)}
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
                                onClick={() => setModalShow2(true)}
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
