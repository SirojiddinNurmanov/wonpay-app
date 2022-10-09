import React from "react"
import { Link } from "react-router-dom"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"

const MainPage = () => {
    return (
        <Layout>
            <div className="home-body">
                <div className="home-money">
                    <span>Sizning Xisobingiz:</span>
                    <span>$0.0</span>
                </div>
                <MenuCards app="client" />
            </div>
            <div className="home-buttons">
                <Link to="/query">
                    <button className="money-btn">Uzb {">>"} Kor</button>
                </Link>
                <Link to="/offer">
                    <button className="money-btn yellow">Kor {">>"} Uzb</button>
                </Link>
            </div>
        </Layout>
    )
}

export default MainPage
