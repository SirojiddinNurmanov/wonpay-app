import * as Types from "../../actionTypes/client"
import * as CommonTypes from "../../actionTypes/common"
import { BACKEND_URL } from "../../../constants"

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

// Should not be used
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
                type: Types.GET_TRANSACTIONS,
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