import React, { memo, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { getCarriers, getUser, getUserNotifications } from "../../store/actions"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"

const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
        dispatch(getUserNotifications())
        dispatch(getCarriers())
        let interval = localStorage.getItem('interval')
        clearInterval(interval)
        interval = setInterval(() => dispatch(getUserNotifications()), (1000 * 2))
        localStorage.setItem('interval', interval)

        // eslint-disable-next-line
    }, [])

    return (
        <Layout>
            <MenuCards app="admin" />
        </Layout>
    )
}

export default memo(MainPage)
