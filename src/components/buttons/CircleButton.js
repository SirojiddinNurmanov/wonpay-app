import React from "react"
import { memo } from "react"
import { useNavigate } from "react-router-dom"

const CircleButton = ({ icon, url = false, unread = false }) => {
    const navigate = useNavigate()
    return (
        <div className="full-circle">
            <div onClick={() => navigate(url ? url : -1)} className={"circle-button " + (url ? "left" : "right")}>
                {unread && (<div className="unread-number">{unread}</div>)}
                <img src={icon} alt="Button icon" />
            </div>
        </div>
    )
}

export default memo(CircleButton)
