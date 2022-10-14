import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { common } from '../../constants/bottomButtons'

import Layout from "../../layout"

import QueryInfoModal from "../../components/modals/admin/QueryInfoModal"
import Title from '../../components/common/Title'
import ProcessTable from "../../components/tables/ProcessTable"
import { NoData } from "../../components/common/NoData"
import { useEffect } from "react"
import { getOffers, getQueries } from "../../store/actions"

const ProcessesPage = () => {
    const [modalShow, setModalShow] = useState(false)
    const { queries, offers } = useSelector(state => state.app)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getQueries())
        dispatch(getOffers())
        //es-lint-disable-next-line
    }, [])

    common.middleButtons = false

    return (
        <Layout buttons={common} >
            <QueryInfoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Link to="/queries">
                <Title text="Takliflar:" amount="₩32.000.000" inContent={true} />
            </Link>
            <div className="processes-block">
                {queries ? (
                    <ProcessTable processes={queries}/>
                ) : (
                    <NoData />
                )}
            </div>
           
            <Link to="/queries">
                <Title text="So'rovlar:" amount="₩15.000.000" inContent={true} />
            </Link>
            <div className="processes-block">
                {offers ? (
                    <ProcessTable processes={offers}/>
                ) : (
                    <NoData />
                )}
            </div>
        </Layout>
    )
}

export default ProcessesPage
