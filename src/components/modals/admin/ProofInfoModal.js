import React, { memo, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { formatAmount } from "../../../helpers";

import ModalLayout from "../ModalLayout";

const ProofInfoModal = ({
                            show,
                            onHide,
                            user,
                            amount,
                            payment_type,
                            card_info_type,
                            card_info_sms,
                            card_info_image,
                            proof_image
                        }) => {
    const [zoomed, setZoomed] = useState(false);

    const closeAndZoomOut = () => {
        onHide();
        setZoomed(false);
    };

    const buttons = [
        {
            title: "Yopish",
            eventHandler: () => closeAndZoomOut()
        }
    ];

    return (
        <ModalLayout buttons={buttons} show={show} onHide={onHide}>
            <Slide
                duration={2000}
                autoplay={false}
                easing="ease"
                arrows="false"
            >
                <div className="proof-modal-item text-center">
                    <h1>{amount ? "￦ " + formatAmount(amount) : ""}</h1>
                    {payment_type === 1 && (
                        <div className="request-modal-item">
                            <div className="container">
                                {payment_type === 1 && (
                                    <div className="row">
                                        <div className="col">
                                            <div className="card_info_block text-center">
                                                {card_info_type === 1 ? (
                                                    <img onClick={() => setZoomed(!zoomed)}
                                                         className={"card-image" + (zoomed ? " zoomed" : "")}
                                                         src={card_info_image} alt="Card" />
                                                ) : (
                                                    <pre>
                                                        {card_info_sms}
                                                    </pre>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                {proof_image && (
                    <div className="proof-modal-item text-center">
                        <img src={proof_image} alt="Proof" />
                    </div>
                )}
            </Slide>
        </ModalLayout>
    );
};

export default memo(ProofInfoModal);
