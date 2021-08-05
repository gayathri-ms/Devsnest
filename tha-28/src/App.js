import './App.css';
import { useEffect , useState } from "react"

function App() {

  const [input , setInput] = useState("")
  const [place , setPlace] = useState("")
  const [totaldata ,setTotaldata] = useState({})

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=6d8af3f1434344cb96a163106210508&q=${place}`)
    .then(res => res.json())
    .then(data => setTotaldata(data))
  }, [] )

  return (
    <div className="App">
      <input type="text" value={input} placeholder="Enter any city name" onChange={(e) => setInput(e.target.value) } />
      <button onClick={() => {
        setPlace(input);
        setInput("")
      }}
      >Get Report</button>
      {
         place ?
          <div>
            hello
          </div>
          : <h1> City not found </h1>
      }
      
    </div>
  );
}

export default App;
