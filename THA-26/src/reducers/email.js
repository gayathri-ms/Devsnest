const mailReducer = (state = "" , action) => {
		
		switch(action.type)
		{
			case "EMAIL" : 	console.log("email");
							state=action.payload;
							break;

			default : console.log("Empty");
		}
		
		return state ;

}

export default mailReducer;