import todoReducer from "./todoreducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
	todo : todoReducer ,
});

export default rootReducer;