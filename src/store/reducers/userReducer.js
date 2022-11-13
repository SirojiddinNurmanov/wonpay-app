import * as Types from "../actionTypes"

const initialState = {
    notifications: [],
    unreadNotifications: [],
    user: null,
    loading: false,
    error: '',
    transactions: null,
    queries: null,
    offers: null,
    carriers: null,
    newCarriers: [],
    newClients: [],
    allUsers: null,
    moneyflow: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_USER:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case Types.GET_USER_NOTIFICATIONS:
            return {
                ...state,
                notifications: payload,
                unreadNotifications: payload.filter(notification => notification.status === 0)
            }
        case Types.USER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case Types.SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case Types.HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        case Types.GET_TRANSACTIONS:
            return {
                ...state,
                transactions: payload
            }
        case Types.GET_PROCESSES:
            return {
                ...state,
                processes: payload
            }
        case Types.GET_QUERIES:
            return {
                ...state,
                queries: payload
            }
        case Types.GET_OFFERS:
            return {
                ...state,
                offers: payload
            }
        case Types.GET_CARRIERS:
            return {
                ...state,
                carriers: payload,
                newCarriers: payload.map(carrier => carrier.id)
            }
        case Types.GET_ALL_USERS:
            return {
                ...state,
                allUsers: payload,
                newClients: payload.filter(el => el.role === "client").map(el => el.id)
            }
        case Types.ADD_TO_CARRIERS:
            return {
                ...state,
                newCarriers: [...state.newCarriers, payload]
            }
        case Types.REMOVE_FROM_CARRIERS:
            return {
                ...state,
                newCarriers: state.newCarriers.filter(newCarriers => newCarriers !== payload)
            }
        case Types.ADD_TO_CLIENTS:
            return {
                ...state,
                newClients: [...state.newClients, payload]
            }
        case Types.REMOVE_FROM_CLIENTS:
            return {
                ...state,
                newClients: state.newClients.filter(newClients => newClients !== payload)
            }
        case Types.SET_OFFER_QUERIES:
            return {
                ...state
            }
        case Types.CHANGE_QUERY_STATUS:
        case Types.CHANGE_QUERY_RATE:
            return {
                ...state,
                queries: state.queries.map(query => (query.id === payload.id) ? payload : query)
            }
        case Types.CLOSE_OFFER:
        case Types.CHANGE_OFFER_RATE:
            return {
                ...state,
                offers: state.offers.map(offer => (offer.id === payload.id) ? payload : offer)
            }
        case Types.SET_TRANSACTION_PROOF:
            return {
                ...state,
                transactions: state.transactions.map(transaction => (transaction.id === payload.id) ? payload : transaction)
            }
        case Types.GET_MONEY_FLOW:
            return {
                ...state,
                moneyflow: payload
            }
        default:
            return state
    }
}

export default reducer
