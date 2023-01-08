import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import ModalLayout from "../ModalLayout";
import { deleteProcess } from "../../../store/actions";

const DeleteModal = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buttons = [
        {
            title: "Ha",
            eventHandler: () => {
                dispatch(deleteProcess(props.process_id));
                navigate(-1);
            }
        },
        {
            title: "Yo'q",
            eventHandler: () => props.onHide(),
            secondary: true
        }
    ];

    return <ModalLayout buttons={buttons} {...props}>
        <div className="text-center">
            <h3>O'chirib tashlaysizmi?</h3>
        </div>
    </ModalLayout>;
};

export default memo(DeleteModal);