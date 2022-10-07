import React from "react";

import BottomNavigation from "./BottomNavigation";
import Header from "../common/Header";
import Title from "../common/Title";

const Layout = ({ children, buttons, headerData = false, title = false }) => {
    if (!headerData) {
        headerData = {
            avatar: "/assets/img/icons/profile.png",
            toAmount: "-$5 800",
            balance: "$23 600",
            fromAmount: "+$3 200"
        }
    }

    return (
        <div className="wrapper">
            <Header {...headerData} />
            {title && (
                <Title {...title} />
            )}
            <div className="content">
                {children}
            </div>
            <BottomNavigation {...buttons} />
        </div >
    );
};

export default Layout;
