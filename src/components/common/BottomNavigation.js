import React, { memo, Fragment } from "react";
import { useSelector } from "react-redux";

import CircleButton from "../buttons/CircleButton";
import MiddleButton from "../buttons/MiddleButton";

const BottomNavigation = ({ leftButton = false, rightButton = false, middleButtons = false, main }) => {
    const { unreadNotifications } = useSelector(state => state.app);

    return (
        <Fragment>
            <div className="bottom-navigation">
                {unreadNotifications.length > 0 ? <CircleButton icon="/assets/img/icons/signal.png" url="/notifications"
                                                                unreadNotifications={unreadNotifications} /> : leftButton && !main &&
                    <CircleButton {...leftButton} />}
                <div className="middle-buttons">
                    {middleButtons && middleButtons.map((button, index) => (
                        <MiddleButton key={index} {...button} />
                    ))}
                </div>
                {rightButton && !main && <CircleButton {...rightButton} />}
            </div>
        </Fragment>
    );
};

export default memo(BottomNavigation);
