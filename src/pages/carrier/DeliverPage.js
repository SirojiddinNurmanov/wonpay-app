import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProcesses } from "../../store/actions";
import { common } from "../../constants/bottomButtons";
import { formatAmount } from "../../helpers";

import Layout from "../../layout";

import GiveMoneyModal from "../../components/modals/carrier/GiveMoneyModal";
import MoneyCard from "../../components/cards/MoneyCard";
import NoData from "../../components/common/NoData";

const DeliverPage = () => {
    const [modalInfo, setModalInfo] = useState(false);
    const [moneyModal, showMoneyModal] = useState(false);
    const { allProcesses, user: { user } } = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProcesses());
        // eslint-disable-next-line
    }, []);

    const handleCardClick = (process) => {
        if (process.carrier_status === 0) {
            showMoneyModal(true);
            setModalInfo(process);
        }
    };

    common.middleButtons = false;

    let amountText = "$0";

    if (allProcesses.length > 0) {
        let filtered = allProcesses?.filter(process => (process.process_type === 1) && (process.carrier_id === user.id) && (process.status === 1));
        if (filtered.length > 0) {
            let mapped = filtered.map(process => (process.assigned_queries.length > 0 ? process.assigned_queries.map(query => query.amount).reduce((sum, amount) => sum + amount) : process.amount) / process.buy_rate);
            if (mapped.length > 0) {
                let reduced = mapped.reduce((sum, amount) => sum + amount);
                amountText = "$" + formatAmount(reduced, true, true);
            }
        }
    }

    let carrierProcesses = allProcesses && allProcesses?.length > 0 ? allProcesses.filter(process => (process.process_type === 1) && (process.carrier_id === user.id) && (process.status === 1)) : [];

    return (
        <Layout buttons={common} title={{ text: "Pul Berish:", amount: amountText }}>
            <GiveMoneyModal show={moneyModal} onHide={() => showMoneyModal(false)} {...modalInfo} />
            <div className="carrier-body">
                {carrierProcesses.length > 0 ? carrierProcesses?.map(process => (
                    <MoneyCard key={process.id}  {...process} onClick={() => handleCardClick(process)} />
                )) : (
                    <NoData />
                )}
            </div>
        </Layout>
    );
};

export default memo(DeliverPage);
