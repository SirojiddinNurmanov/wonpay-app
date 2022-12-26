import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAllUsers, getUser, getUserNotifications } from "../../store/actions";

import Layout from "../../layout";

const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
        dispatch(getAllUsers());
        dispatch(getUserNotifications());
        let interval = localStorage.getItem("interval");
        clearInterval(interval);
        interval = setInterval(() => dispatch(getUserNotifications()), (1000 * 2));
        localStorage.setItem("interval", interval);

        // eslint-disable-next-line
    }, []);

    const common = {
        leftButton : {
            icon: "/assets/img/icons/user.png",
            url: "/profile"
        },
    };

    return (
        <Layout buttons={common}>
            <div className="main-page-client">
                <div className="home-buttons">
                    <Link to="/query">
                        <button className="money-btn">Uzb {">>"} Kor</button>
                    </Link>
                    <Link to="/offer">
                        <button className="money-btn yellow">Kor {">>"} Uzb</button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default memo(MainPage);
