import React, { useState, useEffect, useContext } from "react";

import { common } from "../../data/bottomButtons";
import { APIContext } from "../../context";

import Layout from "../layouts/Layout";
import Title from "../common/Title";


const NaverCourse = () => {
    const { BACKEND_URL } = useContext(APIContext)
    const [buyRate, setBuyRate] = useState()
    const [sellRate, setSellRate] = useState()

    const getExchangeRate = async () => {
        const res = await fetch(`${BACKEND_URL}/exchangerate-naver`)

        const data = await res.json()
        if (data.success) {
            setBuyRate(data.data['buy'])
            setSellRate(data.data['sell'])
        }
    }

    common.middleButtons = false;

    useEffect(() => {
        getExchangeRate()
    });

    return (
        <Layout buttons={common} >
            <div className="change-course">
                <Title text="Naver Valyuta kurslari:" />
                <div className="chc-body">
                    <div className="chc-body-item">
                        <div className="chc-body-item-title">
                            <h4>Sotib olish:</h4>
                            <span>$1 = ₩ {buyRate}</span>
                        </div>
                        <div className="chc-body-item-body">
                            <img src="assets/img/table/table.png" alt="table" />
                        </div>
                    </div>
                    <div className="chc-body-item">
                        <div className="chc-body-item-title">
                            <h4>Sotish:</h4>
                            <span>$1 = ₩ {sellRate}</span>
                        </div>
                        <div className="chc-body-item-body">
                            <img src="assets/img/table/table.png" alt="table" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NaverCourse;
