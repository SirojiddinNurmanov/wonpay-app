import {
    GET_USER_NOTIFICATIONS,
    GET_USER,
    USER_ERROR,
    SHOW_LOADING,
    HIDE_LOADING,
    GET_TRANSACTIONS,
    GET_PROCESSES,
    GET_QUERIES,
    GET_OFFERS
} from "../actionTypes"

const initialState = {
    notifications: {
        unread: 0
    },
    user: null,
    loading: false,
    error: '',
    transactions: null,
    queries: null,
    offers: null
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
        case GET_PROCESSES:
            return {
                ...state,
                processes: action.payload
            }
        case GET_QUERIES:
            return {
                ...state,
                queries: action.payload
            }
        case GET_OFFERS:
            return {
                ...state,
                offers: action.payload
            }
        default:
            return state
    }
}

export default reducer
