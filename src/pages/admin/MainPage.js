import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getUserNotifications } from "../../store/actions"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"

const MainPage = () => {
    const notifications = useSelector(state => state.app.notifications)
    const loading = useSelector(state => state.app.loading)
    const user = useSelector(state => state.app.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserNotifications())
        // eslint-disable-next-line
    }, [])

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
