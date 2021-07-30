const passReducer = (state = "" , action) => {
		
		switch(action.type)
		{
			case "PASSWORD" : 	console.log("password");
								state=action.payload;
								break;
			default : console.log("Empty");
		}
		
		return state ;

}

export default passReducer;