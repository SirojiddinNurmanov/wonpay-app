import React, { useState } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import CurerModal from "../../components/modals/CurerModal"

const SubmitPage = () => {
    const [modalShow, setModalShow] = useState(false)

    common.middleButtons = [
        {
            text: "Pul Topshirish"
        }
    ]

    return (
        <Layout buttons={common} title={{ text: "Oldi Berdilar:", amount: "$20 000 + 34 200 000 s", small: true }}>
            <CurerModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="request-body">
                <div className="curer-select-page">
                    <div className="curer-select">
                        <select name="curer" id="curer1">
                            <option value="1">Hammasi</option>
                            <option value="1">Pul Olinganlar</option>
                            <option value="1">Pul Berilganlar</option>
                            <option value="1">Topshirilganlar</option>
                        </select>
                    </div>
                    <div className="curer-select">
                        <select name="curer" id="curer2">
                            <option value="1">Hammasi</option>
                            <option value="1">Bugungilar</option>
                            <option value="1"> 1 haftalik</option>
                            <option value="1">1 oylik</option>
                        </select>
                    </div>
                </div>
                <div className="request-body-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Ism</div>
                            <div className="col-2">Summa</div>
                            <div className="col-2">Dollar</div>
                            <div className="col-2">So'm</div>
                            <div className="col-2">Kurs</div>
                            <div className="col-2">Mavjud Pul</div>
                        </div>
                    </div>
                </div>
                <div className="request-body-item">
                    <div className="request-time">22.08.2022</div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                    <div className="request-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">Farruh Soipov</div>
                                <div className="col-2">+$2 109.09</div>
                                <div className="col-2">+2.000</div>
                                <div className="col-2">1 200 000</div>
                                <div className="col-2">11 00</div>
                                <div className="col-2">$23 600.09</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default SubmitPage
