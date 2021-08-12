import todoReducer from "./todoReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
	todo : todoReducer,
})

export type rootType = ReturnType<typeof rootReducer>;

export default rootReducer;
