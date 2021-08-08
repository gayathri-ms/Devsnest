import { useDispatch , useSelector } from "react-redux"
import {updatePlace , updatetotalData } from "../actions"


const Form = () => {
	const dispatch = useDispatch();
	const input = useSelector(state => state.place);
	const theme = useSelector(state => state.toggle);

	return(
		<div>
			 <input className={theme ? "input dark_in" : "input" } type="text" value={input} 
			 placeholder="Enter any city name"
			  onChange={(e) => dispatch(updatePlace(e.target.value)) } />
		     
		     <button className={ theme ? "in_button darkbtn" : "in_button"} 
		     onClick={() =>
		     	{
		     		dispatch(updatetotalData(input))
		     		dispatch(updatePlace(""))
		     	}
		     }
		     
		      >Get Report</button>
		      
		</div>
		);
}

export default Form;