import {additem} from "../actions"
import { useState  } from "react"
import { useDispatch } from "react-redux"

const Addtodo = () => {
	const dispatch = useDispatch();
	const [it , setIt] = useState("")
	const items = {
		input: it,
		done:false
	}
	return (
		<div>
			<input className="input" type="text" value={it} onChange={(e) =>setIt(e.target.value)}/>
			<button className="addtodo" onClick = { () =>{
				if(it !== "")
				{
					dispatch(additem(items));
					setIt("");
				}
				
			} } >Add Todo</button>
		
		</div>
		);
}

export default Addtodo;