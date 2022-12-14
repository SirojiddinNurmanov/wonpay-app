import * as Types from "../../actionTypes/admin"
import * as CommonTypes from "../../actionTypes/common"
import { BACKEND_URL } from "../../../constants"

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
                type: CommonTypes.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: CommonTypes.USER_ERROR,
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
                type: CommonTypes.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: CommonTypes.USER_ERROR,
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
                type: Types.GET_CARRIERS,
                payload: data
            })
        } else {
            dispatch({
                type: CommonTypes.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: CommonTypes.USER_ERROR,
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
                type: CommonTypes.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: CommonTypes.USER_ERROR,
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
            type: CommonTypes.USER_ERROR,
            payload: error.response.statusText
        })
    } finally {
        dispatch(getCarriers())
        dispatch(getAllUsers())
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
            type: CommonTypes.USER_ERROR,
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
            type: CommonTypes.USER_ERROR,
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
            type: CommonTypes.USER_ERROR,
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
            type: CommonTypes.USER_ERROR,
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
            type: CommonTypes.USER_ERROR,
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
            type: CommonTypes.USER_ERROR,
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
                type: CommonTypes.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: CommonTypes.USER_ERROR,
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
                type: CommonTypes.USER_ERROR,
                payload: message
            })
        }
    } catch (error) {
        dispatch({
            type: CommonTypes.USER_ERROR,
            payload: error.response.statusText
        })
    }
}