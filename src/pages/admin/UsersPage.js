import React, { memo, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "react-bootstrap/Spinner"

import { getAllUsers } from "../../store/actions"
import { common } from '../../constants/bottomButtons'
import { Link } from "react-router-dom"

import Layout from '../../layout'

import CarrierCard from "../../components/cards/CarrierCard"
import UsersModal from "../../components/modals/admin/UsersModal"
import NoData from "../../components/common/NoData"

const UsersPage = () => {
    const [usersModal, showUsersModal] = useState(false)
    const [loader, showLoader] = useState(true)
    const { allUsers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    common.middleButtons = false

    useEffect(() => {
        dispatch(getAllUsers())
        showLoader(false)
        // eslint-disable-next-line
    }, [])

    return (
        <Layout buttons={common} title={{ text: "Kuryerlar" }}>
            <UsersModal
                show={usersModal}
                onHide={() => showUsersModal(false)}
            />
            {loader && (
                <div className="center">
                    <Spinner animation="border" role="status" size="lg">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {allUsers ? allUsers.filter(user => user.role === 'client').map((user, index) => (
                <Link key={index} to={"/profile/" + user.id}>
                    <CarrierCard {...user} />
                </Link>
            )) : (<NoData />)}
        </Layout>
    )
}

export default memo(UsersPage)
