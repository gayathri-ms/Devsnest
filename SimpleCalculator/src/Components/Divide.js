import React from 'react'

const Divide = ({onSubmit }) =>{
	return(
		<div className='center'>
			<button onClick={()=> onSubmit('Divide') } className='circle'>Divide / &nbsp;</button>
		</div>
		);
}

export default Divide;