import { combineReducers } from "redux"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    app: userReducer
})

export default rootReducer