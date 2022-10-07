import React, { Fragment } from "react";
import BottomNavigation from "./BottomNavigation";

const Layout = ({ children, buttons }) => {
    return (
        <Fragment>
            {children}
            <BottomNavigation {...buttons} />
        </Fragment>
    );
};

export default Layout;
