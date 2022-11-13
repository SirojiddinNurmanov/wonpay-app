import React, { memo } from "react"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

const SubmitPage = () => {
    common.middleButtons = [
        {
            text: "Bekor Qilish",
            callback: () => {
                // console.log("");
            },
            secondary: true
        },
        {
            text: "Berdim",
            callback: () => {
                // console.log("");
            }
        }
    ]

    return (
        <Layout buttons={common}>

        </Layout>
    )
}

export default memo(SubmitPage)
