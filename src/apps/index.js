import { useAPI } from '../context'

import AdminApp from './AdminApp'
import ClientApp from './ClientApp'
import CarrierApp from './CarrierApp'

const App = () => {
    const { user } = useAPI()
    let currentUser = user ? user.user : JSON.parse(localStorage.getItem('user'))
    let token = user ? user.token : localStorage.getItem('token')

    if (currentUser) {
        localStorage.setItem('user', JSON.stringify(currentUser))
        localStorage.setItem('token', token)

        if (['admin', 'superadmin'].includes(currentUser.role)) {
            return <AdminApp />
        }
        if (currentUser.role === 'carrier') {
            return <CarrierApp />
        }

        if (currentUser.role === 'client') {
            return <ClientApp />
        }
    }
}

export default App
