import React, { memo, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getUserNotifications } from "../../store/actions"
import { formatAmount } from "../../helpers"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"

const MainPage = () => {
    const { debit, balance, credit } = useSelector(state => state.app.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        let interval = localStorage.getItem('interval')
        clearInterval(interval)
        interval = setInterval(() => dispatch(getUserNotifications()), (1000 * 2))
        localStorage.setItem('interval', interval)

        // eslint-disable-next-line
    }, [])


    return (
        <Layout>
            <div className="home-body">
                <div className="home-money">
                    <span>Sizning Xisobingiz:</span>
                    <span>{"￦" + formatAmount(debit + balance - credit)}</span>
                </div>
                <MenuCards app="client" />
            </div>
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
