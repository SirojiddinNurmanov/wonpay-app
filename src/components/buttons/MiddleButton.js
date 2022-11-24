import React, { memo } from "react"

const MiddleButton = ({ text, disabled = false, secondary = false, eventHandler = false }) => {

    const clickHandler = () => {
        if (!disabled) {
            if (eventHandler) {
                eventHandler()
            }
        }
    }

    return (
        <div onClick={clickHandler} className={"middle-button" + (secondary ? " secondary" : "") + (disabled ? " disabled" : "")}>
            {text}
        </div>
    )
}

MiddleButton.defaultProps = {
    secondary: false
}

export default memo(MiddleButton)
