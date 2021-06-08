import React from 'react'
import './form.css'

const Form = ({onInputchange1 ,onchange2}) =>{
	return(
		<div className='center'>
			<div>
				<input onChange={onInputchange1}
				 className ='form' type='number' placeholder="Enter first no:" /><br/><br/>
				<input onChange={onchange2}
				className='form' type='number' placeholder="Enter second no:" />
			</div>
		</div>
		);
}

export default Form;