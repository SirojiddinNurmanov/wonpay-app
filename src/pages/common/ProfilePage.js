import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { common } from "../../constants/bottomButtons";
import { getAllUsers, getClientProcesses, getUserTransactions } from "../../store/actions";
import { formatAmount } from "../../helpers";

import Layout from "../../layout";

import WhiteLine from "../../components/common/WhiteLine";
import TransactionCard from "../../components/cards/TransactionCard";
import TakeMoneyModal from "../../components/modals/admin/TakeMoneyModal";
import GiveMoneyModal from "../../components/modals/admin/GiveMoneyModal";
import BalanceSheetTable from "../../components/tables/carrier/BalanceSheetTable";
import ChangeClientDetailsModal from "../../components/modals/admin/ChangeClientDetailsModal";
import Role from "../../constants/statuses/Role";

const ProfilePage = () => {
    const { allUsers, clientProcesses, userTransactions } = useSelector(state => state.app);
    const [takeMoneyModal, showTakeMoneyModal] = useState(false);
    const [changeNameModal, showChangeNameModal] = useState(false);
    const [giveMoneyModal, showGiveMoneyModal] = useState(false);
    const { userId } = useParams();
    const { user: currentUser } = useSelector(state => state.app.user);
    const user = allUsers?.find(user => user.id === parseInt(userId));
    const dispatch = useDispatch();

    common.middleButtons = user?.role === Role.CARRIER ? [{
        text: "Pul Olish", eventHandler: () => showTakeMoneyModal(true), disabled: user.balance === 0
    }, {
        text: "Pul Berish", eventHandler: () => showGiveMoneyModal(true), disabled: currentUser.balance === 0
    }] : [{
        text: "Pul Berish", eventHandler: () => showGiveMoneyModal(true), disabled: currentUser.balance === 0
    }];

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getClientProcesses(userId));
        dispatch(getUserTransactions(userId));
        // eslint-disable-next-line
    }, []);

    return (<Layout buttons={common}>
        <TakeMoneyModal show={takeMoneyModal} onHide={() => showTakeMoneyModal(false)} user={user} />
        <GiveMoneyModal show={giveMoneyModal} onHide={() => showGiveMoneyModal(false)} user={user} />
        <ChangeClientDetailsModal show={changeNameModal} onHide={() => showChangeNameModal(false)} user={user} />
        {user && (<div className="profile-block">
            <img className="profile-image" src={user?.avatar ?? "/assets/img/icons/profile.png"} alt="Avatar" />
            <div className="profile-details pe-3">
                <div
                    className="profile-name d-flex align-items-center justify-content-between">{(user.first_name ?? "") + " " + (user.last_name ?? "")}
                    <FontAwesomeIcon icon={faEdit} className="text-danger"
                                     onClick={() => showChangeNameModal(true)} /></div>
                <div className="profile-number">{user.phone_number}</div>
                <WhiteLine modal={true} />
                <div
                    className={"profile-balance" + (user.role === Role.CLIENT ? " d-flex align-items-center justify-content-between" : "")}>
                    <span className={"amount-usd" + (user.role === Role.CARRIER ? " d-block" : "")}>
                        {user.role === "carrier" ? "$: " + formatAmount(user.detailed_balance ? user.detailed_balance.amount_usd : 0) : (user.balance === 0 ? "$" : user.balance < 0 ? "-$" : "+$") + (user.balance ? formatAmount(user.balance < 0 ? user.balance * -1 : user.balance, true, true) : 0)}
                    </span>
                    {user.role === "carrier" ? (
                        <span className={"amount-uzs" + (user.role === Role.CARRIER ? " d-block" : "")}>
                        {user.role === "carrier" ? "So'm: " + formatAmount(user.detailed_balance ? user.detailed_balance.amount_uzs : 0) + " so'm" : ""}
                    </span>
                    ) : ""}
                </div>
                <WhiteLine modal={true} />
                <div className="profile-partnership-rate d-flex align-items-center justify-content-between">
                    <span className="small">Sherikchilik foizi: </span> {user.partnership_rate ?? 0} %
                </div>
            </div>
        </div>)}
        <WhiteLine />
        {user?.role === Role.CARRIER && userTransactions ? (
            <BalanceSheetTable transactions={userTransactions} carrierId={userId} />) : ""}
        {user?.role === Role.CLIENT && clientProcesses.length > 0 ? clientProcesses.map(process => (
            <TransactionCard key={process.id} {...process} />)) : ""}
        <div className="spacer"></div>
    </Layout>);
};

export default memo(ProfilePage);