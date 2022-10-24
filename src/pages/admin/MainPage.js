import React, { memo, useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { getUserNotifications } from "../../store/actions"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"

const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        let interval = localStorage.getItem('interval')
        clearInterval(interval)
        interval = setInterval(() => dispatch(getUserNotifications()), (1000 * 2))
        localStorage.setItem('interval', interval)

        // eslint-disable-next-line
    }, [])

    const [avatar] = useState("/assets/img/icons/profile.png")
    const [toAmount] = useState("")
    const [balance] = useState("")
    const [fromAmount] = useState("")

    return (
        <Layout headerData={{ avatar, toAmount, balance, fromAmount }}>
            <MenuCards app="admin" />
        </Layout>
    )
}

export default memo(MainPage)
