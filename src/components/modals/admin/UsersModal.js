import React, { useEffect, useState, useContext } from "react"
import Modal from "react-bootstrap/Modal"

import { APIContext } from '../../../context'

import UserCard from "../../cards/UserCard"

const UsersModal = (props) => {
    const [allUsers, setAllUsers] = useState(false)
    const { BACKEND_URL } = useContext(APIContext)


    const getAllUsers = async () => {
        const token = localStorage.getItem('token')
        const res = await fetch(`${BACKEND_URL}/users`, {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        })

        const data = await res.json()

        if (data.success) {
            setAllUsers(data.data)
        }
    }

    useEffect(() => {
        if (!allUsers) {
            getAllUsers()
        }
    })


    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable
            dialogClassName="modal-60w"
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
                    {allUsers && allUsers.map(user => (
                        <UserCard key={user.id} {...user} />
                    ))}
                </div>
                <div className="white-line"></div>
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-button" onClick={() => props.onHide()}>Tasdiqlash</button>
            </Modal.Footer>
        </Modal>
    )
}
export default UsersModal
