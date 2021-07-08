import './chessboard.css'

const Card3 = () => {
	return (
		<div className='card3'></div>
		);
}

const Card4 = () => {
	return (
		<div className='card4'></div>
		);
}

const Row1 = () => {
	return(
			<div className='row'>
				<Card3 /> <Card4 />
				<Card3 /> <Card4 />
				<Card3 /> <Card4 />
				<Card3 /> <Card4 />
			</div>
		);
}

const Row2 = () =>{
	return(
			<div className='row'>
				<Card4 /><Card3 /> 
				<Card4 /><Card3 /> 
				<Card4 /><Card3 /> 
				<Card4 /><Card3 /> 
			</div>
		);
}

const Chessboard = () => {
	return(
		<div className='card2'>
			<Row1 /><Row2 />
			<Row1 /><Row2 />
			<Row1 /><Row2 />
			<Row1 /><Row2 />
		</div>
		);
}

export default Chessboard;