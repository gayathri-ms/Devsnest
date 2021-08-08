const totaldataReducer = (state={} , action) => {
	if(action.type === "UPDATE_TOTALDATA" ){
		return action.payload;
	}

	return state;
}

export default totaldataReducer;