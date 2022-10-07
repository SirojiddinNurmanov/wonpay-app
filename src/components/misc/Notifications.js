import React, { Fragment, useState } from "react";

import { common } from "../../data/bottomButtons";
import { notifications } from "../../data/dummyData"

import Layout from "../layouts/Layout";

import SaleModal from "../modals/SaleModal";
import NotificationItem from "../notification/NotificationItem";

const Notifications = () => {
    const [modalShow, setModalShow] = useState(false);

    common.middleButtons = false

    return (
        <Layout buttons={common} title={{ text: "Xabarlar:" }}>
            <SaleModal show={modalShow} onHide={() => setModalShow(false)} />
            {notifications && notifications.map((notification, index) => (
                <Fragment key={index}>
                    <div className="notification-datetime">{notification.datetime}</div>
                    {notification.data && notification.data.map((message, index) => (
                        <NotificationItem key={index} {...message} />
                    ))}
                </Fragment>
            ))}
        </Layout>
    );
};

export default Notifications;
