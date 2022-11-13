import React, { memo, useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getUserNotifications } from "../../store/actions"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"
import { formatAmount } from "../../helpers"

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
        balance: (balance === 0 ? "$" : balance < 0 ? "-$" : "+$") + (balance ? formatAmount(balance < 0 ? balance * -1 : balance) : 0),
    }    

    return (
        <Layout headerData={headerData}>
            <MenuCards app="admin" />
        </Layout>
    )
}

export default memo(MainPage)
