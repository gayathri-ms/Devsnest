interface actionType {
	type:string ,
	payload: string | number
}

const todoReducer = ( state=[] , action: actionType) => {
	switch(action.type){
		case "ADD_TODO":
			return [...state , action.payload];
		case "DEL_TODO" :
			return state.filter((_ , index: number) => action.payload !== index);
		default :
			return state;
	}
}

export default todoReducer;