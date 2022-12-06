import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProcesses } from "../../store/actions";
import { common } from "../../constants/bottomButtons";
import { formatAmount } from "../../helpers";

import Layout from "../../layout";

import TakeMoneyModal from "../../components/modals/carrier/TakeMoneyModal";
import MoneyCard from "../../components/cards/MoneyCard";
import NoData from "../../components/common/NoData";

const ReceivePage = () => {
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
        let filtered = allProcesses?.filter(process => (process.process_type === 0) && (process.carrier_id === user.id) && (process.status === 1));
        if (filtered.length > 0) {
            let mapped = filtered.map(process => process.amount / process.exchange_rate);
            if (mapped.length > 0) {
                let reduced = mapped.reduce((sum, amount) => sum + amount);
                amountText = "$" + formatAmount(reduced, true, true);
            }
        }
    }

    let carrierProcesses = allProcesses && allProcesses?.length > 0 ? allProcesses.filter(process => (process.process_type === 0) && (process.carrier_id === user.id) && (process.status === 1)) : [];

    return (
        <Layout buttons={common} title={{ text: "Pul Olish:", amount: amountText }}>
            <TakeMoneyModal show={moneyModal} onHide={() => showMoneyModal(false)} {...modalInfo} />
            <div className="carrier-body">
                {carrierProcesses.length > 0 ? carrierProcesses?.map(process => (
                    <MoneyCard onClick={() => handleCardClick(process)} key={process.id}  {...process} />
                )) : (
                    <NoData />
                )}
            </div>
        </Layout>
    );
};

export default memo(ReceivePage);
