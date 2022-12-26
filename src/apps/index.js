import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from "../store/actions"

import AdminApp from './AdminApp'
import ClientApp from './ClientApp'
import CarrierApp from './CarrierApp'

import EmptyPage from '../pages/common/EmptyPage'
import LoadingAction from "../components/common/LoadingAction";

const App = () => {
    const { loading, user } = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        window?.Telegram?.WebApp?.expand()
        if (user === null) {
            dispatch(getUser())
        }
        // eslint-disable-next-line
    }, [])

    if (loading || user === null) {
        return <LoadingAction />
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

    if (user !== null) {
        return <EmptyPage />
    }
}


export default App