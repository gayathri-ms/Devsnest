import './App.css';
import React , {useState , useEffect} from 'react'
import Meme from './Components/meme'

function App() {
  const [memes , setMemes] = useState([])
  const [meme1 , setMeme1] = useState(null)

  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then((res) => res.json())
    .then((data) => setMemes(data.data.memes))
  }, [])

  const onHandle = (meme1) => {
    setMeme1(meme1)
  }
  
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      { (meme1 !== null) ? <Meme meme1={meme1} setMeme1={setMeme1} />
      : (
          <div>
            {memes.map(meme  => {
             return(
              <div key={meme.id} className='meme' >
                <img src={meme.url} alt='meme' className='image' 
                onClick={() => onHandle(meme) } />
              </div>);
            })}
          </div>
        )
      }
        
    </div>
  );
}

export default App;
