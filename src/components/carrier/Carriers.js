import React, { useState, useEffect, useContext } from "react"
import Spinner from "react-bootstrap/Spinner"

import { APIContext } from "../../context"
import { common } from '../../data/bottomButtons'

import Layout from '../layouts/Layout'

import CarrierCard from "./CarrierCard"
import AddCarrierModal from "../modals/AddCarrierModal"
import { NoData } from "../common/NoData"

const Carriers = () => {
    const { BACKEND_URL } = useContext(APIContext)
    const [modalShow, setModalShow] = useState(false)
    const [carriers, setCarriers] = useState([])
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
        getAllCarriers()
    })

    return (
        <Layout buttons={common} title={{ text: "Kuryerlar" }}>
            <AddCarrierModal
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

export default Carriers
