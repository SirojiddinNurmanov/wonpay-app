import React, { memo } from "react"
import Modal from "react-bootstrap/Modal"

import WhiteLine from "../../common/WhiteLine"

const QueryDebtModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-center">
                    <div className="logo">
                        <img src="/assets/img/icons/logo.png" alt="logo" />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <WhiteLine modal={true} />
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-button" onClick={props.onHide}>Yopish</button>
            </Modal.Footer>
        </Modal>
    )
}

export default memo(QueryDebtModal)
