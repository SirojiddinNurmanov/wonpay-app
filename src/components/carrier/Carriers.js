import React, { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import AddCurerModal from "../modals/AddCurerModal"
import CarrierCard from "./CarrierCard"
import { APIContext } from "../../context"
import Layout from '../layouts/Layout'
import { common } from '../../data/bottomButtons'

const Carriers = () => {
    const navigate = useNavigate()
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
    }, [])

    return (
        <Layout buttons={common}>
            <div className="curer-page">
                <AddCurerModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <div className="home-header">
                    <div className="logo">
                        <img src="assets/img/icons/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="curer-body">
                    <h3>Kuryerlar</h3>
                    {carriers.map(carrier => (
                        <CarrierCard {...carrier} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Carriers
