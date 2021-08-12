import React , {useState } from "react"
import { useSelector , useDispatch } from "react-redux"
import { addtodo , deletetodo } from "../actions"

const Todo = () => {

	const dispatch = useDispatch();
	const [ input , setInput ] = useState<string>("") 
	const todo:any = useSelector<any>(state => state.todo)
	const onHandle = () => {
		if(input !== ""){
			dispatch(addtodo(input));
			setInput("");
		}
	}
	return (
		<div>
			<input type="text" value={input} className="input"
			onChange={(e) => setInput(e.target.value) } />
			
			<button className="addbtn" onClick={onHandle} >Add Note</button>

			{
				todo.length !== 0 ?
				(
					todo.map((t:string, index:any) => {
						return (
							<div key={index} style={{display:"flex", justifyContent:"center"}}>
								<ul className="lists" >
									<li className="list" >{t}</li>
									<button className="btn" onClick={() => dispatch(deletetodo(index))} >Delete</button>
								</ul>
							</div>
						);
					})
				)
				
				: <div className="new" >Add new notes</div>
			}

		</div>
		);
}

export default Todo;