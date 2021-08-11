import React , {useState} from "react"
import Todo from "./todo"

interface obj {
	title:string
}

const Todolist = () => {

	
	const [input , setInput] = useState<string>("");
	const [todos , setTodos] = useState<obj[]>([]);
	const [value , setValue] = useState<obj>({
		title: ""
	})

	const onHandlechange = () => {
		if(input !== "")
		{
			setTodos([...todos , value]);
			setValue({ ...value ,
				title:""
			})
			setInput("")
		}
		
	}


	return (
		<div>
			<div className="todo" >
				<input className="input" type="text" value={input} 
				onChange = {(e) => {
					setValue({...value , title:e.target.value}) 
					setInput(e.target.value)
				} }/>
				<button className="btn" 
				onClick={onHandlechange}
				>Add Todo </button>
			</div>
			{/*{console.log(todos)}*/}
			{	
				todos.length !== 0 ?
				(
					todos.map((todo , index) => {
					return (
						<Todo todo ={todo} setValue={setValue} 
							todos={todos} setTodos={setTodos} 
							key={index} i={index} value={value} />
						);
					})
				) : 
				<div>Add New Items</div> 
			} 
			
		</div>
		);
}

export default Todolist;