const updatePlace = (place) => {
	return {
		type:"UPDATE_PLACE",
		payload: place
	};
}

const updatetotalData = (place) => (dispatch) => {
	return(
		 fetch(`https://api.weatherapi.com/v1/forecast.json?key=6d8af3f1434344cb96a163106210508&q=${place}`)
	    .then(res => res.json())
	    .then(data => 
	    		dispatch({
	    			type: "UPDATE_TOTALDATA",
	    			payload :data
	    		})
	    	)
	);
}	
const toggledata = () => {
	return {
		type: "TOGGLE_DATA",
		
	};
}

export {updatePlace , updatetotalData , toggledata};