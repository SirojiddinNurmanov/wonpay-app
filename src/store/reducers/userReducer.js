import { GET_USER_NOTIFICATIONS, GET_USER, USER_ERROR, SHOW_LOADING, HIDE_LOADING } from "../actionTypes"

const initialState = {
    notifications: null,
    user: null,
    loading: false,
    error: '',
    backend_url: "https://wonpay.thesmart.uz/api"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case GET_USER_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            }
        case USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default reducer
