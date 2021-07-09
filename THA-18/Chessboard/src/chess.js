import './App.css'

const Row1 = () => {
	return(
			<div className='row'>
				{
					[1,2,3,4,5,6,7,8].map((item) => {
						return(
						item%2===0 ? 
						(<div key={item} className='card4'></div>):
						(<div  key={item} className='card3'></div>)
					)})
				}
			</div>
		);
}

const Row2 = () =>{
	return(
			<div className='row'>
				{
					[1,2,3,4,5,6,7,8].map((item) => {
						return(
						item%2===0 ? 
						(<div  key={item} className='card3'></div>):
						(<div  key={item} className='card4'></div>)
					)})
				}
			</div>
		);
}

function Chess(){
	return(
		<div className='card2'>
		{
			[1,2,3,4].map((item) => {
				return(
				<div key={item}>
					<Row1/>
					<Row2/>
				</div>				
			)})
		}
		</div>
		);
}

export default Chess;