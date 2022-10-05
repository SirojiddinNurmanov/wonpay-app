import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../layouts/Layout";

const UzbCourse = () => {
    const [buyRate, setBuyRate] = useState()
    const [sellRate, setSellRate] = useState()

    const getExchangeRate = async () => {
        const res = await fetch('https://wonpay.thesmart.uz/api/exchangerate/USD')

        const data = await res.json()
        if (data.success) {
            setBuyRate(data.data[0]['Rate'])
            setSellRate(data.data[0]['Rate'])
        }
        console.log(data)
    }

    useEffect(() => {
        getExchangeRate()
    }, []);

    return (
        <Layout>
            <div className="change-course">
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="chc-body">
                    <h3>O'zbekiston Valyuta kurslari:</h3>
                    <div className="chc-body-item">
                        <div className="chc-body-item-title">
                            <h4>Sotib olish:</h4>
                            <span>$1 = {buyRate} sum</span>
                        </div>
                        <div className="chc-body-item-body">
                            <img src="assets/img/table/table.png" alt="table" />
                        </div>
                    </div>
                    <div className="chc-body-item">
                        <div className="chc-body-item-title">
                            <h4>Sotish:</h4>
                            <span>$1 = {sellRate} sum</span>
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

export default UzbCourse;
