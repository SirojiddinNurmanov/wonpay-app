import React, { memo, useState } from "react"
import { Link } from "react-router-dom"
import Modal from "react-bootstrap/Modal"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

const SingleCarrierPage = () => {
    const [modalShow, setModalShow] = useState(false)

    common.middleButtons = false

    return (
        <Layout buttons={common}>
            <GiveMoney show={modalShow} onHide={() => setModalShow(false)} />
            <div className="profile-avatar">
                <div className="profile-author">
                    <div className="col-4">
                        <img src="/assets/img/icons/profile.png" alt="" />
                    </div>
                    <div className="col-8">
                        <h3>Anvar Sobirov</h3>
                        <h5>+99 897 705 12 56</h5>
                    </div>
                </div>
                <div className="profile-avatar-footer">
                    <div className="col-8">
                        <span>Sizning hisobingiz:</span>
                    </div>
                    <div className="col-4">$4.00</div>
                </div>
            </div>
            <div className="history">
                <h5>Xabarlar</h5>
                <div className="history-cart">
                    <span className="show-time">25.08.2022</span>
                    <div className="money-cart">
                        <h6>O'qilmagan</h6>
                        <Link to="/profile-2">
                            <div className="message-body">
                                <p>
                                    So'rovingiz bo'yicha ko'rsatilgan bank
                                    xisob raqamiga pul muvofaqqiyatli
                                    ko'chirildi.
                                </p>
                                <span>
                                    Ko'chirilgan miqdor:{" "}
                                    <b>13.000.000 won</b>{" "}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="history-cart">
                    <span className="show-time">25.08.2022</span>
                    <div className="money-cart">
                        <h6>O'qilgan</h6>
                        <div className="message-body">
                            <p>
                                So'rovingiz bo'yicha ko'rsatilgan bank xisob
                                raqamiga pul muvofaqqiyatli ko'chirildi.
                            </p>
                            <span>
                                Ko'chirilgan miqdor: <b>13.000.000 won</b>{" "}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="history-cart">
                    <span className="show-time">25.08.2022</span>
                    <div className="money-cart">
                        <h6>O'qilgan</h6>
                        <div className="message-body">
                            <p>
                                So'rovingiz bo'yicha ko'rsatilgan bank xisob
                                raqamiga pul muvofaqqiyatli ko'chirildi.
                            </p>
                            <span>
                                Ko'chirilgan miqdor: <b>13.000.000 won</b>{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default memo(SingleCarrierPage)

const GiveMoney = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <h3>Pul Berish</h3>
            </Modal.Header>
            <Modal.Body>
                <div className="my-modal">
                    <p>Biz bilan hamkorlik qilganingiz uchun minnatdormiz.</p>
                    <p>Yana kutamiz</p>
                    <button>Mening Sahifam</button>
                </div>
                <div className="give-money-btn">
                    <button>Berish</button>
                    <button>Ortga</button>
                </div>
            </Modal.Body>
        </Modal>
    )
}
