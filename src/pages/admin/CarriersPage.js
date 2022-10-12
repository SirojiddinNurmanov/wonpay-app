import React, { useState, useEffect } from "react"
import Spinner from "react-bootstrap/Spinner"

import { BACKEND_URL } from "../../constants"
import { common } from '../../constants/bottomButtons'

import Layout from '../../layout'

import CarrierCard from "../../components/cards/CarrierCard"
import UsersModal from "../../components/modals/admin/UsersModal"
import { NoData } from "../../components/common/NoData"

const CarriersPage = () => {
    const [modalShow, setModalShow] = useState(false)
    const [carriers, setCarriers] = useState(false)
    const [loader, showLoader] = useState(true)

    const getAllCarriers = async () => {
        try {
            const token = localStorage.getItem('token')
            const res = await fetch(`${BACKEND_URL}/carriers`, {
                headers: {
                    "Authorization": 'Bearer ' + token
                }
            })

            const data = await res.json()

            if (data.success) {
                setCarriers(data.data)
            }
        } catch (error) {
            setCarriers(false)
        }
        showLoader(false)
    }

    common.middleButtons = [
        {
            text: "Kuryer Qo'shish",
            callback: () => setModalShow(true)
        }
    ]

    useEffect(() => {
        if (!carriers) {
            getAllCarriers()
        }
    }, [])

    return (
        <Layout buttons={common} title={{ text: "Kuryerlar" }}>
            <UsersModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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

export default CarriersPage
