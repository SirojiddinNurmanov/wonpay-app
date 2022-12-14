import React, { memo, useState, useEffect } from "react";

import { BACKEND_URL } from "../../constants";
import { common } from "../../constants/bottomButtons";

import Layout from "../../layout";

const UZSRatePage = () => {
    const [buyRate, setBuyRate] = useState();
    const [sellRate, setSellRate] = useState();

    const getExchangeRate = async () => {
        const res = await fetch(`${BACKEND_URL}/exchangerate-nbu/USD`);

        const data = await res.json();
        if (data.success) {
            setBuyRate(data.data["buy"]);
            setSellRate(data.data["sell"]);
        }
    };

    common.middleButtons = false;

    useEffect(() => {
        getExchangeRate();
    }, []);

    return (
        <Layout buttons={common} title={{ text: "O'zbekiston Valyuta kurslari:" }}>
            <div className="chc-body-item">
                <div className="chc-body-item-title">
                    <h4>Sotib olish:</h4>
                    <span>$1 = {buyRate} sum</span>
                </div>
                <div className="chc-body-item-body">
                    <img src="/assets/img/table/table.png" alt="table" />
                </div>
            </div>
            <div className="chc-body-item">
                <div className="chc-body-item-title">
                    <h4>Sotish:</h4>
                    <span>$1 = {sellRate} sum</span>
                </div>
                <div className="chc-body-item-body">
                    <img src="/assets/img/table/table.png" alt="table" />
                </div>
            </div>
        </Layout>
    );
};

export default memo(UZSRatePage);
