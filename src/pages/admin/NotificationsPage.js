import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { common } from "../../constants/bottomButtons"
import { notifications } from "../../constants/dummyData"

import Layout from "../../layout"

import NotificationCard from "../../components/cards/NotificationCard"
import NotificationModal from "../../components/modals/admin/NotificationModal"

const NotificationsPage = () => {
    const [modalShow, setModalShow] = useState(false)
    // const { notifications } = useSelector(state => state.app)
    const dispatch = useDispatch()

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Xabarlar:" }}>
            <NotificationModal show={modalShow} onHide={() => setModalShow(false)} />
            {notifications && notifications.map((notification, index) => (
                <Fragment key={index}>
                    <div className="notification-datetime">{notification.datetime}</div>
                    {notification.data && notification.data.map((message, index) => (
                        <NotificationCard callback={() => setModalShow(true)} key={index} {...message} />
                    ))}
                </Fragment>
            ))}
        </Layout>
    )
}

export default NotificationsPage
