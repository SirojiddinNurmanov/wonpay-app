import React, { memo } from "react"
import { useNavigate } from "react-router-dom"

const CircleButton = ({ icon, url = false, unreadNotifications = false }) => {
    const navigate = useNavigate()
    return (
        <div className="full-circle">
            <div onClick={() => navigate(url ? url : -1)} className={"circle-button " + (url ? "left" : "right")}>
                {unreadNotifications && (<div className="unread-number">{unreadNotifications.length}</div>)}
                <img src={icon} alt="Button icon" />
            </div>
        </div>
    )
}

export default memo(CircleButton)
