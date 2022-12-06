import React, { memo } from "react";

import ModalLayout from "../ModalLayout";
import WhiteLine from "../../common/WhiteLine";

const QueryDebtModal = (props) => {
    const buttons = [
        {
            title: "Yopish",
            eventHandler: () => props.onHide()
        }
    ];

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="component71-header">
                <h1>Palonchi Palonchiyev</h1>
                <span>Kelishilgan valyuta kursi</span>
                <h3>$1 = W 1.250</h3>
                <h1>W5.000.000 = $4.000</h1>
            </div>
            <WhiteLine modal={true} />
            <div className="component71-item">
                <span>Koreada pulni qabul qiluvchi:</span>
                <h3>Alisher Alimov</h3>
                <p>Woori Bank (1002-565-86986)</p>
                <h3>Qabul Qilingan</h3>
            </div>
            <WhiteLine modal={true} />
            <div className="component71-item">
                <span>O'zbekistonda pulni yetkazuvchi:</span>
                <h3>Javohir Turaev</h3>
                <p>Tashkent. +998 98 998 99 99</p>
            </div>
            <WhiteLine modal={true} />
            <div className="component71-item">
                <span>O'zbekistonda pulni oluvchi:</span>
                <h3>Shamsiddin Abdullaev</h3>
                <p>Tashkent. +998 98 998 99 99</p>
                <h3>Olmagan</h3>
            </div>
        </ModalLayout>
    );
};

export default memo(QueryDebtModal);
