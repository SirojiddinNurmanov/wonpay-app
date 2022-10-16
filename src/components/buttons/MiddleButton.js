import React from "react"

const MiddleButton = ({ text, disabled = false, secondary = false, callback = false }) => {

    const clickHandler = () => {
        if (!disabled) {
            if (callback) {
                callback()
            }
        }
    }

    return (
        <div onClick={clickHandler} className={"middle-button" + (secondary ? " secondary" : "" ) + (disabled ? " disabled" : "")}>
            {text}
        </div>
    )
}

MiddleButton.defaultProps = {
    secondary: false
}

export default MiddleButton
