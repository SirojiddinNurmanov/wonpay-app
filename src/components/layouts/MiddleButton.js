import React from "react";

const MiddleButton = ({ text, callback }) => {
    return (
        <div onClick={() => callback()} className="middle-button">
            {text}
        </div>
    );
};

export default MiddleButton;
