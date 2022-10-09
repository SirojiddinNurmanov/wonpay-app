import React from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

const BalanceSheetPage = () => {

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Oldi Berdilar:" }}>
            <div className="request-body">
                <div className="request-body-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Sana</div>
                            <div className="col-2">Berilgan pul</div>
                            <div className="col-2">Kurs</div>
                            <div className="col-2">Qarz</div>
                            <div className="col-2">Olingan pul</div>
                            <div className="col-2">Qoldiq</div>
                        </div>
                    </div>
                </div>
                <div className="request-body-item">
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">22.09</div>
                                <div className="col-2">2.000</div>
                                <div className="col-2">11200</div>
                                <div className="col-2">200</div>
                                <div className="col-2">300</div>
                                <div className="col-2">500</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">22.09</div>
                                <div className="col-2">2.000</div>
                                <div className="col-2">11200</div>
                                <div className="col-2">200</div>
                                <div className="col-2">300</div>
                                <div className="col-2">500</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">22.09</div>
                                <div className="col-2">2.000</div>
                                <div className="col-2">11200</div>
                                <div className="col-2">200</div>
                                <div className="col-2">300</div>
                                <div className="col-2">500</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BalanceSheetPage
