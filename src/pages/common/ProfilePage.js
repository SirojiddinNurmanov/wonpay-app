import React, { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

import { common } from "../../constants/bottomButtons"
import { getAllUsers, getClientProcesses } from "../../store/actions"
import { formatAmount } from '../../helpers'

import Layout from "../../layout"

import WhiteLine from '../../components/common/WhiteLine'
import TransactionCard from "../../components/cards/TransactionCard"
import NoData from "../../components/common/NoData"

const ProfilePage = () => {
    const { allUsers, clientProcesses } = useSelector(state => state.app)
    const { userId } = useParams()
    const user = allUsers?.find(user => user.id === parseInt(userId))
    const dispatch = useDispatch()

    common.middleButtons = false

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getClientProcesses(userId))
        // eslint-disable-next-line
    }, [])

    return (
        <Layout buttons={common}>
            {user && (
                <div className="profile-block">
                    <img className="profile-image" src={user?.avatar ?? "/assets/img/icons/profile.png"} alt="Avatar" />
                    <div className="profile-details">
                        <div className="profile-name">{user.first_name + (user.last_name ? " " + user.last_name : "")}</div>
                        <div className="profile-number">{user.phone_number}</div>
                        <div className="profile-balance">
                            {(user.balance < 0 ? "-$" : "+$") + (user.balance ? formatAmount(user.balance < 0 ? user.balance * -1 : user.balance) : 0)}
                        </div>
                    </div>
                </div>
            )}
            <WhiteLine />
            {clientProcesses ? clientProcesses.map(process => (
                <TransactionCard key={process.id} {...process} />
            )) : (
                <NoData />
            )}
        </Layout>
    )
}

export default memo(ProfilePage)