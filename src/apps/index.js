import { useAPI } from '../context'

import AdminApp from './AdminApp'
import ClientApp from './ClientApp'
import CarrierApp from './CarrierApp'
import { useEffect } from 'react'

const App = () => {
    const { user } = useAPI()

    useEffect(() => {
        let webApp = window?.Telegram?.WebApp
        webApp.expand()
        let mainButton = webApp.MainButton
        mainButton.show()
        mainButton.setParams({
            'text': `Notifications`,
            'color': "#2ECC71",
            'text_color': "#F7F9F9"
        })
        mainButton.onClick(() => {
            mainButton.setParams({
                'text': `Notifications changed`,
                'color': "#2ECC71",
                'text_color': "#F7F9F9"
            })  
        })
    });
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
