import { useDispatch , useSelector } from "react-redux"
import {toggledata} from "../actions"

const Theme = () => {
	const theme = useSelector(state => state.toggle);
	const dispatch = useDispatch();
	return (
		<div style={{textAlign:"right" }} >
			<button className={ theme ? "in_button darkbtn" : "in_button"}
			style={{margin:"10px"}}
			onClick={() =>  dispatch(toggledata())} >
			{ theme ? "Dark" : "Light" }
			</button>
		</div>
		);
}

export default Theme;