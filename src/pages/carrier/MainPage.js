import React from "react"

import Layout from "../../layout"

import MenuCards from "../../components/menu/MenuCards"

const MainPage = () => {
    return (
        <Layout>
            {/* <div className="admin-header">
                <div className="col-4">W 38.000</div>
                <div className="col-4">$ 32.000</div>
                <div className="col-4">$ +16.000</div>
            </div> */}
            <MenuCards app="carrier" />                
        </Layout>
    )
}

export default MainPage
