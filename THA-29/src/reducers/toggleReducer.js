const toggleReducer = (state=false , action) => {
	
		if(action.type === "TOGGLE_DATA"){
			return (!state);
	}
	return state;
};

export default toggleReducer;