import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getUserNotifications } from "../../store/actions"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"

const MainPage = () => {
    const { notifications, user, loading } = useSelector(state => state.app)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     // setInterval(() => {
    //     //     dispatch(getUserNotifications())
    //     // }, 2000)
    //     // eslint-disable-next-line
    // }, [])

    const [avatar] = useState("/assets/img/icons/profile.png")
    const [toAmount] = useState("-$5 800")
    const [balance] = useState("$23 600")
    const [fromAmount] = useState("+$3 200")

    return (
        <Layout headerData={{ avatar, toAmount, balance, fromAmount }}>
            <MenuCards app="admin" />
        </Layout>
    )
}

export default MainPage
