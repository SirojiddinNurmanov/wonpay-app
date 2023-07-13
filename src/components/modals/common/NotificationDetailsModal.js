import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    clientConfirmGivenMoney,
    clientConfirmTakenMoney,
    clientRejectGivenMoney,
    clientRejectTakenMoney,
    receiverConfirmMoney,
    receiverRejectMoney,
    rejectOfferRate,
    rejectQueryRate,
    setNotificationAsRead,
    setOfferRate,
    setQueryRate
} from "../../../store/actions";

import ModalLayout from "../ModalLayout";
import Role from "../../../constants/statuses/Role";
import NotificationType from "../../../constants/statuses/NotificationType";
import NotificationStatus from "../../../constants/statuses/NotificationStatus";
import NotificationActionType from "../../../constants/statuses/NotificationActionType";
import ProcessType from "../../../constants/statuses/ProcessType";

const NotificationDetailsModal = (props) => {
    const { user } = useSelector(state => state.app.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const accept = () => {
        if (props.status === NotificationStatus.PENDING_ID) {
            if (props.process.process_type === ProcessType.QUERY_ID) {
                dispatch(setQueryRate(props.process.id));
            } else {
                dispatch(setOfferRate(props.process.id));
            }
        }
        dispatch(setNotificationAsRead(props.id));
        props.onHide();
    };

    const reject = () => {
        if (props.status === NotificationStatus.PENDING_ID) {
            if (props.process.process_type === ProcessType.QUERY_ID) {
                dispatch(rejectQueryRate(props.process.id));
            } else {
                dispatch(rejectOfferRate(props.process.id));
            }
        }
        dispatch(setNotificationAsRead(props.id));
        props.onHide();
    };

    const confirmMoney = () => {
        console.log(user.role);
        // eslint-disable-next-line default-case
        switch (user.role) {
            case Role.CLIENT:
                if (props.transaction?.to_id === user.id) {
                    dispatch(clientConfirmTakenMoney(props.process_id));
                }

                if (props.transaction?.from_id === user.id) {
                    dispatch(clientConfirmGivenMoney(props.process_id));
                }
                break;
            case Role.SUPER_ADMIN:
            case Role.ADMIN:
            case Role.CARRIER:
                dispatch(receiverConfirmMoney(props.process_id));
        }

        dispatch(setNotificationAsRead(props.id));
        props.onHide();
    };

    const rejectMoney = () => {
        // eslint-disable-next-line default-case
        switch (user.role) {
            case Role.CLIENT:
                if (props.transaction?.to_id === user.id) {
                    dispatch(clientRejectTakenMoney(props.process_id));
                }

                if (props.transaction?.from_id === user.id) {
                    dispatch(clientRejectGivenMoney(props.process_id));
                }
                break;
            case Role.ADMIN:
            case Role.CARRIER:
                dispatch(receiverRejectMoney(props.process_id));
        }

        dispatch(setNotificationAsRead(props.id));
        props.onHide();
    };

    let buttons = [];

    if (props.type === NotificationType.QUERY_ID && props.status === NotificationStatus.PENDING_ID) {
        buttons = [
            {
                title: "Roziman",
                eventHandler: () => accept()
            },
            {
                title: "Noroziman",
                eventHandler: () => reject()
            }
        ];
    } else if (props.type === NotificationType.OFFER_ID && props.status === NotificationStatus.PENDING_ID) {
        buttons = [
            {
                title: "Ha",
                eventHandler: () => confirmMoney()
            },
            {
                title: "Yo'q",
                eventHandler: () => rejectMoney()
            }
        ];
    } else {
        buttons = [
            {
                title: props.action_type === NotificationActionType.INFO_ID ? "Yopish" : "Ko'rish",
                eventHandler: () => {
                    // eslint-disable-next-line default-case
                    switch (props.action_type) {
                        case NotificationActionType.QUERY_ID:
                            navigate(`/queries/${props.process_id}`);
                            break;
                        case NotificationActionType.OFFER_ID:
                            navigate(`/offers/${props.process_id}`);
                            break;
                        case NotificationActionType.MONEY_ID:
                            navigate(`/reports`);
                            break;
                        case NotificationActionType.RECEIVE_ID:
                            navigate(`/receive`);
                            break;
                        case NotificationActionType.DELIVER_ID:
                            navigate(`/deliver`);
                            break;
                    }

                    props.onHide();
                }
            }
        ];
    }

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="text-center">
                <h5 dangerouslySetInnerHTML={{ __html: props.title }} />
                <p dangerouslySetInnerHTML={{ __html: props.body }} />
            </div>
        </ModalLayout>
    );
};

export default memo(NotificationDetailsModal);
