import React, { memo, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { common } from "../../constants/bottomButtons"
import { getUserNotifications, setNotificationAsRead } from "../../store/actions"

import Layout from "../../layout"

import NotificationDetailsModal from "../../components/modals/client/NotificationDetailsModal"
import NotificationCard from "../../components/cards/NotificationCard"

const NotificationsPage = () => {
    const [modalInfo, setModalInfo] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const { notifications } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserNotifications())
        //eslint-disable-next-line
    }, [])

    const readModal = (notification) => () => {
        if (notification.status === 0) {
            dispatch(setNotificationAsRead(notification.id))
        }
        setModalInfo(notification)
        setModalShow(true)
    }

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Xabarlar:" }}>
            <NotificationDetailsModal show={modalShow} onHide={() => setModalShow(false)} {...modalInfo} />
            {notifications && notifications.map(notification => (
                <NotificationCard key={notification.id} callback={readModal(notification)} {...notification} />
            ))}
            <div className="spacer"></div>
        </Layout>
    )
}

export default memo(NotificationsPage)
