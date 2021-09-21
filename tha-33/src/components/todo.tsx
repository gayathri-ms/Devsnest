import React , {useState , useContext} from "react"
import Theme from "./theme"

interface obj {
	title:string
}

interface prop {
	todo:obj ,
	setValue: (value : obj) => void ,
	todos: obj[],
	setTodos: (todos : obj[]) => void ,
	i: any ,
	value:obj
}

const Todo = ({todo , setValue , todos , setTodos , i , value} : prop) => {

	const [isEdit , setIsedit] = useState<boolean>(false);
	const { theme , setTheme } = useContext(Theme)

	return(
		<div className={ theme ? "card card_dark" : "card" } id={i} style={{display:"flex" , flexDirection:"column"}}>
			
			<div>
			{
				!isEdit ? 
				<div >
					<p className="todo_title" > {todo.title} </p>
					<p className="todo_done" >Completed<input type="checkbox" className="todo_chkbx" /></p>
				</div> :
				<div style={{display:"inline-flex"}} >
					<input className="todo_input" type="text" placeholder={todo.title} 
					 onChange={(e) => {
					 	todo.title=e.target.value
					 }}
					/>
				</div>
			}
				<div>
					{
						!isEdit ? 
						<button className= "todo_btn"  onClick={() => setIsedit(!isEdit)} > 
						Edit</button> :  
						
						<button className= "todo_btn" 
						onClick={() => {
							setIsedit(!isEdit)
							setTodos([...todos])
						} }> 
						Done</button>
					 }
					
					<button className="todo_btn" 
					 onClick={() => {
					 	const newtodo : obj[] = todos.filter((todo :obj , index : Number) => i!==index);
						setTodos(newtodo)
					 }}
					 >Delete</button>
				</div>
			</div>
		</div>
		);
}

export default Todo;