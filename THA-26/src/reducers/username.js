const userReducer = (state = "" , action) => {
		
		switch(action.type)
		{
			case "USERNAME" : 	console.log( action.payload);
								state=action.payload;
								// return action.payload;
								break;
			default : console.log("Empty");
		}		
		return state ;

}

export default userReducer;