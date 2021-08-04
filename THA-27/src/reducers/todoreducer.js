const todoReducer = (state = [] , action) => {
	switch(action.type){
		case "ADD_ITEM":
			return [...state , action.payload];
			
		case "REMOVE_ITEM":
			return state.filter(( _ , index) => action.payload !== index);
			
		default : console.log("Searched type is not present");
	};
	return state;
}

export default todoReducer;