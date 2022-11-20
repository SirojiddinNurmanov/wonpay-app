import React, { memo, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getCarriers, getUserNotifications } from "../../store/actions"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"
import { formatAmount } from "../../helpers"

const MainPage = () => {
    const { user : { user : { balance }}, carriers} = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserNotifications())
        dispatch(getCarriers())
        let interval = localStorage.getItem('interval')
        clearInterval(interval)
        interval = setInterval(() => dispatch(getUserNotifications()), (1000 * 2))
        localStorage.setItem('interval', interval)

        // eslint-disable-next-line
    }, [])

    const headerData = {
        avatar: "/assets/img/icons/profile.png",
        balance: "$" + formatAmount(balance + (carriers?.map(carrier => carrier.balance).reduce((sum, carrierBalance) => sum + carrierBalance)) || 0) + ` ( $${formatAmount(balance)} )`,
    }    

    return (
        <Layout headerData={headerData}>
            <MenuCards app="admin" />
        </Layout>
    )
}

export default memo(MainPage)
