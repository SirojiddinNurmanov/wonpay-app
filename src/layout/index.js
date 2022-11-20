import React, { memo } from "react"
import { useSelector } from "react-redux"

import BottomNavigation from "../components/common/BottomNavigation"
import Header from "../components/common/Header"
import Title from "../components/common/Title"
import { formatAmount } from "../helpers"

const Layout = ({ children, buttons, title = false, empty = false }) => {
    const { user : { user : { balance, role }}, carriers} = useSelector(state => state.app)


    let balanceText = "$0"
    if (role === 'client') {
        balanceText = (balance === 0 ? "$" : balance < 0 ? "-$" : "+$") + (balance ? formatAmount(balance < 0 ? balance * -1 : balance) : 0)
    } else if (role === 'admin' || role === 'superadmin') {
        balanceText = "$" + formatAmount(balance + (carriers?.map(carrier => carrier.balance).reduce((sum, carrierBalance) => sum + carrierBalance)) || 0) + ` ( $${formatAmount(balance)} )`
    } else if (role === 'carrier') {
        balanceText = "$" + formatAmount(balance)
    }

    const headerData = {
        avatar: "/assets/img/icons/profile.png",
        balance: balanceText,
    }  

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
        </div >
    )
}

export default memo(Layout)
