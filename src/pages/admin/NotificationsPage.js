import React, { memo, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { common } from "../../constants/bottomButtons"
import { getUserNotifications, setNotificationAsRead } from "../../store/actions"

import Layout from "../../layout"

import NotificationDetailsModal from "../../components/modals/client/NotificationDetailsModal"
import NotificationCard from "../../components/cards/NotificationCard"

const NotificationsPage = () => {
    const [modalInfo, setModalInfo] = useState(false)
    const [detailsModal, showDetailsModal] = useState(false)
    const { notifications } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserNotifications())
        //eslint-disable-next-line
    }, [])

    const readModal = (notification) => () => {
        if (notification.status === 0 && notification.type === 0) {
            dispatch(setNotificationAsRead(notification.id))
        }
        setModalInfo(notification)
        showDetailsModal(true)
    }

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Xabarlar:" }}>
            <NotificationDetailsModal show={detailsModal} onHide={() => showDetailsModal(false)} {...modalInfo} />
            {notifications && notifications.map(notification => (
                <Link to={""} key={notification.id}>
                    <NotificationCard callback={readModal(notification)} {...notification} />
                </Link>
            ))}
            <div className="spacer"></div>
        </Layout>
    )
}

export default memo(NotificationsPage)
