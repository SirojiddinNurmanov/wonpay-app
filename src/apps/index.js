import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "../store/actions"

import AdminApp from './AdminApp'
import ClientApp from './ClientApp'
import CarrierApp from './CarrierApp'

import Preloader from "../components/common/Preloader"

const App = () => {
    const { loading, user } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user === null) {
            dispatch(getUser())
        }
        // eslint-disable-next-line
    }, [])

    if (loading || user === null) {
        return <Preloader />
    }

    if (['admin', 'superadmin'].includes(user?.user.role)) {
        return <AdminApp />
    }
    if (user?.user.role === 'carrier') {
        console.log(user)
        return <CarrierApp />
    }

    if (user?.user.role === 'client') {
        return <ClientApp />
    }
}


export default App