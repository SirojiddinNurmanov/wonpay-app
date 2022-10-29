import React, { memo, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'

import { addToCarriers, addToClients, removeFromCarriers, removeFromClients } from '../../store/actions'

const UserCard = ({ id, avatar, first_name, last_name, role }) => {
    const { newCarriers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    const [checked, setChecked] = useState(newCarriers.includes(id))

    const changeRole = () => {
        if (checked) {
            dispatch(removeFromCarriers(id))
            dispatch(addToClients(id))
        } else {
            dispatch(addToCarriers(id))
            dispatch(removeFromClients(id))
        }
        setChecked(!checked)
    }

    return (
        <div className="add-carrier-item">
            <div className="image">
                <img src={avatar ?? "/assets/img/icons/profile.png"} alt="Avatar" />
            </div>
            <div className="name">{first_name + (last_name ? " " + last_name : "")}</div>
            <div className="checkbox">
                <Form.Check onChange={changeRole} checked={checked} />
            </div>
        </div>
    )
}


export default memo(UserCard)