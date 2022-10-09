import React, { useState } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import ConfirmReceiveModal from "../../components/modals/carrier/ConfirmReceiveModal"

const DeliverPage = () => {
    const [modalShow, setModalShow] = useState(false)

    common.middleButtons = [
        {
            text: "Pul Topshirish"
        }
    ]

    return (
        <Layout buttons={common} title={{ text: "Pul Berish:", amount: "$3 200 (2)" }}>
            <ConfirmReceiveModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="curer-body">
                <h5>Bugun</h5>
                <div className="curer-item">
                    <div className="row">
                        <div className="col-6 givemoney-item1">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>+99 899 400 12 00</span>
                            </div>
                        </div>
                        <div className="col-6 givemoney-item2">
                            <p>+2265$</p>
                            <span>11/02/2022 12:20</span>
                        </div>
                    </div>
                </div>
                <div className="curer-item">
                    <div className="row">
                        <div className="col-6 givemoney-item1">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>+99 899 400 12 00</span>
                            </div>
                        </div>
                        <div className="col-6 givemoney-item2">
                            <p>+2265$</p>
                            <span>11/02/2022 12:20</span>
                        </div>
                    </div>
                </div>
                <div className="curer-item">
                    <div className="row">
                        <div className="col-6 givemoney-item1">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>+99 899 400 12 00</span>
                            </div>
                        </div>
                        <div className="col-6 givemoney-item2">
                            <p>+2265$</p>
                            <span>11/02/2022 12:20</span>
                        </div>
                    </div>
                </div>
                <div className="curer-item">
                    <div className="row">
                        <div className="col-6 givemoney-item1">
                            <h3>Akmal Payziyev</h3>
                            <div className="curer-item-footer">
                                <span>+99 899 400 12 00</span>
                            </div>
                        </div>
                        <div className="col-6 givemoney-item2">
                            <p>+2265$</p>
                            <span>11/02/2022 12:20</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DeliverPage
