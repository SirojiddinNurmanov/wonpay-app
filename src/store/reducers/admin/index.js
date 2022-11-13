import * as Types from "../../actionTypes/admin"

const initialState = {
    queries: null,
    offers: null,
    carriers: null,
    newCarriers: [],
    newClients: [],
    allUsers: null
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
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
        case Types.CHANGE_QUERY_RATE:
            return {
                ...state,
                queries: state.queries.map(query => (query.id === payload.id) ? payload : query)
            }
        case Types.CHANGE_OFFER_RATE:
            return {
                ...state,
                offers: state.offers.map(offer => (offer.id === payload.id) ? payload : offer)
            }
        default:
            return state
    }
}

export default reducer
