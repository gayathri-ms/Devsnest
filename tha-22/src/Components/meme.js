import {useState} from 'react'
import './meme.css'

const Meme = ({meme1 , setMeme1}) => {
	const [memegen , setMemegen] = useState({
		id:meme1.id,
		username:"teasty",
		password:"PPS$Asr52ttCfaF",
		boxes:[]
	})
const onHandlechange = () => {
	let url = `https://api.imgflip.com/caption_image?template_id=${memegen.id}&username=${memegen.username}&password=${memegen.password}` 
	
	memegen.boxes.map((e , index) => (
		url += `&boxes[${index}][text]=${e.text}`
		))
	console.log(url)
}

	return(
		<div className='meme1'>
			<img src={meme1.url} alt="" className='memeImg' />
			<div>
				<form>
					{
						[...Array(meme1.box_count)].map((e , index) => 
							(<input key={index} type="text" required
								placeholder={`Meme Caption ${index+1}`}
								className='box' 
								onChange={(e)=>{
									const newbox=memegen.boxes
									newbox[index]={text:e.target.value}
									setMemegen({...memegen , boxes:newbox})
									// console.log(memegen)
								}}
								/>))
					}
				</form>
			</div>
			<div className='button'>
				<button onClick={()=>setMeme1(null)} className='cbutton'>
					Choose Template
				</button>
				<button className='cbutton' onClick={onHandlechange}>Create Meme</button>
			</div>
		</div>
		);
}

export default Meme;