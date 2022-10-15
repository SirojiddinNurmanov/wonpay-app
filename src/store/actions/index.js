import {
    GET_USER_NOTIFICATIONS,
    GET_TRANSACTIONS,
    GET_USER,
    USER_ERROR,
    SHOW_LOADING,
    HIDE_LOADING,
    GET_QUERIES,
    GET_OFFERS,
    GET_ALL_USERS,
    GET_CARRIERS,
    ADD_TO_CARRIERS,
    REMOVE_FROM_CARRIERS,
    ADD_TO_CLIENTS,
    REMOVE_FROM_CLIENTS,
    CHANGE_QUERY_RATE
} from "../actionTypes"

import { BACKEND_URL } from "../../constants"

export const getUserNotifications = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user

        const res = await fetch(`${BACKEND_URL}/notifications`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: GET_USER_NOTIFICATIONS,
                payload: data
            })
        } else {
            dispatch({
                type: USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const getUser = () => async (dispatch) => {
    try {
        showLoading()

        let chat_id = localStorage.getItem('chat_id')

        let params = window.location.search.split("=")
        if (params.length === 2) {
            if (params[0] === "?chat_id") {
                chat_id = params[1]
            }
        }

        if (chat_id) {
            localStorage.setItem('chat_id', chat_id)
        }

        const res = await fetch(`${BACKEND_URL}/bot-login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id
            })
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: GET_USER,
                payload: data
            })
        } else {
            dispatch({
                type: USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    } finally {
        hideLoading()
    }
}

export const getTransactions = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: GET_TRANSACTIONS,
                payload: data
            })
        } else {
            dispatch({
                type: USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const getQueries = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/queries`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: GET_QUERIES,
                payload: data
            })
        } else {
            dispatch({
                type: USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const getOffers = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/offers`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: GET_OFFERS,
                payload: data
            })
        } else {
            dispatch({
                type: USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const getCarriers = () => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/carriers`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: GET_CARRIERS,
                payload: data
            })
        } else {
            dispatch({
                type: USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const getAllUsers = () => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/users`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: GET_ALL_USERS,
                payload: data
            })
        } else {
            dispatch({
                type: USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const toggleUserRoles = (carriers, clients) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/carriers/toggle`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                carriers,
                clients
            })
        })

        const { success, message } = await res.json()
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const addToCarriers = (id) => async (dispatch, getState) => {
    dispatch({
        type: ADD_TO_CARRIERS,
        payload: id
    })
}

export const removeFromCarriers = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CARRIERS,
        payload: id
    })
}

export const addToClients = (id) => async (dispatch, getState) => {
    dispatch({
        type: ADD_TO_CLIENTS,
        payload: id
    })
}

export const removeFromClients = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CLIENTS,
        payload: id
    })
}

export const changeQueryRate = (id, value) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/queries/changerate/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                value: value
            })
        })

        const { success, message, data } = await res.json()

        dispatch({
            type: CHANGE_QUERY_RATE,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const showLoading = () => ({
    type: SHOW_LOADING
})

export const hideLoading = () => ({
    type: HIDE_LOADING
})