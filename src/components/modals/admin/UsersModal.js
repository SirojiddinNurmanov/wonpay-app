import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers, getCarriers, toggleUserRoles } from "../../../store/actions";

import UserCard from "../../cards/UserCard";
import ModalLayout from "../ModalLayout";

const UsersModal = (props) => {
    const { allUsers, newCarriers, newClients } = useSelector(state => state.app);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getCarriers());
        // eslint-disable-next-line
    }, []);

    const toggleClientCarrierRoles = () => {
        dispatch(toggleUserRoles(newCarriers, newClients));
        props.onHide();
    };

    const buttons = [
        {
            title: "Tasdiqlash",
            eventHandler: () => toggleClientCarrierRoles()
        }
    ];

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="my-modal">
                {allUsers && allUsers.map(user => {
                    if (!["admin", "superadmin"].includes(user.role)) {
                        return (
                            <UserCard key={user.id} {...user} />
                        );
                    }
                    return false;
                })}
            </div>
        </ModalLayout>
    );
};

export default memo(UsersModal);
