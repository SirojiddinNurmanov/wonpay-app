import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";

import { formatAmount } from "../../helpers";
import { getCarriers } from "../../store/actions";
import { common } from "../../constants/bottomButtons";

import Layout from "../../layout";

import NoData from "../../components/common/NoData";
import CarrierCard from "../../components/cards/CarrierCard";
import UsersModal from "../../components/modals/admin/UsersModal";

const CarriersPage = () => {
    const [usersModal, showUsersModal] = useState(false);
    const [loader, showLoader] = useState(true);
    const { carriers } = useSelector(state => state.app);
    const dispatch = useDispatch();

    common.middleButtons = [
        {
            text: "Kuryer Qo'shish",
            eventHandler: () => showUsersModal(true)
        }
    ];

    useEffect(() => {
        dispatch(getCarriers());
        showLoader(false);
        // eslint-disable-next-line
    }, []);

    return (
        <Layout buttons={common} title={{ text: "Kuryerlar", amount: formatAmount(carriers ? carriers.length : 0) }}>
            <UsersModal
                show={usersModal}
                onHide={() => showUsersModal(false)}
            />
            {loader && (
                <div className="center">
                    <Spinner animation="border" role="status" size="lg">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {carriers?.length > 0 ? carriers.map((carrier, index) => (
                <Link to={"/profile/" + carrier.id} key={index}>
                    <CarrierCard {...carrier} />
                </Link>
            )) : (<NoData />)}
        </Layout>
    );
};

export default memo(CarriersPage);
