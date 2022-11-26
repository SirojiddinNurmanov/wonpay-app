import React, { memo } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

const SubmitPage = () => {
    common.middleButtons = [
        {
            text: "Bekor Qilish",
            eventHandler: () => {
                // 
            },
            secondary: true
        },
        {
            text: "Berdim",
            eventHandler: () => {
                // 
            }
        }
    ]

    return (
        <Layout buttons={common}>

        </Layout>
    )
}

export default memo(SubmitPage)
