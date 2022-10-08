import React from "react"

const NotificationCard = ({ title, body, time, type = "offer", isRead = false }) => {
    return (
        <div className={"notification-card " + (isRead ? "read" : type)}>
            <div className="notification-title">{title}</div>
            <div className="notification-body">{body}</div>
            <div className="notification-time">{time}</div>
        </div>
    )
}

export default NotificationCard