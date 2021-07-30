const username = (val) => {
	return {
		type: "USERNAME" ,
		payload : val
	};

		
};

const password = (val) => {
	return{
		type: "PASSWORD" ,
		payload : val
	};

		
};

const email = (val) => {
	return{
		type: "EMAIL" ,
		payload : val
	};

		
};

export  {username , password , email };