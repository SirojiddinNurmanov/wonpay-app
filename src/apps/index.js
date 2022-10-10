import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "../store/actions"

import AdminApp from './AdminApp'
import ClientApp from './ClientApp'
import CarrierApp from './CarrierApp'

import Preloader from "../components/common/Preloader"

const AppDoor = () => {
    const loading = useSelector(state => state.app.loading)
    const user = useSelector(state => state.app.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
        // eslint-disable-next-line
    }, [])

    if (loading || user === null) {
        return <Preloader />
    }

    if (['admin', 'superadmin'].includes(user?.user.role)) {
        return <AdminApp />
    }
    if (user?.user.role === 'carrier') {
        return <CarrierApp />
    }

    if (user?.user.role === 'client') {
        return <ClientApp />
    }
}


export default AppDoor