import React, { memo } from "react";
import ModalLayout from "../ModalLayout";

const AlertModal = (props) => {
    const buttons = [
        {
            title: "Yopish",
            eventHandler: () => props.onHide()
        }
    ];
    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="text-center">
                <h3>So'rovlar summasi taklif summasidan oshib ketdi</h3>
                <div className="text-body">Iltimos tekshiring</div>
            </div>
        </ModalLayout>
    );
};

export default memo(AlertModal);
