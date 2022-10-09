import React, { Fragment } from "react"
import CircleButton from "../buttons/CircleButton"
import MiddleButton from "../buttons/MiddleButton"

const BottomNavigation = ({ leftButton = false, rightButton = false, middleButtons = false }) => {
    return (
        <Fragment>
            <div className="bottom-navigation">
                {leftButton && <CircleButton {...leftButton} />}
                <div className="middle-buttons">
                    {middleButtons && middleButtons.map((button, index) => (
                        <MiddleButton key={index} {...button} />
                    ))}
                </div>
                {rightButton && <CircleButton {...rightButton} />}
            </div>
        </Fragment>
    )
}

export default BottomNavigation
