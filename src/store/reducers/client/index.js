import * as Types from "../../actionTypes/client"

const initialState = {
    transactions: null,
    queries: null,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_TRANSACTIONS:
            return {
                ...state,
                transactions: payload
            }
        case Types.GET_QUERIES:
            return {
                ...state,
                queries: payload
            }
        case Types.SET_TRANSACTION_PROOF:
            return {
                ...state,
                transactions: state.transactions.map(transaction => (transaction.id === payload.id) ? payload : transaction)
            }
        default:
            return state
    }
}

export default reducer
