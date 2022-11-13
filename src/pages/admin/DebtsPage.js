import React, { memo, useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../store/actions"
import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

import QueryDebtModal from "../../components/modals/admin/QueryDebtModal"
import OfferDebtModal from "../../components/modals/admin/OfferDebtModal"
import DebtsTable from "../../components/tables/admin/DebtsTable"
import Title from "../../components/common/Title"


const DebtsPage = () => {
    const [queryDebtModal, showQueryDebtModal] = useState(false)
    const [offerDebtModal, showOfferDebtModal] = useState(false)
    const { allUsers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
        // eslint-disable-next-line
    }, [])


    common.middleButtons = false

    return (
        <Layout buttons={common}>
            <QueryDebtModal show={queryDebtModal} onHide={() => showQueryDebtModal(false)} />
            <OfferDebtModal show={offerDebtModal} onHide={() => showOfferDebtModal(false)} />
            <Title text="Qarzlar:" amount="" inContent={true} />
            <div className="processes-block">
                <DebtsTable users={allUsers?.filter(user => user.balance > 0 && user.role === 'client')} />
            </div>
            <Title text="Bizning Qarzlar:" amount="" inContent={true} />
            <div className="processes-block">
                <DebtsTable users={allUsers?.filter(user => user.balance < 0 && user.role === 'client')}/>
            </div>
        </Layout>
    )
}

export default memo(DebtsPage)
