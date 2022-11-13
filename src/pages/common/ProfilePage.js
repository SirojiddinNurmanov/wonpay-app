import React, { memo } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"
import { getAllUsers } from "../../store/actions"

const ProfilePage = ({}) => {
    const { allUsers } = useSelector(state => state.app)
    const { userId } = useParams()
    const user = allUsers?.find(user => user.id === parseInt(userId))
    const dispatch = useDispatch()

    common.middleButtons = false

    useEffect(() => {
        dispatch(getAllUsers())
        // eslint-disable-next-line
    }, [])

    return (
        <Layout buttons={common}>
            <img src="/assets/img/icons/profile.png" alt="Avatar" />
            <div className="d">
                {user && user.first_name}
            </div>
        </Layout>
    )
}

export default memo(ProfilePage)