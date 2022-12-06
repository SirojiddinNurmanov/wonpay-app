import React, { memo, useState } from "react";

import ModalLayout from "../ModalLayout";
import { useDispatch } from "react-redux";
import { changeUserName } from "../../../store/actions";

const ChangeNameModal = (props) => {
    const [newName, setNewName] = useState("");
    const dispatch = useDispatch();

    const buttons = [
        {
            title: "O'zgartirish",
            eventHandler: () => {
                if (newName){
                    dispatch(changeUserName(props.user.id, newName));
                }
                props.onHide();
            }
        },
        {
            title: "Bekor Qilish",
            eventHandler: props.onHide,
            secondary: true
        }
    ];

    const changeInput = (e) => setNewName(e.target.value)

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="text-center">
                <h1>{(props.user?.first_name ?? "") + " " + (props.user?.last_name ?? "")}</h1>
                <div className="form-group">
                    <input type="text" className="name-input text-center" value={newName}
                           onChange={changeInput} />
                </div>
            </div>
        </ModalLayout>
    );
};

export default memo(ChangeNameModal);