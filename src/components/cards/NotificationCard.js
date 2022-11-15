import React, { memo } from "react"

const NotificationCard = ({ callback, title, created_at, status = false }) => {
    return (
        <div className={"notification-card " + (status === 1 ? "read" : "offer")} onClick={callback}>
            <div className="notification-title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="notification-body" dangerouslySetInnerHTML={{ __html: "..." }} />
            <div className="notification-time" dangerouslySetInnerHTML={{ __html: (new Date(created_at)).getHours() + ":" + (new Date(created_at)).getMinutes() }} />
        </div>
    )
}

export default memo(NotificationCard)