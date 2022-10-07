import React from "react";

import { common } from '../../data/bottomButtons'

import Layout from "../layouts/Layout";

const Reports = () => {

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "O'tkazmalar Tarixi:" }}>
            <div className="request-body-title">
                <div className="container">
                    <div className="row">
                        <div className="col-2">Ism</div>
                        <div className="col-2">Summa</div>
                        <div className="col-2">Info</div>
                        <div className="col-2">Proof</div>
                        <div className="col-2">Foyda</div>
                        <div className="col-2">Status</div>
                    </div>
                </div>
            </div>
            <div className="request-body-item">
                <div className="request-time">22.08.2022</div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Farruh Soipov</div>
                            <div className="col-2">2.000</div>
                            <div className="col-2">+$10</div>
                            <div className="col-2">$73.50</div>
                            <div className="col-2">-$500</div>
                            <div className="col-2">$65240</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Farruh Soipov</div>
                            <div className="col-2">2.000</div>
                            <div className="col-2">+$10</div>
                            <div className="col-2">$73.50</div>
                            <div className="col-2">-$500</div>
                            <div className="col-2">$65240</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Farruh Soipov</div>
                            <div className="col-2">2.000</div>
                            <div className="col-2">+$10</div>
                            <div className="col-2">$73.50</div>
                            <div className="col-2">-$500</div>
                            <div className="col-2">$65240</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Farruh Soipov</div>
                            <div className="col-2">2.000</div>
                            <div className="col-2">+$10</div>
                            <div className="col-2">$73.50</div>
                            <div className="col-2">-$500</div>
                            <div className="col-2">$65240</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="request-body-item">
                <div className="request-time">05.08.2022</div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Farruh Soipov</div>
                            <div className="col-2">2.000</div>
                            <div className="col-2">+$10</div>
                            <div className="col-2">$73.50</div>
                            <div className="col-2">-$500</div>
                            <div className="col-2">$65240</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Farruh Soipov</div>
                            <div className="col-2">2.000</div>
                            <div className="col-2">+$10</div>
                            <div className="col-2">$73.50</div>
                            <div className="col-2">-$500</div>
                            <div className="col-2">$65240</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Farruh Soipov</div>
                            <div className="col-2">2.000</div>
                            <div className="col-2">+$10</div>
                            <div className="col-2">$73.50</div>
                            <div className="col-2">-$500</div>
                            <div className="col-2">$65240</div>
                        </div>
                    </div>
                </div>
                <div className="request-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">Farruh Soipov</div>
                            <div className="col-2">2.000</div>
                            <div className="col-2">+$10</div>
                            <div className="col-2">$73.50</div>
                            <div className="col-2">-$500</div>
                            <div className="col-2">$65240</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Reports;
