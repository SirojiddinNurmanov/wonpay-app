import React, { useEffect } from "react"
import { useState } from "react"
import Modal from "react-bootstrap/Modal"
import { useDispatch, useSelector } from "react-redux"

import { getAllUsers, getCarriers, toggleUserRoles } from "../../../store/actions"

import UserCard from "../../cards/UserCard"

const UsersModal = (props) => {
    const { allusers, newCarriers, newClients } = useSelector(state => state.app)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getCarriers())
    }, [])

    const toggleClientCarrierRoles = () => {
        dispatch(toggleUserRoles(newCarriers, newClients))
        props.onHide()
    }

    return (
        <Modal
            {...props}
            centered
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-center">
                    <div className="logo">
                        <img src="/assets/img/icons/logo.png" alt="logo" />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="my-modal">
                    {allusers && allusers.map(user => {
                        if (!['admin', 'superadmin'].includes(user.role)) {
                            return (
                                <UserCard key={user.id} {...user} />
                            )
                        }
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-button" onClick={toggleClientCarrierRoles}>Tasdiqlash</button>
            </Modal.Footer>
        </Modal>
    )
}
export default UsersModal
