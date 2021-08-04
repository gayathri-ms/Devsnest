import { removeitem } from "../actions"
import { useDispatch , useSelector} from "react-redux"
// import {useState} from "react" 

const List = () => {

	const dispatch = useDispatch();
	const ival = useSelector(state => state.todo);


	return (
		<div className="cards">
		{
			ival.map((val , index) => {
				return (
					<div className="card" key={index}>
						<div className="details" >
							<input className="check" type="checkbox" />
							<span>{val.input}</span>
						</div>
						<div>
							<button className="del" onClick = {() => dispatch(removeitem(index))} >Delete</button>
						</div>
					</div>
				);
				
			})
		}
			
		</div>
		);
}

export default List;