import React from 'react'

const Multiply = ({onSubmit }) =>{
	return(
		<div className='center'>
			<button onClick={()=> onSubmit('Multiply') } className='circle'>Multiply *&nbsp;</button>
		</div>
		);
}

export default Multiply;