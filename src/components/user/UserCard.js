import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

const UserCard = ({ avatar, first_name, last_name, role }) => {
    const [checked, setChecked] = useState(role === 'carrier')

    const changeRole = () => {
        setChecked(!checked)
    }

    return (
        <div className="add-carrier-item">
            <div className="image">
                <img src={avatar} alt="Avatar" />
            </div>
            <div className="name">{first_name} {last_name}</div>
            <div className="checkbox">
                <Form.Check onChange={() => changeRole() } checked={checked} />
            </div>
        </div>
    )
}


export default UserCard