import totaldataReducer from "./totaldataReducer"
import placeReducer from "./placereducer"
import toggleReducer from "./toggleReducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers( {
	place: placeReducer ,
	totaldata : totaldataReducer ,
	toggle : toggleReducer ,
})

export default rootReducer;