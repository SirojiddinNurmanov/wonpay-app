import React, { memo } from "react"

const NotificationCard = ({ callback, title, created_at, status = false }) => {
    let hours = (new Date(created_at)).getHours() 
        hours = hours < 10 ? "0" + hours : hours
    let minutes = (new Date(created_at)).getMinutes()
        minutes = minutes < 10 ? "0" + minutes : minutes
    return (
        <div className={"notification-card " + (status === 1 ? "read" : "offer")} onClick={callback}>
            <div className="notification-title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="notification-body" dangerouslySetInnerHTML={{ __html: "..." }} />
            <div className="notification-time" dangerouslySetInnerHTML={{ __html: hours + ":" + minutes }} />
        </div>
    )
}

export default memo(NotificationCard)