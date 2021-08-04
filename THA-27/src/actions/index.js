const additem = (val) => {
	return {
		type:"ADD_ITEM" ,
		payload : val
	};
}

const removeitem = (val) => {
	return {
		type:"REMOVE_ITEM" ,
		payload : val
	};
}

export {additem , removeitem};