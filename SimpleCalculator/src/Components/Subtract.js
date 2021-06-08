import React from 'react'

const Subtract = ({onSubmit }) =>{
	return(
		<div className='center'>
			<button onClick={()=> onSubmit('Subtract') } className='circle'>Subtract <sup>-&nbsp;</sup></button>
		</div>
		);
}

export default Subtract;