import React, { useState, useEffect, useContext } from "react"
import { APIContext } from "../../context"
import { common } from '../../data/bottomButtons'

import Layout from '../layouts/Layout'

import CarrierCard from "./CarrierCard"
import AddCarrierModal from "../modals/AddCarrierModal"
import Title from '../common/Title'

const Carriers = () => {
    const { BACKEND_URL } = useContext(APIContext)
    const [modalShow, setModalShow] = useState(false)
    const [carriers, setCarriers] = useState([])

    const getAllCarriers = async () => {
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
    }

    common.middleButtons = [
        {
            text: "Kuryer Qo'shish",
            callback: () => setModalShow(true)
        }
    ]

    useEffect(() => {
        getAllCarriers()
    })

    return (
        <Layout buttons={common}>
            <div className="curer-page">
                <AddCarrierModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                </div>
                <Title text="Kuryerlar" />
                <div className="curer-body">
                    {carriers.map((carrier, index) => (
                        <CarrierCard key={index} {...carrier} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Carriers
