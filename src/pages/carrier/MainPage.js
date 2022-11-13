import React, { memo, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { getUserNotifications } from "../../store/actions"
import { formatAmount } from "../../helpers"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"

const MainPage = () => {
    const { balance } = useSelector(state => state.app.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserNotifications())
        let interval = localStorage.getItem('interval')
        clearInterval(interval)
        interval = setInterval(() => dispatch(getUserNotifications()), (1000 * 2))
        localStorage.setItem('interval', interval)

        // eslint-disable-next-line
    }, [])

    const headerData = {
        avatar: "/assets/img/icons/profile.png",
        balance: "$" + formatAmount(balance),
    }

    return (
        <Layout headerData={headerData}>
            <MenuCards app="carrier" />
        </Layout>
    )
}

export default memo(MainPage)
