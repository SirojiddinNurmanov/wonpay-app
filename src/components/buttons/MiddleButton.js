import React from "react"

const MiddleButton = ({ text, secondary, callback }) => {
    return (
        <div onClick={() => callback()} className={"middle-button " + (secondary && "secondary" )}>
            {text}
        </div>
    )
}

MiddleButton.defaultProps = {
    secondary: false
}

export default MiddleButton
