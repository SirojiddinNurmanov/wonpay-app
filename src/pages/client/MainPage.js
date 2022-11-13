import React, { memo, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getUser, getUserNotifications } from "../../store/actions"
import { formatAmount } from "../../helpers"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"

const MainPage = () => {
    const { balance } = useSelector(state => state.app.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
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
            <div className="balance">
                <span>Sizning Xisobingiz:</span>
                <span>{(balance === 0 ? "$" : balance < 0 ? "-$" : "+$") + (balance ? formatAmount(balance < 0 ? balance * -1 : balance) : 0)}</span>
            </div>
            <MenuCards app="client" />
            <div className="home-buttons">
                <Link to="/query">
                    <button className="money-btn">Uzb {">>"} Kor</button>
                </Link>
                <Link to="/offer">
                    <button className="money-btn yellow">Kor {">>"} Uzb</button>
                </Link>
            </div>
        </Layout>
    )
}

export default memo(MainPage)
