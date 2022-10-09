import React, { Fragment, useState } from "react"

import { common } from "../../constants/bottomButtons"
import { notifications } from "../../constants/dummyData"

import Layout from "../../layout"

import NotificationDetailsModal from "../../components/modals/client/NotificationDetailsModal"
import NotificationCard from "../../components/cards/NotificationCard"

const NotificationsPage = () => {
    const [modalShow, setModalShow] = useState(false)

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Xabarlar:" }}>
            <NotificationDetailsModal show={modalShow} onHide={() => setModalShow(false)} />
            {notifications && notifications.map((notification, index) => (
                <Fragment key={index}>
                    <div className="notification-datetime">{notification.datetime}</div>
                    {notification.data && notification.data.map((message, index) => (
                        <NotificationCard key={index} {...message} />
                    ))}
                </Fragment>
            ))}
        </Layout>
    )
}

export default NotificationsPage
