import React from 'react'
import './Add.css'

const Display = ({total}) =>{
	return(
		<div className='center'>
			<label>Result:&nbsp;</label>
			<button style={{minWidth:'100px', height:'20px' ,backgroundColor:'transparent'}}>{total} </button>
		</div>
		);
}

export default Display;