import React from "react"
import { Link } from "react-router-dom"

import Layout from "../../layout"

const RequestsPage = () => {
    return (
        <Layout>
            <div className="request-page">
                <div className="home-header">
                    <div className="logo">
                        <img src="/assets/img/icons/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="request-header">
                    <span>So'rovlar:</span>
                    <span>W15.000.000</span>
                </div>
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
                            <Link to="/singlerequests">
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
                            <Link to="/singlerequests">
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
                            <Link to="/singlerequests">
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
                            <Link to="/singlerequests">
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
                            <Link to="/singlerequests">
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
                            <Link to="/singlerequests">
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
                            <Link to="/singlerequests">
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
            </div>
        </Layout>
    )
}
export default RequestsPage
