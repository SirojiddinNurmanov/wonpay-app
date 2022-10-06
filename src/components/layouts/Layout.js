import React, { Fragment, useState } from "react";
import BottomNavigation from "./BottomNavigation";

const Layout = ({ children, buttons }) => {
    const [allButtons, setAllButtons] = useState(buttons)
    return (
        <Fragment>
            {children}
            <BottomNavigation {...allButtons} />
        </Fragment>
    );
};

export default Layout;
