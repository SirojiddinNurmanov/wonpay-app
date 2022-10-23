import React, { memo } from "react"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"

const MainPage = () => {
    return (
        <Layout>
            <MenuCards app="carrier" />
        </Layout>
    )
}

export default memo(MainPage)
