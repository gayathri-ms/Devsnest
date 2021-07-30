import userReducer from "./username"
import passReducer from "./password"
import mailReducer from "./email"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
	user : userReducer ,
	pass: passReducer ,
	email: mailReducer
});

export default rootReducer;