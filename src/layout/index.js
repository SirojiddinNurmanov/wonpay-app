import React, { memo } from "react"

import BottomNavigation from "../components/common/BottomNavigation"
import Header from "../components/common/Header"
import Title from "../components/common/Title"

const Layout = ({ children, buttons, headerData = false, title = false }) => {
    if (!headerData) {
        headerData = {
            avatar: "/assets/img/icons/profile.png",
            toAmount: "",
            balance: "",
            fromAmount: ""
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
    )
}

export default memo(Layout)
