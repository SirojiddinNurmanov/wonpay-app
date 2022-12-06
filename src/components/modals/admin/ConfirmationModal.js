import React, { memo } from "react";
import ModalLayout from "../ModalLayout";

const ConfirmationModal = (props) => {
    const buttons = [
        {
            title: "Bosh sahifaga",
            isLink: true,
            linkURL: "/"
        }
    ];

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="text-center">
                <h3>So'rovlar uchun kurs xabarlari yuborildi</h3>
            </div>
        </ModalLayout>
    );
};

export default memo(ConfirmationModal);
