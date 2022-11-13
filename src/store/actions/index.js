import * as Types from "../actionTypes"

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
                type: Types.GET_USER_NOTIFICATIONS,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const setNotificationAsRead = (notificationId) => async (dispatch, getState) => {
    try {
        const token = getState().app.user.token

        const res = await fetch(`${BACKEND_URL}/notifications/as-read/${notificationId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        await res.json()
    } catch (error) {
        console.log(error)
        dispatch({
            type: Types.USER_ERROR,
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
                type: Types.GET_USER,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    } finally {
        hideLoading()
    }
}

export const getUserProcesses = () => async (dispatch, getState) => {
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
                type: Types.GET_PROCESSES,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const getTransactions = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user

        const res = await fetch(`${BACKEND_URL}/moneyflow`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: Types.GET_TRANSACTIONS,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const getUserMoneyFlow = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user

        const res = await fetch(`${BACKEND_URL}/moneyflow`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: Types.GET_MONEY_FLOW,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
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
                type: Types.GET_QUERIES,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
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
                type: Types.GET_OFFERS,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
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
            console.log(data);
            dispatch({
                type: Types.GET_CARRIERS,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
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
                type: Types.GET_ALL_USERS,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
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

        await res.json()
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const addToCarriers = (id) => async (dispatch, getState) => {
    dispatch({
        type: Types.ADD_TO_CARRIERS,
        payload: id
    })
}

export const removeFromCarriers = (id) => async (dispatch, getState) => {
    dispatch({
        type: Types.REMOVE_FROM_CARRIERS,
        payload: id
    })
}

export const addToClients = (id) => async (dispatch, getState) => {
    dispatch({
        type: Types.ADD_TO_CLIENTS,
        payload: id
    })
}

export const removeFromClients = (id) => async (dispatch, getState) => {
    dispatch({
        type: Types.REMOVE_FROM_CLIENTS,
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
                value
            })
        })

        const { data } = await res.json()

        dispatch({
            type: Types.CHANGE_QUERY_RATE,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const setQueryRate = (id) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/queries/setrate/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        await res.json()
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const rejectQueryRate = (id) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/queries/rejectrate/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        await res.json()

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const changeOfferRate = (id, buyRate, sellRate) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        let body = {}
        if (buyRate !== undefined) {
            body.buyRate = buyRate
        }

        if (sellRate !== undefined) {
            body.sellRate = sellRate
        }

        const res = await fetch(`${BACKEND_URL}/processes/offers/changerate/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })

        const { data } = await res.json()

        dispatch({
            type: Types.CHANGE_OFFER_RATE,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const setOfferRate = (id) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/offers/setrate/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        await res.json()

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const rejectOfferRate = (id) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/offers/rejectrate/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        await res.json()

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const setProcessCarrier = (id, carrierId) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/setcarrier/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                carrierId: carrierId,
            })
        })

        const { success, message } = await res.json()

        if (success) {
            dispatch({
                type: Types.CHANGE_QUERY_CARRIER
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const sendOfferQueries = (id, selectedQueryIds, showConfirmationModal) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/offers/store-all/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                selectedQueryIds: selectedQueryIds,
            })
        })

        const { success, message } = await res.json()

        showConfirmationModal(true)

        if (success) {
            dispatch({
                type: Types.SET_OFFER_QUERIES
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const saveProofImage = (id, url) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/queries/proof-image/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                url: url,
            })
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: Types.SET_TRANSACTION_PROOF,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const unsetProofImage = (id, url) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/queries/unset-proof-image/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const { success, message, data } = await res.json()

        if (success) {
            dispatch({
                type: Types.SET_TRANSACTION_PROOF,
                payload: data
            })
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const changeQueryStatus = (id, value) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/queries/changestatus/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                value
            })
        })

        const { data } = await res.json()

        dispatch({
            type: Types.CHANGE_QUERY_STATUS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const closeOffer = (offerId) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/processes/offers/closeoffer/${offerId}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })

        const { data } = await res.json()

        dispatch({
            type: Types.CLOSE_OFFER,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const clientGiveMoney = (userId, amount_usd, amount_uzs) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/moneyflow/givemoney`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id: userId,
                amount_usd: amount_usd,
                amount_uzs: amount_uzs
            })
        })

        const { message } = await res.json()

        console.log(message);
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const confirmGivenMoney = (id) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/moneyflow/confirmmoney/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const { message } = await res.json()

        console.log(message);
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const rejectGivenMoney = (id) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user

        const res = await fetch(`${BACKEND_URL}/moneyflow/rejectmoney/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const { message } = await res.json()

        console.log(message);
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const showLoading = () => ({
    type: Types.SHOW_LOADING
})

export const hideLoading = () => ({
    type: Types.HIDE_LOADING
})