import React, { memo } from "react";
import { useSelector } from "react-redux";

import BottomNavigation from "../components/common/BottomNavigation";
import Header from "../components/common/Header";
import Title from "../components/common/Title";
import { formatAmount } from "../helpers";

const Layout = ({ children, buttons, title = false, empty = false }) => {
    const { user, carriers } = useSelector(state => state.app);


    let balanceText = "$0";
    if (user?.user.role === "client") {
        balanceText = (user?.user.balance === 0 ? "$" : user?.user.balance < 0 ? "-$" : "+$") + (user?.user.balance ? formatAmount(user?.user.balance < 0 ? user?.user.balance * -1 : user?.user.balance, true, true) : 0);
    } else if (user?.user.role === "admin" || user?.user.role === "superadmin") {
        balanceText = "$" + formatAmount(user?.user.balance + (carriers?.length > 0 ? carriers?.map(carrier => carrier.balance).reduce((sum, carrierBalance) => sum + carrierBalance) : 0) || 0, true, true) + ` ( $${formatAmount(user?.user.balance)} )`;
    } else if (user?.user.role === "carrier") {
        balanceText = "$" + formatAmount(user?.user.balance, true, true);
    }

    const headerData = {
        avatar: "/assets/img/icons/profile.png",
        balance: balanceText
    };

    return (
        <div className="wrapper">
            {!empty && (
                <Header {...headerData} />
            )}
            {title && (
                <Title {...title} />
            )}
            <div className="content">
                {children}
            </div>
            {!empty && (
                <BottomNavigation {...buttons} />
            )}
        </div>
    );
};

export default memo(Layout);
