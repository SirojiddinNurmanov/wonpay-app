import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { common } from "../../constants/bottomButtons";
import { formatAmount, groupByDate } from "../../helpers";
import { getQueries, getTransactions, getUserProcesses } from "../../store/actions";

import Layout from "../../layout";

import NoData from "../../components/common/NoData";
import WhiteLine from "../../components/common/WhiteLine";
import HistoryCard from "../../components/cards/TransactionCard";
import MoneyFlowCard from "../../components/cards/MoneyFlowCard";
import GiveMoneyModal from "../../components/modals/client/GiveMoneyModal";
import TransactionInfoModal from "../../components/modals/common/TransactionInfoModal";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const [isHistoryTabActive, setHistoryTabActive] = useState(true);
    const [isTransactionTabActive, setTransactionTabActive] = useState(false);
    const [giveMoneyModal, showGiveMoneyModal] = useState(false);
    const [givenMoneyModal, showGivenMoneyModal] = useState(false);
    const [modalInfo, setModalInfo] = useState();
    const { transactions, processes, user: { user } } = useSelector(state => state.app);

    let groupedProcesses = groupByDate(processes) ?? [];
    let groupedTransactions = groupByDate(transactions) ?? [];


    useEffect(() => {
        dispatch(getUserProcesses());
        dispatch(getQueries());
        dispatch(getTransactions());
        //eslint-disable-next-line
    }, []);

    common.middleButtons = [{
        text: "Pul Berish", eventHandler: () => {
            showGiveMoneyModal(true);
        }
    }];

    const openGivenMoneyModal = (transaction) => (e) => {
        showGivenMoneyModal(true);
        setModalInfo(transaction);
    };

    const setActive = (tab) => {
        if (tab === "history") {
            setHistoryTabActive(true);
            setTransactionTabActive(false);
        } else {
            setHistoryTabActive(false);
            setTransactionTabActive(true);
        }
    };

    return (<Layout buttons={common}>
        <GiveMoneyModal show={giveMoneyModal} onHide={() => showGiveMoneyModal(false)} />
        <TransactionInfoModal show={givenMoneyModal} onHide={() => showGivenMoneyModal(false)} {...modalInfo} />
        {user && (<>
            <div className="client-profile-block">
                <div className="avatar-block">
                    <img className="profile-image" src={user?.avatar ?? "/assets/img/icons/profile.png"} alt="Avatar" />
                </div>
                <div className="profile-details-block">
                    <div className="details-item profile-name">
                        {(user.first_name ?? "") + " " + (user.last_name ?? "")}
                    </div>
                    <div className="details-item profile-balance">
                        {(user.balance === 0 ? "$" : user.balance < 0 ? "-$" : "+$") + (user.balance ? formatAmount(user.balance < 0 ? user.balance * -1 : user.balance, true, true) : 0)}
                    </div>
                </div>
                <div className="profile-actions-block"></div>
            </div>
            <WhiteLine />
            <div className="profile-navigation-tabs">
                <div className={"navigation-tab" + (isHistoryTabActive ? " active" : "")}
                     onClick={() => setActive("history")}>
                    O'tkazmalar Tarixi
                </div>
                <div className="separator">|</div>
                <div className={"navigation-tab" + (isTransactionTabActive ? " active" : "")}
                     onClick={() => setActive("transaction")}>
                    Oldi-Berdilar
                </div>
            </div>
            <div className="profile-content">
                {isHistoryTabActive && (
                    Object.keys(groupedProcesses).length > 0 ? Object.entries(groupedProcesses).map(transactionGroup => (
                        <div key={transactionGroup[0]}>
                            <br />
                            <div className="notification-date text-center">{transactionGroup[0]}</div>
                            {transactionGroup[1].map(transaction => (
                                <Link key={transaction.id}
                                      to={(transaction.process_type === 1 ? "/offers" : "/queries") + "/" + transaction.id}>
                                    <HistoryCard {...transaction} />
                                </Link>
                            ))}
                        </div>
                    )) : (
                        <NoData />
                    )
                )}
                {isTransactionTabActive && (
                    Object.keys(groupedTransactions).length > 0 ? Object.entries(groupedTransactions).map(transactionGroup => (
                        <div key={transactionGroup[0]}>
                            <br />
                            <div className="notification-date text-center">{transactionGroup[0]}</div>
                            {transactionGroup[1].map(transaction => (
                                <div onClick={openGivenMoneyModal(transaction)} key={transaction.id}>
                                    <MoneyFlowCard key={transaction.id} {...transaction} />
                                </div>
                            ))}
                        </div>
                    )) : (
                        <NoData />
                    )
                )}
            </div>
        </>)}
    </Layout>);
};

export default memo(ProfilePage);