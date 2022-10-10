import React, { useContext, useState, useEffect, createContext } from "react"
import PropTypes from "prop-types"

export const APIContext = createContext()

export const APIContextProvider = ({ children }) => {
    const [user, setUser] = useState(false)
    const [type, chat_id] = window.location.search.split("=")
    useEffect(() => {
        if (type === '?chat_id') {
            fetch(`https://wonpay.thesmart.uz/api/bot-login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser(data.data)
                })
                .catch((err) => console.log(err))
        }
    }, [])

    return (
        <APIContext.Provider
            value={{
                user,
                BACKEND_URL: 'https://wonpay.thesmart.uz/api'
            }}
        >
            {children}
        </APIContext.Provider>
    )
}

export const useAPI = () => {
    const context = useContext(APIContext)
    if (context === undefined) {
        throw new Error("Context must be used within a Provider")
    }
    return context
}

APIContextProvider.propTypes = {
    children: PropTypes.any,
}
