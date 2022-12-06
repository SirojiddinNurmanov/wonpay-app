import React, { memo } from "react";

import ModalLayout from "../ModalLayout";
import WhiteLine from "../../common/WhiteLine";

const OfferDebtModal = (props) => {
    const buttons = [
        {
            title: "Tasdiqlash",
            eventHandler: () => props.onHide()
        }
    ];

    return (
        <ModalLayout buttons={buttons} {...props}>
            <div className="my-modal">
                <div className="component71-header">
                    <h1>Farruh Soipov</h1>
                    <span>Kelishilgan valyuta kursi</span>
                    <h3>$1 = W 1.250</h3>
                    <h1>W5.000.000 = $4.000</h1>
                </div>
                <WhiteLine modal={true} />
                <div className="component71-item">
                    <span>Koreada pulni qabul qiluvchi:</span>
                    <div className="component71-item-check">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <span>1. Alisher Ro'ziyev</span>
                                </div>
                                <div className="col-6">
                                    {" "}
                                    <span>W 2 000 000</span>
                                    <img
                                        src="/assets/img/icons/check.png"
                                        alt="ddd"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="component71-item-check">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <span>1. Alisher Ro'ziyev</span>
                                </div>
                                <div className="col-6">
                                    {" "}
                                    <span>W 2 000 000</span>
                                    <img
                                        src="/assets/img/icons/check.png"
                                        alt="ddd"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="component71-item-check">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <span>1. Alisher Ro'ziyev</span>
                                </div>
                                <div className="col-6">
                                    {" "}
                                    <span>W 2 000 000</span>
                                    <img
                                        src="/assets/img/icons/check.png"
                                        alt="ddd"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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
            </div>
        </ModalLayout>
    );
};

export default memo(OfferDebtModal);
