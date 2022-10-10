import React from "react"

const MiddleButton = ({ text, disabled, secondary, callback }) => {
    return (
        <div onClick={() => { disabled ? console.log("Disabled") : callback() }} className={"middle-button " + (secondary ? "secondary" : "" ) + (disabled ? "disabled" : "")}>
            {text}
        </div>
    )
}

MiddleButton.defaultProps = {
    secondary: false
}

export default MiddleButton
