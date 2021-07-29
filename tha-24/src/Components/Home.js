import {useState, useEffect } from "react"


const Home = ({islogged,setIslogged}) => {

	const [load , setLoad] = useState(false);

	function sleep(ms){
		return new Promise(resolve => setTimeout(resolve,ms));
	}

	async function onHandle () {
	 	setLoad(true)
	 	await sleep(1000);
	 	setLoad(false)
	 	setIslogged(!islogged)
	}

	

	return (
		<div> 
			<h2> Home </h2>
			<p> If not logged in can't access , Profile and DashBoard </p>
			{
				load ? "Loading..." 
				: <button onClick={onHandle}> 
					{ (islogged ? "Logout" : "Login")
					}
				</button>
			}
			
		</div>
		);
}

export default Home;