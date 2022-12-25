import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUser, getUserNotifications } from "../../store/actions";

import Layout from "../../layout";

import MenuCards from "../../components/cards/MenuCards";
import { formatAmount } from "../../helpers";

const MainPage = () => {
    const dispatch = useDispatch();
    const { balance } = useSelector(state => state.app.user.user);

    useEffect(() => {
        dispatch(getUser());
        dispatch(getUserNotifications());
        let interval = localStorage.getItem("interval");
        clearInterval(interval);
        interval = setInterval(() => dispatch(getUserNotifications()), (1000 * 2));
        localStorage.setItem("interval", interval);

        // eslint-disable-next-line
    }, []);

    return (
        <Layout>
            <div className="balance">
                <span>Sizning Xisobingiz:</span>
                <span>{(balance === 0 ? "$" : balance < 0 ? "-$" : "+$") + (balance ? formatAmount(balance < 0 ? balance * -1 : balance, true, true) : 0)}</span>
            </div>
            <MenuCards app="carrier" />
        </Layout>
    );
};

export default memo(MainPage);
