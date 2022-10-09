import React from "react"
import { Link } from "react-router-dom"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

const OffersPage = () => {

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Takliflar:", amount: "W32.000.000" }}>
            <div className="request-body">
                <div className="request-body-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Ism</div>
                            <div className="col-2">Summa</div>
                            <div className="col-2">Info</div>
                            <div className="col-2">Kurs</div>
                            <div className="col-2">Turi</div>
                            <div className="col-2">T-lash</div>
                        </div>
                    </div>
                </div>
                <div className="request-body-item">
                    <div className="request-time">22.08.2022</div>
                    <div className="request-table">
                        <Link to="/singleoffer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singleoffer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singleoffer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singleoffer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singleoffer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singleoffer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="request-table">
                        <Link to="/singleoffer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div className="col-2">Ko'rish</div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default OffersPage
