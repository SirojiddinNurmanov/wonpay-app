import React, { useState } from "react";

import { common } from "../../data/bottomButtons";

import Layout from "../layouts/Layout";

import SaleModal from "../modals/SaleModal";
import Title from "../common/Title";
import NotificationItem from "../notification/NotificationItem";

const Notifications = () => {
    const [modalShow, setModalShow] = useState(false);

    const notifications = [
        {
            title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
            body: "$1 = ￦1 450",
            time: "10:25",
            type: "query",
            isRead: false
        },
        {
            title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
            body: "$1 = ￦1 450",
            time: "10:25",
            type: "query",
            isRead: false
        },
        {
            title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
            body: "$1 = ￦1 450",
            time: "10:25",
            type: "offer",
            isRead: false
        },
        {
            title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis vel cupiditate illo molestias temporibus enim officiis unde corrupti, necessitatibus esse expedita dolorem eligendi debitis laboriosam.",
            time: "10:25",
            type: "offer",
            isRead: false
        },
        {
            title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
            body: "$1 = ￦1 450",
            time: "10:25",
            type: "offer",
            isRead: true
        },
    ]

    common.middleButtons = false

    return (
        <Layout buttons={common}>
            <SaleModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="profile-page">
                <Title text="Xabarlar:" />
                <div className="history">
                    <div className="history-cart">
                        <span className="show-time">25.08.2022</span>
                        {notifications && notifications.map((notification, index) => (
                            <NotificationItem key={index} {...notification} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Notifications;
