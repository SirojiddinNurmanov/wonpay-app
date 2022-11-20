import React, { memo, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getAllUsers, getUser, getUserNotifications } from "../../store/actions"
import { formatAmount } from "../../helpers"

import Layout from "../../layout"

import MenuCards from "../../components/cards/MenuCards"
import GiveMoneyModal from "../../components/modals/client/GiveMoneyModal"
import WhiteLine from '../../components/common/WhiteLine'

const MainPage = () => {
    const [giveMoneyModal, showGiveMoneyModal] = useState(false)
    const { balance } = useSelector(state => state.app.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
        dispatch(getAllUsers())
        dispatch(getUserNotifications())
        let interval = localStorage.getItem('interval')
        clearInterval(interval)
        interval = setInterval(() => dispatch(getUserNotifications()), (1000 * 2))
        localStorage.setItem('interval', interval)

        // eslint-disable-next-line
    }, [])

    return (
        <Layout>
            <GiveMoneyModal show={giveMoneyModal} onHide={() => showGiveMoneyModal(false)} />
            <div className="balance">
                <span>Sizning Xisobingiz:</span>
                <span>{(balance === 0 ? "$" : balance < 0 ? "-$" : "+$") + (balance ? formatAmount(balance < 0 ? balance * -1 : balance) : 0)}</span>
            </div>
            <MenuCards app="client" />
            <WhiteLine />
            <div className="home-buttons">
                <Link to="/query">
                    <button className="money-btn">Uzb {">>"} Kor</button>
                </Link>
                <Link to="/offer">
                    <button className="money-btn">Kor {">>"} Uzb</button>
                </Link>
                <button className="money-btn yellow open-modal-btn" onClick={() => showGiveMoneyModal(true)}>Pul Berish</button>
            </div>
        </Layout>
    )
}

export default memo(MainPage)
