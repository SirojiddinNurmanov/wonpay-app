import {
    GET_USER_NOTIFICATIONS,
    GET_USER,
    USER_ERROR,
    SHOW_LOADING,
    HIDE_LOADING,
    GET_TRANSACTIONS
} from "../actionTypes"

const initialState = {
    notifications: {
        unread: 0
    },
    user: null,
    loading: false,
    error: '',
    transactions: null,
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
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload
            }
        default:
            return state
    }
}

export default reducer
