import React, { memo, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "react-bootstrap/Spinner"

import { getCarriers } from "../../store/actions"
import { common } from '../../constants/bottomButtons'

import Layout from '../../layout'

import CarrierCard from "../../components/cards/CarrierCard"
import UsersModal from "../../components/modals/admin/UsersModal"
import NoData from "../../components/common/NoData"

const CarriersPage = () => {
    const [usersModal, showUsersModal] = useState(false)
    const [loader, showLoader] = useState(true)
    const { carriers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    common.middleButtons = [
        {
            text: "Kuryer Qo'shish",
            callback: () => showUsersModal(true)
        }
    ]

    useEffect(() => {
        dispatch(getCarriers())
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
            {carriers ? carriers.map((carrier, index) => (
                <CarrierCard key={index} {...carrier} />
            )) : (<NoData />)}
        </Layout>
    )
}

export default memo(CarriersPage)
