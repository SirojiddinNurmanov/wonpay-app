import React, { Fragment } from "react"
import CircleButton from "../buttons/CircleButton"
import MiddleButton from "../buttons/MiddleButton"
import { useSelector, useDispatch } from 'react-redux'


const BottomNavigation = ({ leftButton = false, rightButton = false, middleButtons = false }) => {
    const { unread } = useSelector(state => state.app.notifications)

    return (
        <Fragment>
            <div className="bottom-navigation">
                {unread ? <CircleButton icon="/assets/img/icons/signal.png" url="/notifications" unread={unread}/> : leftButton && <CircleButton {...leftButton} />}
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
