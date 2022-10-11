import React from "react"
import { Link } from "react-router-dom"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

const QueriesPage = () => {

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "So'rovlar:", amount: "W15.000.000" }}>
            <div className="request-body">
                <div className="request-body-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">Ism</div>
                            <div className="col-2">Summa</div>
                            <div className="col-2">Info</div>
                            <div className="col-2">Kurs</div>
                            <div className="col-2">Turi</div>
                        </div>
                    </div>
                </div>
                <div className="request-body-item">
                    <div className="request-time">22.08.2022</div>
                    <div className="request-table">
                        <Link to="/singlequery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singlequery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singlequery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="request-body-item">
                    <div className="request-time">22.08.2022</div>
                    <div className="request-table">
                        <Link to="/singlequery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singlequery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singlequery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singlequery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default QueriesPage