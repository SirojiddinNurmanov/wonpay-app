import {
    GET_USER_NOTIFICATIONS,
    GET_USER,
    USER_ERROR,
    SHOW_LOADING,
    HIDE_LOADING,
    GET_TRANSACTIONS,
    GET_PROCESSES,
    GET_QUERIES,
    GET_OFFERS,
    GET_CARRIERS,
    GET_ALL_USERS,
    ADD_TO_CARRIERS,
    REMOVE_FROM_CARRIERS,
    ADD_TO_CLIENTS,
    REMOVE_FROM_CLIENTS,
    CHANGE_QUERY_RATE
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
    offers: null,
    carriers: null,
    newCarriers: [],
    newClients: [],
    allusers: null
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
        case GET_CARRIERS:
            return {
                ...state,
                carriers: action.payload,
                newCarriers: action.payload.map(carrier => carrier.id)
            }
        case GET_ALL_USERS:
            return {
                ...state,
                allusers: action.payload,
                newClients: action.payload.filter(el => el.role === "client").map(el => el.id)
            }
        case ADD_TO_CARRIERS:
            return {
                ...state,
                newCarriers: [...state.newCarriers, action.payload]
            }
        case REMOVE_FROM_CARRIERS:
            return {
                ...state,
                newCarriers: state.newCarriers.filter(newCarriers => newCarriers !== action.payload)
            }
        case ADD_TO_CLIENTS:
            return {
                ...state,
                newClients: [...state.newClients, action.payload]
            }
        case REMOVE_FROM_CLIENTS:
            return {
                ...state,
                newClients: state.newClients.filter(newClients => newClients !== action.payload)
            }
        case CHANGE_QUERY_RATE:
            return {
                ...state,
                queries: state.queries.map(query => (query.id === action.payload.id) ? action.payload : query)
            }
        default:
            return state
    }
}

export default reducer
