import React, { useState } from "react";

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout";

import RequestModal from "../../components/modals/RequestModal";
import Title from '../../components/common/Title'

const OfferRequstPage = () => {
    const [modalShow, setModalShow] = useState(false);

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{text:"Takliflar:", amount:"₩32.000.000"}}>
            <RequestModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="offers-page-x">
                <div className="offer-request-body">
                    <div className="request-body-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Ism</div>
                                <div className="col-2">Summa</div>
                                <div className="col-2">Info</div>
                                <div className="col-2">Kurs</div>
                                <div className="col-2">Turi</div>
                                <div className="col-2">Taqsimlash</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-body-item">
                        <div className="request-time">22.08.2022</div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </div>
                        <div className="request-table">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        Farruh Soipov
                                    </div>
                                    <div className="col-2">2.000</div>
                                    <div
                                        className="col-2"
                                        onClick={() => setModalShow(true)}
                                    >
                                        Ko'rish
                                    </div>
                                    <div className="col-2">Kiritish</div>
                                    <div className="col-2">Karta</div>
                                    <div className="col-2">Taqsimlash</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Title text="So'rovlar:" amount="₩15.000.000" inContent={true}/>
            <div className="offer-page-x">
                <div className="offer-request-body">
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
                        </div>
                        <div className="request-table">
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
                        </div>
                        <div className="request-table">
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
                        </div>
                        <div className="request-table">
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
                        </div>
                        <div className="request-time">22.08.2022</div>
                        <div className="request-table">
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
                        </div>
                        <div className="request-table">
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
                        </div>
                        <div className="request-table">
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
                        </div>
                        <div className="request-table">
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
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OfferRequstPage;
