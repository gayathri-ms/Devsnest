const addtodo = (val:string) => {
	return {
		type : "ADD_TODO",
		payload : val
	}
}

const deletetodo = (val:number) => {
	return {
		type : "DEL_TODO",
		payload : val
	}
}

export { addtodo , deletetodo };