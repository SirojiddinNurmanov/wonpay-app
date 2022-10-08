import React from "react";
import { useNavigate } from "react-router-dom";

const CircleButton = ({ icon, url = false }) => {
    const navigate = useNavigate();
    return (
        <div className="full-circle">
            <div onClick={() => navigate(url ? url : -1)} className={"circle-button " + (url ? "left" : "right")}>
                <img src={icon} alt="Button icon" />
            </div>
        </div>
    );
};

export default CircleButton;
