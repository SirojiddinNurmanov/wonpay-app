import React, { memo, useState, useEffect } from "react"
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
