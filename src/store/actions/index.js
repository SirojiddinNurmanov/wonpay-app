import { GET_USER_NOTIFICATIONS, GET_USER, USER_ERROR, SHOW_LOADING, HIDE_LOADING } from "../actionTypes"

const BACKEND_URL = "https://wonpay.thesmart.uz/api"

export const getUserNotifications = () => async (dispatch, getState) => {
    try {
        showLoading()

        const user = getState().app.user

        const res = await fetch(`${BACKEND_URL}/notifications`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        const { data } = await res.json()

        dispatch({
            type: GET_USER_NOTIFICATIONS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    } finally {
        hideLoading()
    }
}

export const getUser = () => async (dispatch) => {
    try {
        showLoading()

        const [_, chat_id] = window.location.search.split("=")
        const res = await fetch(`${BACKEND_URL}/bot-login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id
            })
        })

        const { data } = await res.json();

        dispatch({
            type: GET_USER,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    } finally {
        hideLoading()
    }
}

export const showLoading = () => ({
    type: SHOW_LOADING
})

export const hideLoading = () => ({
    type: HIDE_LOADING
})