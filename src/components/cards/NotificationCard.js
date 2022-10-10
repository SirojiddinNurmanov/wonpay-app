import React from "react"

const NotificationCard = ({ callback, title, body, time, type = "offer", isRead = false }) => {
    return (
        <div className={"notification-card " + (isRead ? "read" : type)} onClick={callback}>
            <div dangerouslySetInnerHTML={{ __html: title }} className="notification-title" />
            <div className="notification-body" dangerouslySetInnerHTML={{ __html: body }} />
            <div className="notification-time" dangerouslySetInnerHTML={{ __html: time }} />
        </div>
    )
}

export default NotificationCard