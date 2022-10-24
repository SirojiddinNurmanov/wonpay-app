import React, { memo } from "react"

const NotificationCard = ({ callback, title, body, time, type = "offer", status = false }) => {
    return (
        <div className={"notification-card " + (status === 1 ? "read" : "offer")} onClick={callback}>
            <div dangerouslySetInnerHTML={{ __html: title }} className="notification-title" />
            <div className="notification-body" dangerouslySetInnerHTML={{ __html: "..." }} />
            <div className="notification-time" dangerouslySetInnerHTML={{ __html: time }} />
        </div>
    )
}

export default memo(NotificationCard)