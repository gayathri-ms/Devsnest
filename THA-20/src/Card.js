import './App.css'
import React , {useState , useEffect} from 'react'

function Card ({item})
{
	const [items,setItems] = useState(item)

	return ( 
		<div>
		{
			items.map((it,index)=>{
				return(
					<div className='card2' key={index}>
					<div className='card-inline'>
						<div><h1 className="title">{it.title}</h1></div>
						<div><button className='del' 
						onClick={() => {
							const newItem=items.filter((e,i) => i !== index);
							setItems(newItem);
						}} 
						>Delete</button></div>
					</div>
					<p className='para'>You have consumed {it.cal} cals today</p>
					</div>
				);
			})
		}
			
		</div>
		);
}

export default Card;