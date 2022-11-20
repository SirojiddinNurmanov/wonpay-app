import React, { memo, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllProcesses } from "../../store/actions"
import { common } from "../../constants/bottomButtons"

import Layout from "../../layout"

import ConfirmReceiveModal from "../../components/modals/carrier/ConfirmReceiveModal"
import MoneyCard from "../../components/cards/MoneyCard"
import { formatAmount } from "../../helpers"


const ReceivePage = () => {
    const [modalShow, setModalShow] = useState(false)
    const { allProcesses, user: { user } } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProcesses())
        // eslint-disable-next-line
    }, [])

    common.middleButtons = [
        {
            text: "Pul Olish",
            callback: () => {
                setModalShow(true)
            }
        }
    ]

    return (
        <Layout buttons={common} title={{ text: "Pul Olish:", amount: ("$" + (allProcesses.length > 0 ? formatAmount(allProcesses.filter(process => (process.process_type === 0) && (process.carrier_id === user.id) && (process.status === 1)).map(process => process.amount / process.exchange_rate).reduce((sum, amount) => sum + amount), true, true) : "0")) }}>
            <ConfirmReceiveModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="carrier-body">
                {allProcesses && allProcesses.filter(process => (process.process_type === 0) && (process.carrier_id === user.id) && (process.status === 1)).map(process => (
                    <MoneyCard key={process.id}  {...process} />
                ))}
            </div>
        </Layout>
    )
}

export default memo(ReceivePage)
