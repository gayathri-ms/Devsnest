import React from 'react'
import './Add.css'

const Add = ({onSubmit }) =>{
	return(
		<div className='center'>
			<button onClick={()=> onSubmit('Add') } className='circle'>Add <sup>+</sup></button>
		</div>
		);
}

export default Add;